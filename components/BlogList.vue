<!-- eslint-disable vue/no-v-html -->
<template>
    <v-list>
        <v-list-item v-for="(blog, i) in blogs" :key="i" :href="blog.url">

            <v-list-item-avatar rounded size="x-large" min-width="130px">
                <img :src="blog.thumbnail" alt="Item Thumbnail">
            </v-list-item-avatar>

            <v-container class="bg-surface-variant">
                <v-row class="font-weight-bold text-lg-h6">
                    <v-col cols="12">
                        <div v-html="blog.title"></div>
                    </v-col>
                </v-row>
                <v-row no-gutters class="text-md-h8 font-weight-thin">
                    <v-col cols="12">
                        <div v-html="blog.contents"></div>
                    </v-col>
                </v-row>
                <v-row class="font-weight-light">
                    <v-col cols="6">
                        <div v-html="blog.blogname"></div>
                    </v-col>
                    <!-- <v-col cols="6">
                        <v-list-subheader><span class="font-weight-light">{{ item.datetime }}</span></v-list-subheader>
                    </v-col> -->
                </v-row>

                <v-row>
                    <v-divider v-if="i !== blogs.length - 1"></v-divider>
                </v-row>

            </v-container>
                
        </v-list-item>
    </v-list>
</template>

<script>
import DOMPurify from 'dompurify';

export default {
    computed: {
        blogMeta() {
            return this.$store.state.blogMeta;
        },
        blogs() {
            return this.$store.state.blogs.map(
                obj => Object.fromEntries(
                    Object.entries(obj).map(
                        ([key, value]) => [key, DOMPurify.sanitize(value)])
                )
            );
        },
    },
}
</script>