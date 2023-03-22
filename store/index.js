// store/index.js

// constants
export const FETCH_BLOG_LISTS = 'FETCH_BLOG_LISTS'
export const FETCH_HYPE_QUERY = 'FETCH_TOP_SCHEDULER'
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
export const SET_SEARCH_SORT = 'SET_SEARCH_SORT'
export const SET_SEARCH_PAGE = 'SET_SEARCH_PAGE'
export const SET_BLOGS = 'SET_BLOGS'
export const SET_BLOG_META = 'SET_BLOG_META'
export const SET_HYPE_QUERY = 'SET_HYPE_QUERY'
export const SET_SEARCH_SIZE = 'SET_SEARCH_SIZE'


// store
export const state = () => ({
    searchQuery: "카카오뱅크",
    searchSize: 10,
    searchSort: "accuracy",
    searchPage: 1,
    blogs: [],
    blogMeta: {},
    hypeQuery: [],
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
    },
    SET_HYPE_QUERY(state, hypeQuery) {
      state.hypeQuery = hypeQuery;
    },
  }
  
  export const actions = {
    async [FETCH_BLOG_LISTS]({ state, commit }) {
      const searchParams = { query: state.searchQuery, size : state.searchSize, sort: state.searchSort, page: state.searchPage }
      const { data } = await this.$axios.post('/blog/api/list', searchParams);
      commit('SET_BLOG_META', data.meta);
      commit('SET_BLOGS', data.documents);
    },
    async [FETCH_HYPE_QUERY]({ commit }) {
      const { data } = await this.$axios.get('/blog/cache/top');
      commit('SET_HYPE_QUERY', data.topSearchQuery);
    },
  }
   