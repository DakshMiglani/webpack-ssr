const meta = require('../router/meta.json')

export default {
  created () {
    if (process.env.VUE_ENV === 'client') return

    const metaData = meta[this.$route.path] || {}

    this.$ssrContext.title = metaData.title
    this.$ssrContext.description = metaData.description
    this.$ssrContext.keywords = metaData.keywords
  },

  methods: {
    setMeta () {
      if (typeof document === 'undefined') return

      const metaData = meta[this.$route.path] || {}

      document.title = metaData.title
      document.querySelector('meta[name="description"]').setAttribute('content', metaData.description)
      document.querySelector('meta[name="keywords"]').setAttribute('content', metaData.keywords)
    }
  }
}