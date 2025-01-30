export default defineAppConfig({
  ui: {
    colors: {
      primary: 'lime',
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
    prose: {
      h2: {
        slots: {
          link: 'bg-gradient-to-r from-[var(--color-yellow-1)] to-[var(--ui-primary)] bg-clip-text text-transparent'
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
