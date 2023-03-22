<!-- eslint-disable vue/no-v-html -->
<template>
    <v-list>
        <v-list-item v-for="(hype, i) in hypeQuery" :key="i">

            <v-container class="bg-surface-variant">
                <v-row class="font-weight-bold text-lg-h6">
                    <v-col>
                        <div v-html="hype.query"></div>
                    </v-col>
                </v-row>
                <v-row no-gutters class="text-md-h8 font-weight-thin">
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
import { map, mapValues } from 'lodash';

export default {
    computed: {
        hypeQuery () {
            return map(this.$store.state.hypeQuery, (obj) => {
                return mapValues(obj, DOMPurify.sanitize)
            });
        },
    },
}
</script>