<template>

    <v-container>
        
        <v-list>
            <v-list-item v-for="(item, i) in documents" :key="i" :href="item.url">

                <v-list-item-avatar rounded size="x-large" min-width="130px">
                    <img :src="item.thumbnail" alt="Item Thumbnail">
                </v-list-item-avatar>

                <v-container class="bg-surface-variant">
                    <v-row class="font-weight-bold text-lg-h6">
                        <v-col cols="12">
                            <div v-html="item.title"></div>
                        </v-col>
                    </v-row>
                    <v-row no-gutters class="text-md-h8 font-weight-thin">
                        <v-col cols="12">
                            <div v-html="item.contents"></div>
                        </v-col>
                    </v-row>
                    <v-row class="font-weight-light">
                        <v-col cols="6">
                            <div v-html="item.blogname"></div>
                        </v-col>
                        <!-- <v-col cols="6">
                            <v-list-subheader><span class="font-weight-light">{{ item.datetime }}</span></v-list-subheader>
                        </v-col> -->
                    </v-row>
                    <v-row>
                        <v-divider></v-divider>
                    </v-row>

                </v-container>
                    
            </v-list-item>
        </v-list>

        <SearchPagination :pageable_count="meta.pageable_count"/>
    </v-container>

</template>

<script>
    import DOMPurify from 'dompurify';

    import SearchPagination from '~/components/SearchPagination.vue';

    export default {
        components: {
            SearchPagination
        },
        props: {
            pageable_count: {
                type: Number,
                default: 1
            }
        },
        async asyncData({ $axios, query, $http, error }) {
            const res = await $axios.$post('/blog/api/list', query);
            return { meta: res.meta, documents: res.documents };
        },
        data: () => ({
            meta: {},
            documents: [],
        }),
        computed: {
            sanitizedHtml() {
                return DOMPurify.sanitize(this.documents.contents);
            },
        },
        methods: {
            async getBlogListbyApi({ $axios, query, $http, error }) {
                const res = await $axios.$post('/blog/api/list', query);
                return { meta: res.meta, documents: res.documents };
            }
        }
    }
</script>