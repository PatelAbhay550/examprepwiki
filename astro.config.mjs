// @ts-nocheck
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://examprepwiki.vercel.app',
	integrations: [
		sitemap({
			// Custom configuration
			filter: (page) => !page.includes('/404'),
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
			// Customize specific page priorities
			customPages: [
				'https://examprepwiki.vercel.app/',
			],
			// Serialize individual pages
			serialize(item) {
				// Set higher priority for main exam pages
				if (item.url.includes('/exams/')) {
					item.priority = 0.9;
					item.changefreq = /** @type {const} */ ('daily');
				}
				// Set higher priority for study materials
				else if (item.url.includes('/study/')) {
					item.priority = 0.8;
					item.changefreq = /** @type {const} */ ('weekly');
				}
				// Set priority for current affairs
				else if (item.url.includes('/current-affairs/')) {
					item.priority = 0.9;
					item.changefreq = /** @type {const} */ ('daily');
				}
				return item;
			},
		}),
	],
});
