// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import {VitePWA} from 'vite-plugin-pwa'

// Utilities
import {build, defineConfig, loadEnv} from 'vite'
import {fileURLToPath, URL} from 'node:url'
import legacy from '@vitejs/plugin-legacy'

const fs = require('fs');
const crypto = require('crypto');

function getHash(file) {
  const data = fs.readFileSync(file);
  const hash = crypto.createHash('md5').update(data).digest('hex');
  return hash.slice(0, 8);
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());

  // Plugins
  const plugins = [
    vue({
      template: { transformAssetUrls }
    }),
    vuetify({
      autoImport: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ];

  return {
    plugins,
    define: {
      'process.env': env
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
      ],
    },
    server: {
      port: 3000,
    }
  };
});
