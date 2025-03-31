/**
 * Icons adapted from https://www.svgrepo.com/ and https://blendicons.com/
 *
 * Want to add more?
 * 1. Find the icon you want on the above websites
 * 2. Click “Copy SVG” or even download.
 * 3. Create a file for that svg in the assets/icons folder and paste it there.
 * 4. Change width and height values with {{size}} like width="{{size}}"
 * 5. Do the same for colors fill="{{color}}" and sometimes stroke="{{color}}"
 * 6. Or you can remove any `fill="#000000"`  or stroke. and it will inherit from the parent
 * 7. import it in this file and you are good to go with type suggestion. 
 */
import terminal from "@assets/icons/icon-terminal.svg?raw";
import menu from "@assets/icons/icon-menu.svg?raw";
import close from "@assets/icons/icon-close.svg?raw";
import holder from "@assets/icons/icon-default.svg?raw";
import link from "@assets/icons/logo-link-chain-solid.svg?raw";
import externalLink from "@assets/icons/icon-external-link.svg?raw";
import externalLinkSolid from "@assets/icons/icon-external-link-solid.svg?raw";
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
import mail from "@assets/icons/icon-mail.svg?raw";
import twitter from "@assets/icons/logo-twitter.svg?raw";
import linkedin from "@assets/icons/logo-linkedin.svg?raw";
import calendar from "@assets/icons/logo-calendar.svg?raw";
import arrowDown from "@assets/icons/icon-arrow-down-2.svg?raw";
import avatar1 from "@assets/avatar-1.svg?raw";
import avatar2 from "@assets/avatar-2.svg?raw";

export const iconPaths = {
  terminal,
  menu,
  close,
  default: holder,
  persona,
  link,
  externalLink,
  externalLinkSolid,
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
  rack,
  mail,
  twitter,
  linkedin,
  calendar,
  arrowDown,
  avatar1,
  avatar2,
};

export type iconPathsType = keyof typeof iconPaths;
