import comp from "/Users/jiangyimin/Documents/personal/vuepress_blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"hostname\":\"https://www.jiangyimin.fun\",\"colorModeSwitch\":false,\"home\":true,\"heroImage\":\"https://vuejs.press/images/hero.png\",\"heroText\":\"Jim's Blog\",\"tagline\":\"欢迎来到我的博客\",\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
