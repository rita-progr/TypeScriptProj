import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import {Suspense} from "react";

export const TranslationDecorator = (Story:  React.ComponentType) => (
    <I18nextProvider i18n={i18n}>
        <Suspense fallback="">
            <Story />
        </Suspense>
    </I18nextProvider>
);