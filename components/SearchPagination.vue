<template>
    <div class="text-center">
        <v-container>
            <v-row justify="center">
                <v-col cols="8">
                <v-container class="max-width">
                    <v-pagination
                    v-model="page"
                    class="my-4"
                    :length="pageable_count"
                    :total-visible="12"
                    ></v-pagination>
                </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    props: {
        pageable_count: {
            type: Number,
            default: 1
        }
    },
    data: () => ({
        page: 1
    }),
}
</script>
