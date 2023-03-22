<!-- eslint-disable vue/no-v-html -->
<template>
    <v-list>
        <v-list-item v-for="(hype, i) in hypeQuery" :key="i" @click="onHypeItemClick(hype.query)">

            <v-container class="bg-surface-variant">
                <v-row class="font-weight-regular text-lg-h6">
                    <v-col>
                        <div v-html="hype.query"></div>
                    </v-col>
                    <v-col>
                        <div v-html="hype.cnt"></div>
                    </v-col>
                </v-row>

                <v-row>
                    <v-divider v-if="i !== hypeQuery.length - 1"></v-divider>
                </v-row>

            </v-container>
                
        </v-list-item>
    </v-list>
</template>

<script>
import DOMPurify from 'dompurify';
import { FETCH_BLOG_LISTS, SET_SEARCH_QUERY, SET_SEARCH_PAGE, FETCH_HYPE_QUERY } from '@/store'

export default {
    computed: {
        hypeQuery() {
            return this.$store.state.hypeQuery.map(
                obj => Object.fromEntries(
                    Object.entries(obj).map(([key, value]) => [key, DOMPurify.sanitize(value)])
                )
            );
        },
    },
    methods : {
        onHypeItemClick(clickedItem) {
            this.$store.commit(SET_SEARCH_QUERY, clickedItem);
            this.$store.commit(SET_SEARCH_PAGE, 1);
            this.$store.dispatch(FETCH_BLOG_LISTS);
            this.$store.dispatch(FETCH_HYPE_QUERY);
            
            // 결과 페이지로 이동하도록 설정. 
            this.$route.path === '/' && this.$router.push({ path: '/list' });
        }
    },
}
</script>