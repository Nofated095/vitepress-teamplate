export default {
    base: '/',
    title: 'vitepress-example',
    appearance: true,
    lastUpdated: true,
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
            { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
            { text: 'Changelog', link: 'https://github.com/wfe-templates/vitepress/releases' }
        ],
        sidebar: {
            '/guide/':  [
            {
              text: 'Introduction',
              collapsible: true,
              items: [
                { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
                { text: 'Getting Started', link: '/guide/getting-started' }
            ]]
        },
        editLink: {
            pattern: 'https://github.com/wfe-templates/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/wfe-templates/vitepress' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Nofated'
        }
    }
}

function nav() {
    return [
        
    ]
}

function sidebarGuide() {
    return
}
