import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

export default defineConfig({
  server: {
    publicDir: {
      // name: 'src/static',
    },
  },
  plugins: [
    pluginReact(),
    pluginSvgr({
      svgrOptions: {
        exportType: 'named',
      },
    }),
  ],
  dev: {
    liveReload: true,
  },
  tools: {
    rspack(config, { appendPlugins }) {
      appendPlugins(new RsdoctorRspackPlugin({}));
    },
  },
});
