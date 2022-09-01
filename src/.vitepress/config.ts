import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Secure-Survey',
    base: '/',
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/medelium/secure-survey-docs' },
        ],
        editLink: {
            pattern: 'https://github.com/medelium/secure-survey-docs/edit/master/src/:path',
            text: 'Edit this page on GitHub'
        },
        nav: [
            {
                text: 'Home',
                link: '/',
                activeMatch: '/',
            },
            {
                text: 'Guide',
                link: '/guide/',
                activeMatch: '/guide/',
            },
            {
                text: 'About',
                activeMatch: '/about/',
                items: [
                    { text: 'Team', link: '/about/team' },
                ]
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: 'Getting Started',
                    collapsible: false,
                    items: [
                        {text: 'Introduction', link: '/guide/index'},
                        {text: 'Workflow', link: '/guide/workflow'},
                    ]
                }
            ]
        }
    }
});
