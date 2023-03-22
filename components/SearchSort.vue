<!-- eslint-disable vue/no-v-html -->
<template>
    <v-chip-group
        selected-class="text-secondary"
        mandatory
        color="secondary"
        :value="searchSort"
        @change="searchPages"
    >
        <v-chip
        v-for="(tag, i) in tags"
        :key="i"
        :value="tag"
        >
        {{ tag }}
        </v-chip>
    </v-chip-group>
</template>

<script>
import { FETCH_BLOG_LISTS, SET_SEARCH_SORT } from '@/store'

export default {
    data: () => ({
      tags: [
        'accuracy',
        'recency',
      ],
    }),
    computed: {
        searchSort () {
            return this.$store.state.searchSort;
        },
    },
    methods : {
        async searchPages(e) {
            this.$store.commit(SET_SEARCH_SORT, e);
            await this.$store.dispatch(FETCH_BLOG_LISTS);
        },
    },
}
</script>