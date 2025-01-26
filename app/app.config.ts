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
    }
  }
})
