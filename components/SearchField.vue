<template>
    <v-col align-self="start">
        <v-autocomplete
            ref="inputField"
            v-model="param.searchQuery"
            clearable
            min-width="300"
            label="Search"
            placeholder="Discover new blog!"
            justify="bottom"
            prepend-icon="mdi-magnify"
            :items="param.items"
            @keyup.enter="sendDataToPage">
        </v-autocomplete>
      </v-col>
</template>
<script>
export default {
    data: () => ({
        param: {
            searchQuery : "다나카 콘서트",
            items: [
                '다나카',
                '김건욱',
                '김태현',
                '안리',
            ]
        }
    }),
    methods : {
        sendDataToPage(e) {
            const param = {
                query: e.target.value,
                sort: "accuracy",
                size: 10,
                page: 10,
            };
            
            // const currentPath = this.$route.path === '/' || this.$route.path === '/empty' ? '/list' : this.$route.path;
            
            // // 브라우저 히스토리 스택에 추가하지 않음.
            // this.$router.replace({ path: '/empty' }, () => {
            //     // 결과 페이지로 이동하도록 설정. 
            //     this.$router.push({ path: currentPath, query: param});
            // });
            this.$router.push({ path: '/list', query: param});

        },
    }
}
</script>
