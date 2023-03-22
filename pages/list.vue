<template>
    <v-container>
        <BlogList/>
        <SearchPagination/>
        <button @click="refreshComponent"></button>
    </v-container>
</template>

<script>
import BlogList from '../components/BlogList.vue';
import SearchPagination from '~/components/SearchPagination.vue';
import { SET_BLOG_META, SET_BLOGS } from '@/store'

export default {
    created() {
        this.refreshComponent();
    },
    components: {
        SearchPagination,
        BlogList
    },
    methods: {
        async refreshComponent() {
            const searchParams = { 
                query: this.$store.state.searchQuery,
                size : this.$store.state.searchSize,
                sort: this.$store.state.searchSort,
                page: this.$store.state.searchPage
            }
            console.log(searchParams)
            const res = await this.$axios.post('/blog/api/list', searchParams);
            this.$store.commit(SET_BLOG_META, res.data.meta);
            this.$store.commit(SET_BLOGS, res.data.documents);
        },
    },
}
</script>