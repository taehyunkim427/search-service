<!-- eslint-disable vue/no-v-html -->
<template>
    <v-chip-group
        selected-class="text-secondary"
        mandatory
        color="secondary"
        :value="searchSize"
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
import { FETCH_BLOG_LISTS, SET_SEARCH_SIZE } from '@/store'

export default {
    data: () => ({
      tags: [
        5,
        10,
        25,
        50,
      ],
    }),
    computed: {
        searchSize () {
            return this.$store.state.searchSize;
        },
    },
    methods : {
        async searchPages(e) {
            this.$store.commit(SET_SEARCH_SIZE, e);
            await this.$store.dispatch(FETCH_BLOG_LISTS);
        },
    },
}
</script>