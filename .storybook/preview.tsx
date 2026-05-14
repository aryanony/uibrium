import type { Preview } from '@storybook/react';
import React from 'react';
import '../packages/ui/src/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0a0e1a' },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const bg = context.globals.backgrounds?.value;
      const isDark = bg === '#0a0e1a';

      React.useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
      }, [isDark]);

      return <Story />;
    },
  ],
};

export default preview;
