<template>
    <div class="text-center">
        <v-container>
            <v-row justify="center">
                <v-col cols="8">
                    <v-container class="max-width">
                        <v-pagination
                        :value="currentPage"
                        class="my-4"
                        :length="pageableCount"
                        :total-visible="12"
                        @input="searchPages"
                        ></v-pagination>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { FETCH_BLOG_LISTS, SET_SEARCH_PAGE } from '@/store'

export default {
    computed: {
        currentPage () {
            return this.$store.state.searchPage;
        },
        pageableCount () {
            return this.$store.state.blogMeta.pageable_count > 50 ? 50 : this.$store.state.blogMeta.pageable_count;
        },
    },
    methods : {
        async searchPages(e) {
            this.$store.commit(SET_SEARCH_PAGE, e);
            await this.$store.dispatch(FETCH_BLOG_LISTS);
        },
    },
}
</script>
