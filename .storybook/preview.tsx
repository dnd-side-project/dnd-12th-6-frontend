import type { Preview } from '@storybook/react';
import React from 'react';

import '../src/styles/globals.css';
import Providers from '../src/utils/query/provider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: any) => {
      return (
        <Providers>
          <Story />
        </Providers>
      );
    },
  ],
};

export default preview;
