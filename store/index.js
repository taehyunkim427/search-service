// store/index.js

// constants
export const FETCH_BLOG_LISTS = 'FETCH_BLOG_LISTS'

// store
export const state = () => ({
    searchQuery: "카카오뱅크",
    searchSize: 10,
    searchSort: "accuracy",
    searchPage: 1,
    blogs: [],
    blogMeta: {}
  })
  
  export const mutations = {
    SET_SEARCH_QUERY(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    SET_SEARCH_SIZE(state, searchSize) {
      state.searchSize = searchSize;
    },
    SET_SEARCH_SORT(state, searchSort) { 
      state.searchSort = searchSort;
    },
    SET_SEARCH_PAGE(state, searchPage) {
      state.searchPage = searchPage;
    },
    SET_BLOGS(state, blogs) {
      state.blogs = blogs;
    },
    SET_BLOG_META(state, blogMeta) {
      state.blogMeta = blogMeta;
    }
  }
  
  export const actions = {
    async [FETCH_BLOG_LISTS]({ state, commit }) {
      const searchParams = { query: state.searchQuery, size : state.searchSize, sort: state.searchSort, page: state.searchPage }
      const { data } = await this.$axios.post('/blog/api/list', searchParams);
      commit('SET_BLOG_META', data.meta);
      commit('SET_BLOGS', data.documents);
    },
  }
   