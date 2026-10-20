import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import sass from 'sass';

export default defineConfig({
	plugins: [sveltekit(), devtoolsJson()],
	css: {
        preprocessorOptions: {
            scss: {
                logger: {
                    warn: (message) => {
                        if (
                            !message.includes('Deprecation Warning') &&
                            !message.includes('@import rules are deprecated') &&
                            !message.includes('Global built-in functions are deprecated and will be removed') &&
                            !message.includes('The legacy JS API is deprecated and will be removed') &&
                            !message.includes('https://sass-lang.com/d/color-functions') &&
                            !message.includes('repetitive deprecation warnings omitted')
                        ) {
                            console.warn(message); // Only log non-deprecation warnings
                        }
                    },
                },
            },
        },
    },
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.js',
				test: {
					name: 'client',
					environment: 'browser',
					browser: {
						enabled: true,
						provider: 'playwright',
						instances: [{ browser: 'chromium' }]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.js']
				}
			},
			{
				extends: './vite.config.js',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
