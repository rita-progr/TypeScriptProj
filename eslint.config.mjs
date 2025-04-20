import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import ritaafanPlugin from 'eslint-plugin-ritaafan-plugin'



/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {

    plugins: {
        "react-hooks": reactHooksPlugin,
       "ritaafan-plugin":ritaafanPlugin
  },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "warn", // Enable the rule
      "react-hooks/rules-of-hooks": "warn",
      "react-hooks/exhaustive-deps": "error",
      'ritaafan-plugin/path-checker':"error"
    },
  },
];