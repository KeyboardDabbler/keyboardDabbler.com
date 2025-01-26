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
        root: 'border-none backdrop-blur-sm'
      }
    },
    footer: {
      slots: {
        container: 'py-4 lg:py-4 flex items-center justify-between'
      }
    }
  }
})
