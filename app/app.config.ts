export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      gray: 'neutral'
    }
  },
  uiPro: {
    header: {
      slots: {
        root: 'border-none backdrop-blur-sm',
        container: 'flex justify-between items-center mx-auto sm:px-8 px-4 w-full max-w-[98em]'
      }
    },
    footer: {
      slots: {
        container: 'py-4 lg:py-4 flex items-center justify-between'
      }
    },
    pageHero: {
      slots: {
        container: 'py-7 sm:py-7 lg:py-7'
      }
    },
    pageHeader: {
      slots: {
        title: 'text-base sm:text-lg text-pretty font-bold text-[var(--ui-text-highlighted)] bg-gradient-to-r from-[var(--color-yellow-1)] to-[var(--color-lime-400)] bg-clip-text text-transparent'
      }
    },
    pageBody: {
      base: 'pb-10'
    },
    prose: {
      h2: {
        slots: {
          link: 'bg-gradient-to-r from-[var(--color-yellow-1)] to-[var(--color-lime-400)] bg-clip-text text-transparent',
          leading: [
            'group-hover:opacity-0 group-focus:opacity-0'
          ],
          leadingIcon: 'hidden'
        }
      },
      p: {
        base: 'text-[var(--ui-text-toned)]'
      },
      li: {
        base: 'text-[var(--ui-text-toned)]'
      }
    }
  }
})
