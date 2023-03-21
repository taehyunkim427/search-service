<template>

    <v-container>
        <BlogList/>
        <SearchPagination />
    </v-container>

</template>

<script>
import BlogList from '../components/BlogList.vue';
import SearchPagination from '~/components/SearchPagination.vue';

    export default {
        components: {
            SearchPagination,
            BlogList
        },
    }
</script>