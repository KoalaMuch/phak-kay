import type { Preview } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';
import '../src/app/globals.css';

// Import translations
import enMessages from '../src/i18n/en.json';
import thMessages from '../src/i18n/th.json';

const messages = {
  en: enMessages,
  th: thMessages,
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'cream',
      values: [
        { name: 'cream', value: '#faf7f2' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '667px' } },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1440px', height: '900px' },
        },
      },
    },
  },
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'th',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'th', title: 'ไทย' },
          { value: 'en', title: 'English' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const locale = context.globals.locale || 'th';
      return (
        <NextIntlClientProvider
          locale={locale}
          messages={messages[locale as keyof typeof messages]}
        >
          <Story />
        </NextIntlClientProvider>
      );
    },
  ],
};

export default preview;
