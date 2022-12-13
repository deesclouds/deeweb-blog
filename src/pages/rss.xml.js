import rss from '@astrojs/rss';

export const get = () => rss({
    title: 'DeeWeb | Blog',
    description: 'My journey learning Astro',
    site: 'https://deeweb.netlify.app',
    items: import.meta.glob('./**/*.md'),
    customData: `<language>en-us</language>`,
});