import { defineConfig } from '@jcamp/vitepress-blog-theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZhangXin's blog",
  description: 'A balanced life, coding for enjoyment',
  head: [
    ['link', { rel: 'icon', href: 'yiminglogo2.png' }],
  ],
  outDir: '../dist',

  themeConfig: {
    logo: 'yiminglogo2.png',
    siteTitle: "ZhangXin's Blog",
    footer: {
      message: '2024 - future',
      copyright: '祝你天天开心',
    },
    blog: {
      title: '博文',
      description: '✍️',
      defaultAuthor: 'ZhangXin',
      path: '/blog/',
      categoryIcons: {
        article: 'i-[heroicons-outline/book-open]',
        tutorial: 'i-[heroicons-outline/academic-cap]',
        document: 'i-[heroicons-outline/annotation]',
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[carbon/logo-vue]',
      },
    },
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      {
        text: 'Blog',
        items: [
          {
            text: 'Blog Home',
            link: '/blog/',
            activeMatch: '/blog/$',
          },
          {
            text: 'Tags',
            link: '/blog/tags',
            activeMatch: '/blog/tags',
          },
          {
            text: 'Archives',
            link: '/blog/archives',
            activeMatch: '/blog/archives',
          },
          // {
          //   text: 'RSS Feed',
          //   link: '/blog/feed.rss',
          // },
        ],
      },
      { text: 'About', link: '/blog/authors/zhangxin' },

    ],

    sidebar: [],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //     ],
    //   },
    // ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/zhangx1n',
      },
    ],
  },
})
