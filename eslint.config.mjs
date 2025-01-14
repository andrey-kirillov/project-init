import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["./**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    ignores: [
      "./**/*.mdx",
      './**/*.md',
      './**/*.json',
      './**/*.png',
      './**/*.jpeg',
      './**/*.jpg',
      './**/*.gif',
      './**/*.wbmp',
      './**/*.svg',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      ecmaVersion: 2018,
      sourceType: "module",
      parser: tseslint,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          tsx: true,
        },
        project: "./tsconfig.json",
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      "no-console": 0,
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "max-len": ["error", {"code": 120}],
      "react/jsx-one-expression-per-line": 0,
      "no-unused-expressions": "error",
      "curly": ["error", "multi-or-nest"],
      "react-hooks/exhaustive-deps": "warn",
      "no-multiple-empty-lines": ["error", { "max": 1 }],
    },
  },
];
