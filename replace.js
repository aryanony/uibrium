const fs = require('fs');
const path = require('path');

const directory = process.cwd();

// Don't process these directories to save time and avoid breaking things before package removal
const ignoreDirs = ['node_modules', '.git', 'dist', '.next', '.pnpm'];

const patterns = [
  { regex: /UiBrium/g, replace: 'UiBrium' },
  { regex: /uibrium/g, replace: 'uibrium' },
  { regex: /UIBRIUM/g, replace: 'UIBRIUM' }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const relativePath = path.relative(directory, fullPath);

    if (ignoreDirs.some(ignore => relativePath.includes(ignore) || relativePath.startsWith(ignore))) {
      return;
    }

    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else {
      processFile(fullPath);
    }
  });
}

function processFile(filePath) {
  // Only process text files
  const ext = path.extname(filePath).toLowerCase();
  const validExts = ['.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.css', '.html', '.yaml', '.yml'];
  
  if (!validExts.includes(ext) && ext !== '') return; // Skip non-text binaries

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    for (const { regex, replace } of patterns) {
      if (regex.test(content)) {
        content = content.replace(regex, replace);
        hasChanges = true;
      }
    }

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  } catch (error) {
    // some files might just be binaries hiding without extension, skip smoothly
  }
}

console.log('Starting global replace...');
processDirectory(directory);
console.log('Done.');
