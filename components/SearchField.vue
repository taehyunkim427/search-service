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
            :items="tags"
            @keyup.enter="onKeyEnterSearch"
            @input="onItemSelected">
        </v-autocomplete>
      </v-col>
</template>
<script>
import { FETCH_BLOG_LISTS, SET_SEARCH_QUERY, SET_SEARCH_PAGE } from '@/store'

export default {
    data() {
        return {
            searchQuery: "",
        };
    },
    methods : {
        searchBlogs() {
            this.$store.commit(SET_SEARCH_PAGE, 1);
            this.$store.dispatch(FETCH_BLOG_LISTS);
            // this.$store.dispatch(FETCH_HYPE_QUERY);
            
            // 결과 페이지로 이동하도록 설정. 
            this.$route.path === '/' && this.$router.push({ path: '/list' });

        },
        onKeyEnterSearch(e) {
            e.preventDefault();
            e.target.value.trim() && this.searchBlogs(e);
            this.$store.commit(SET_SEARCH_QUERY, e.target.value);
        },
        onItemSelected(selectedItem) {
            selectedItem && this.$store.commit(SET_SEARCH_QUERY, selectedItem);
            this.searchBlogs();
        }
    },
    computed: {
        tags () {
            return this.$store.state.hypeQuery.map((item) => item.query);;
        }
    }
}
</script>
