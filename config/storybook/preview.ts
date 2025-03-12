import type {Preview} from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {ThemeType} from "../../src/app/providers/ThemeProvider";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import {ReduxDecorator} from "../../src/shared/config/storybook/ReduxDecorator/ReduxDecorator";
import {TranslationDecorator} from "../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator";

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
    StyleDecorator,
      ThemeDecorator(ThemeType.LIGHT),
      RouterDecorator,
    ReduxDecorator,
    TranslationDecorator
  ],
};


export default preview;
