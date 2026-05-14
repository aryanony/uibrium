import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_DIR = path.resolve(__dirname, '../packages/ui/src/components');

function generateStoryTemplate(componentName) {
  const pascalCaseName = componentName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
    
  return `import type { Meta, StoryObj } from '@storybook/react';
import { ${pascalCaseName} } from './${componentName}';

const meta: Meta<typeof ${pascalCaseName}> = {
  title: 'Components/${pascalCaseName}',
  component: ${pascalCaseName},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ${pascalCaseName}>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};
`;
}

async function main() {
  const items = fs.readdirSync(COMPONENTS_DIR);

  for (const item of items) {
    const itemPath = path.join(COMPONENTS_DIR, item);
    const isDir = fs.statSync(itemPath).isDirectory();

    if (isDir) {
      const componentFile = path.join(itemPath, `${item}.tsx`);
      const storyFile = path.join(itemPath, `${item}.stories.tsx`);

      if (fs.existsSync(componentFile) && !fs.existsSync(storyFile)) {
        console.log(`Generating story for ${item}...`);
        fs.writeFileSync(storyFile, generateStoryTemplate(item));
      }
    } else if (item.endsWith('.tsx') && !item.includes('.stories.') && !item.includes('.test.')) {
        // Handle files directly in components dir (like footer.tsx)
        const componentName = item.replace('.tsx', '');
        const storyFile = path.join(COMPONENTS_DIR, `${componentName}.stories.tsx`);
        
        if (!fs.existsSync(storyFile)) {
            console.log(`Generating story for ${componentName}...`);
            fs.writeFileSync(storyFile, generateStoryTemplate(componentName));
        }
    }
  }
}

main().catch(console.error);
