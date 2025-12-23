// @ts-check
import stylistic from "@stylistic/eslint-plugin";
import * as astroParser from "astro-eslint-parser";
import eslintPluginAstro from "eslint-plugin-astro";
import oxlint from "eslint-plugin-oxlint";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores(["node_modules", ".astro", "website"]),
  // oxlint-disable-next-line no-named-as-default-member
  ...eslintPluginAstro.configs.recommended,
  stylistic.configs.customize({
    braceStyle: "1tbs",
    semi: true,
    quotes: "double",
  }),
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  ...oxlint.buildFromOxlintConfigFile("./.oxlintrc.json"),
);
