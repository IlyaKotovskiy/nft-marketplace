export default {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react/recommended",
  ],
  plugins: ["@typescript-eslint", "import"],
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "*.config.js",
    "*.d.ts",
  ],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "import/order": [
          2,
          {
            groups: [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
            ],
            "newlines-between": "always",
            pathGroups: [
              {
                pattern: "@/**",
                group: "internal",
              },
              {
                pattern: "@mui/**",
                group: "external",
              },
            ],
            alphabetize: {
              order: "asc",
            },
          },
        ],
      },
    },
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": 1,
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
        custom: {
          regex: "^T[A-Z]",
          match: true,
        },
      },
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "ignore",
      },
    ],
    "react/react-in-jsx-scope": "off",
  },
};
