<template>
  <v-app dark>
    <h1 v-if="error && error.statusCode === 404">
      {{ pageNotFound }} (Status Code: {{ error.statusCode }})
    </h1>
    <h1 v-else-if="error.statusCode === 400">
      요청 실패 !! 검색어를 입력해주세요!! (Status Code: {{ error.statusCode }})
    </h1>
    <h1 v-else-if="error.statusCode === 500">
      서버 내부 오류 발생!! 검색어를 입력해주세요!! (Status Code: {{ error.statusCode }})
    </h1>
    <h1 v-else>
      {{ otherError }} (Status Code: {{ error.statusCode }})
    </h1>
    <NuxtLink to="/"> 홈페이지 </NuxtLink>
  </v-app>
</template>


<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '페이지를 찾을 수 없습니다!!',
      otherError: '오류가 발생했습니다!!',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
