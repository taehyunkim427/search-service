<template>
    <v-col align-self="start">
        <v-autocomplete
            ref="inputField"
            v-model="searchQuery"
            clearable
            min-width="300"
            label="Search"
            placeholder="Find new blog!"
            justify="bottom"
            prepend-icon="mdi-magnify"
            :items="items"
            @keyup.enter="throttledSearch">
        </v-autocomplete>
      </v-col>
</template>
<script>
import { throttle } from 'lodash';
import { FETCH_BLOG_LISTS } from '@/store'

export default {
    data() {
        return {
            searchQuery: "",
            items: [
                '다나카',
                '김건욱',
                '김태현',
                '안리',
            ]
        };
    },
    methods : {
        searchBlogs(e) {
            
            this.$store.commit('SET_SEARCH_QUERY', e.target.value);
            this.$store.commit('SET_SEARCH_PAGE', 1);
            this.$store.dispatch(FETCH_BLOG_LISTS);
            this.$emit('search-query-sent', 1);
            
            // 결과 페이지로 이동하도록 설정. 
            this.$route.path === '/' && this.$router.push({ path: '/list' });

        },
        throttledSearch: throttle(function (e) {
            e.target.value.trim() && this.searchBlogs(e);
        }, 500)
    }
}
</script>
