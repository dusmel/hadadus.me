/**
 * Icons adapted from https://phosphoricons.com/
 *
 * Want to add more?
 * 1. Find the icon you want on Phosphor Icons.
 * 2. Click “Copy SVG”.
 * 3. Paste the SVG code in your editor.
 * 4. Remove the `<svg>` wrapper so you only have elements like `<path>`, `<circle>`, `<rect>` etc.
 * 5. Remove any `stroke="#000000"` attributes
 * 6. Replace any `fill="#000000"` attributes with `stroke="none"`
 *    (or add `stroke="none"` on shapes with no `fill` or `stroke` specified).
 */
import terminal from "@assets/icons/terminal.svg?raw";
import holder from "@assets/icons/icon-default.svg?raw";
import link from "@assets/icons/logo-link-chain-solid.svg?raw";
import persona from "@assets/persona.svg?raw";
import light from "@assets/icons/icon-light-filled-1.svg?raw";
import dark from "@assets/icons/icon-dark.svg?raw";
import github from "@assets/icons/logo-github.svg?raw";
import githubFlat from "@assets/icons/icon-github-flat.svg?raw";
import js from "@assets/icons/icon-javascript.svg?raw";
import ruby from "@assets/icons/logo-ruby-1.svg?raw";
import typescript from "@assets/icons/logo-typescript.svg?raw";
import react from "@assets/icons/logo-react.svg?raw";
import rails from "@assets/icons/logo-rails.svg?raw";
import astro from "@assets/icons/logo-astro.svg?raw";
import reactNative from "@assets/icons/logo-react-native.svg?raw";
import docker from "@assets/icons/logo-docker.svg?raw";
import node from "@assets/icons/logo-node.svg?raw";
import digitalOcean from "@assets/icons/logo-digital-ocean.svg?raw";
import gcp from "@assets/icons/logo-gcp.svg?raw";
import automation from "@assets/icons/logo-automation.svg?raw";
import sentry from "@assets/icons/logo-sentry.svg?raw";
import circleCi from "@assets/icons/logo-circle-ci.svg?raw";
import heroku from "@assets/icons/logo-heroku.svg?raw";
import vitest from "@assets/icons/logo-vite.svg?raw";
import jest from "@assets/icons/logo-jest.svg?raw";
import cypress from "@assets/icons/logo-cypress.svg?raw";
import rspec from "@assets/icons/logo-rspec.svg?raw";
import test from "@assets/icons/logo-test.svg?raw";
import database from "@assets/icons/icon-database.svg?raw";
import redis from "@assets/icons/logo-redis.svg?raw";
import rack from "@assets/icons/logo-rack.svg?raw";

export const iconPaths = {
  terminal,
  'default': holder,
  persona,
  link,
  light,
  dark,
  github,
  "github-flat": githubFlat,
  js,
  ruby,
  typescript,
  react,
  rails,
  astro,
  "react-native": reactNative,
  "node-express": node,
  docker,
  "digital-ocean": digitalOcean,
  gcp,
  "github-action-ci-cd": automation,
  sentry,
  "circle-ci": circleCi,
  heroku,
  vitest,
  jest,
  cypress,
  rspec,
  capybara: test,
  postgres: database,
  mysql: database,
  redis,
  rack
};

export type iconPathsType = keyof typeof iconPaths;
