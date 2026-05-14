import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: 'UiBrium Design Sanctuary',
    brandUrl: 'https://uibrium.vercel.app',
    brandImage: 'https://raw.githubusercontent.com/aryanony/uibrium/main/lightMode.png',
    brandTarget: '_self',

    // UI
    appBg: '#020617',
    appContentBg: '#020617',
    appPreviewBg: '#020617',
    appBorderColor: '#1e293b',
    appBorderRadius: 12,

    // Typography
    fontBase: '"Inter", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#f8fafc',
    textInverseColor: '#020617',

    // Toolbar default and active colors
    barTextColor: '#94a3b8',
    barSelectedColor: '#3b82f6',
    barBg: '#020617',

    // Form colors
    inputBg: '#0f172a',
    inputBorder: '#1e293b',
    inputTextColor: '#f8fafc',
    inputBorderRadius: 8,

    colorPrimary: '#3b82f6',
    colorSecondary: '#3b82f6',
  },
});
