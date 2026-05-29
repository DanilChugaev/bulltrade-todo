import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line @typescript-eslint/no-var-requires
var path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
    base: '/bulltrade-todo/',
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src')
        },
    },
    plugins: [
        vue(),
    ],
    // @ts-ignore
    test: {
        globals: true,
        environment: 'happy-dom',
    },
});
