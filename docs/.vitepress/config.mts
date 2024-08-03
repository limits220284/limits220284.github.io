import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
const base = '/limits220284.github.io/'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  // base,
  lang: 'zh-cn',
  title: 'hay',
  description: '蔡!',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/66709461?s=400&u=7fa44d6fa72e52afcc2fb5abbc7ca2f4a7d9ec0e&v=4' }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    logo: 'https://avatars.githubusercontent.com/u/66709461?s=400&u=7fa44d6fa72e52afcc2fb5abbc7ca2f4a7d9ec0e&v=4',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    // nav: [
    //   { text: '首页', link: '/' },
    //   { text: '关于作者', link: 'https://sugarat.top/aboutme.html' }
    // ],
    nav: [
      {text: 'Go', link: '/Go/GORM'},
      {text: 'Redis', link: '/Redis/Redis锁'},
      {text: 'Mysql', link: '/Mysql/基础篇'},
      {text: '计算机网络', link: '/计算机网络/HTTP'},
      {text: '操作系统', link: '/操作系统/硬件结构'},
      {text: 'Linux', link: '/Linux/linux常用指令'},
      {text: 'Docker', link: '/Docker/Docker常用命令'},
      {text: "Shell", link: '/Shell/awk'},
      {text: "HDDB", link: '/HDDB/Raft'},
      {text: "Python", link: '/Python/Venv'},
      {text: "GORM", link: '/GORM/Association'},
      {text: "K8S", link: '/K8S/常用指令'},
      {text: "RabbitMq", link: '/RabbitMq/基础'}
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/limits220284'
      }
    ]
  }
})
