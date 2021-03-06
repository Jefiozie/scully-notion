import { ScullyConfig } from '@scullyio/scully';
require ('./scully/plugins/plugin')
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-notion",
  outDir: './dist/static',
  routes: {
  },  puppeteerLaunchOptions: {
    args: [
      '--disable-gpu',
      '--renderer',
      '--no-sandbox',
      '--no-service-autorun',
      '--no-experiments',
      '--no-default-browser-check',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-extensions',
    ],
  },
};