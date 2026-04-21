import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Матрёшка 52",
  description: "Официальный форум 52 сервера",
  lang: 'ru-RU',
  themeConfig: {
    // Логотип и поиск
    search: {
      provider: 'local'
    },
    
    // Навигация сверху
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Правила', link: '/rules/server-rules' },
      { text: 'Связь', link: 'https://discord.gg/your-link' }
    ],

    // Боковое меню (Sidebar) настроено под твои скриншоты
    sidebar: [
      {
        text: '📜 Основная информация',
        collapsed: false,
        items: [
          { text: 'Правила сервера', link: '/rules/server-rules' },
          { text: 'Общие правила', link: '/rules/server' },
          { text: 'Правила лидеров', link: '/rules/leaders' },
        ]
      },
      {
        text: '🏢 Государственные организации',
        collapsed: false,
        items: [
          { text: 'Правительство', link: '/fraction/pravo' },
          { text: 'ФСБ', link: '/fraction/fsb' },
          { text: 'МВД', link: '/fraction/mvd' },
          { text: 'Армия России', link: '/fraction/army' },
          { text: 'МЧС', link: '/fraction/mchs' },
          { text: 'Городская Больница', link: '/fraction/gb' },
          { text: 'ГТРК Temp', link: '/fraction/gtrk' },
        ]
      },
      {
        text: '📁 Система отчётов',
        collapsed: false,
        items: [
          { text: 'Подать жалобу', link: '/reports/complaints' },
          { text: 'Отчёты на повышение', link: '/reports/up' },
          { text: 'Заявления на перевод', link: '/reports/transfer' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/your-link' }
    ],

    outline: {
      label: 'На этой странице'
    },
    
    docFooter: {
      prev: 'Назад',
      next: 'Вперед'
    }
  },
  
  // Принудительная темная тема
  appearance: 'dark'
})
