<template>
    <v-col align-self="start">
        <v-autocomplete
            ref="inputField"
            :value="searchQuery"
            clearable
            min-width="300"
            label="Search"
            placeholder="Find new blog!"
            justify="bottom"
            prepend-icon="mdi-magnify"
            :items="tags"
            @keyup.enter.stop="throttledSearch"
            @input="onItemSelected">
        </v-autocomplete>
      </v-col>
</template>
<script>
import { throttle } from 'lodash';
import { FETCH_BLOG_LISTS, SET_SEARCH_QUERY, SET_SEARCH_PAGE } from '@/store'


export default {
    computed: {
        tags () {
            return this.$store.state.hypeQuery?.map((item) => item.query);
        },
        searchQuery () {
            return this.$store.state.searchQuery;
        }
    },
    methods : {
        throttledSearch: throttle(function (e) {
            e.target.value.trim().length !== 0 && this.searchBlogs(e.target.value);
        }, 200),
        onItemSelected(selectedItem) {
            selectedItem = selectedItem || "";
            selectedItem.trim().length !== 0 && this.searchBlogs(selectedItem);
        },
                searchBlogs(query) {
            this.$store.commit(SET_SEARCH_QUERY, query);
            this.$store.commit(SET_SEARCH_PAGE, 1);
            this.$store.dispatch(FETCH_BLOG_LISTS);
            
            // 결과 페이지로 이동하도록 설정
            this.$route.path === '/' && this.$router.push({ path: '/list' });
        }
    }
}
</script>
