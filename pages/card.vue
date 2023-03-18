<template>

<v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-item>
      <v-card-title>Cafe Badilico</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Local Favorite</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
  

</template>
  
<script>
    export default {
        data: () => ({
            "documents": [
                {
                    "blogname": "날마다집을짓는사람들",
                    "contents": "집짓기의 시작 기초공사 제대로 하기 예전에 집짓기와 요즘의 집짓기는 비슷한거 같지만 세부적으로 보면 완전히 하늘과 땅 차이라고나 할까요? 제가 건축일을 처음 시작할 1990년대만 하더라도 주변에서 기초바닥에 단열재를 까는것을 본적이 없답니다. 단열의 중요성을 모르는 시절은 아니였지만 최적의 기준보다 최소...",
                    "datetime": "2023-01-27T12:08:45.000+09:00",
                    "thumbnail": "https://search2.kakaocdn.net/argon/130x130_85_c/H4bzYhipCmw",
                    "title": "집짓기의 시작 기초공사 제대로 하기",
                    "url": "http://e-depot.kr/1864"
                },
                {
                    "blogname": "tuygd",
                    "contents": "더 중요한것은 사후관리가 아닌가싶다.그래서 이부분을 좀더 집중적으로 읽어봄 !!! 3년 만에 다시 만나는 개정증보3판2014년 개정증보2판 이후 3년 만에 집짓기 바이블 개정증보3판이 출간되었다. 대폭 수정된 내진 설계 및 단열법, 미세먼지, 폭염 등 환경에 대처하는 설계와 관련 최신 설비 등의 내용을 보강했다...",
                    "datetime": "2023-03-07T18:15:11.000+09:00",
                    "thumbnail": "https://search2.kakaocdn.net/argon/130x130_85_c/92fWOYC9FiN",
                    "title": "집짓기 바이블 (개정증보 3판)",
                    "url": "http://tuygd.tistory.com/78"
                },
                {
                    "blogname": "월간 건축사지",
                    "contents": "주택을 구매할 겸 많은 현지 ‘오픈 하우스(Open House)’를 방문하며 발품을 팔았다. 그러다가 한 번은 교외의 주택단지가 마음에 든다며 토지를 매입해 집을 짓기로 하였다. 그 과정에서 이제껏 몸담았던 설계와 감리 측면에서 지원을 하려고 생각하여 미국에 주택 한 채를 짓는 일련의 건축 과정을 정리해 보기로...",
                    "datetime": "2023-02-09T09:08:45.000+09:00",
                    "thumbnail": "https://search3.kakaocdn.net/argon/130x130_85_c/I2cEkIovJNG",
                    "title": "미국 집 짓기 2021.9",
                    "url": "http://kiramonthly.com/1175"
                },
                {
                    "blogname": "써니퍼니의 부동산 이야기",
                    "contents": "분들도 있고, 아무리 봐도 집을 지을 수 있는 조건이 없는 것 같은데 집을 짓고 사시는 것을 보며 이상하다고 생각한 적이 있습니다. 이번시간에는 임야에 집을 짓기 위해서라면 꼭 확인해야 하는 것들에 대하여 알아보겠습니다. 임야에 집을 지으려고 하는 이유는 무엇일까요? 농지보다는 저렴한 비용으로 더 넓은 면적...",
                    "datetime": "2023-03-08T09:22:35.000+09:00",
                    "thumbnail": "https://search1.kakaocdn.net/argon/130x130_85_c/DRVvAqEs9XA",
                    "title": "임야에 집짓기 전에 꼭 확인해야 하는 것들은?",
                    "url": "http://justdim.tistory.com/1582"
                },
                {
                    "blogname": "라빌라빌라 lavillavilla",
                    "contents": "안녕하세요! 라라씨입니다.^^ &#39;저희 아이 조언으로 &#39;라라씨&#39;로 개명(!)했어요.&#39; ​ 오늘은 목조주택 집짓기 과정을 이야기해볼께요! 라빌라빌라는 2014년에 지어서 지금까지 잘 살고 있는 저희집을 리모델링해서 만들어갈 스테이예요. 집짓기부터 지금까지 문제도 하자도 없었던 정말 &#34;잘 지은 집&#34; 이랍니다. ^^ 건축가와...",
                    "datetime": "2023-03-12T19:18:00.000+09:00",
                    "thumbnail": "https://search4.kakaocdn.net/argon/130x130_85_c/H3GkiO9zthD",
                    "title": "[목조주택] 집짓기 기록 2014",
                    "url": "https://blog.naver.com/lavillavilla/223042299871"
                },
                {
                    "blogname": "공간 그리고 공감",
                    "contents": "다르고 구성하고 링크 연동시켜 유러풍 주택의 다채로운 정보를 공유하여 볼 수 있도록 하겠다. ​ 유퍼피안 하우스 구성으로 유럽풍 주택, 유럽 스타일 집 짓기 구성 뷰 담아 본다. ​ ​ ① 모던스타일 유럽형 주택 『 모던 유럽풍 주택 』 ▼ 예쁜집 소형주택 짓기 유럽풍 예쁜 전원주택 파사드 전원주택 인테리어 뷰 작고...",
                    "datetime": "2023-03-12T10:15:00.000+09:00",
                    "thumbnail": "https://search3.kakaocdn.net/argon/130x130_85_c/CjnkTDQjeNF",
                    "title": "유러피안 하우스 유럽풍 주택 유럽 스타일 집 짓기",
                    "url": "https://blog.naver.com/designmaeg/223041987424"
                },
                {
                    "blogname": "문화 항해선",
                    "contents": "있는 것이니 그런 점은 참고하시길 바랍니다. 몇 해 전 제가 설계하고 지어졌던 주택의 자료들을 참고자료로 씁니다. 함께하는 집짓기, 건축설계에서 완공까지 1. 왜, 집을 지으려는 이유 집을 지으려는 이유, 사실 이 부분이 가장 중요합니다. 아파트나 공동주택이 여러 가지 편의성도 있지만 같은 모양 같은 구조...",
                    "datetime": "2022-12-09T21:16:07.000+09:00",
                    "thumbnail": "https://search4.kakaocdn.net/argon/130x130_85_c/8aOSBIJAWVH",
                    "title": "함께하는 집짓기, 건축설계에서 완공까지 1",
                    "url": "http://art-sailor.tistory.com/16"
                },
                {
                    "blogname": "티엠디공인중개사사무소",
                    "contents": "자기가 꿈꾸고 원하는 스타일에 맞게 새로 집을 짓는 사람들도 증가하고 있습니다. 오늘은 지난번 소개한 &#34;건축주가 알아야 할 사항&#34; 다음으로 행복한 집 짓기에 대해서 말해 보고자 합니다. 사람들은 가족 구성원 간 자기만의 공간을 위하여 단독주택을 짓거나, 수익형 임대목적으로 다가구주택, 상가주택 등을 짓기도...",
                    "datetime": "2023-03-07T22:48:00.000+09:00",
                    "thumbnail": "https://search1.kakaocdn.net/argon/130x130_85_c/3hY3ulMwX7o",
                    "title": "행복한 집짓기 란?",
                    "url": "https://blog.naver.com/tmdarchi65/223037946354"
                },
                {
                    "blogname": "예일인테리어스쿨",
                    "contents": "​ ​ 오늘은 리모델링디자인중에서 내 집짓기 준비하시는 분들에게 도움될 해외 현대건축 사례를 공유드려볼까해요 ​ ​ ​ 컨템포러리 내집짓기 실내건축학원 실내건축디자인 ​ ​ ​ 독일 건축가 알렉산더 브래너의 주택건축 중 현대적인 빌라 파인웨이 하우스를 함께 보실께요~ 파인웨이 하우스는 독일의 남서부에 위치한...",
                    "datetime": "2023-03-07T08:30:00.000+09:00",
                    "thumbnail": "https://search1.kakaocdn.net/argon/130x130_85_c/AsfL9CizTTV",
                    "title": "건축 컨템포러리 파인웨이 하우스_ 내 집짓기 실내건축디자인학원",
                    "url": "https://blog.naver.com/yeileid/223036402654"
                },
                {
                    "blogname": "위드제이하우스의 건축이야기",
                    "contents": "유익한 건축이야기를 전해드리는 위드제이하우스입니다 :) ​ 푸른 바다 빛이 가득한 제주도에서 집 짓는 생활을 꿈꾸실 거라고 생각합니다. 혹은 제주도 집짓기를 준비하는 분들도 계실 것 같네요. ​ 오늘 시간에는 제주 섬 라이프를 꿈꾸시는 분들을 위해서 제주도 집짓기 전 꼼꼼히 확인할 사항에 대해서 알아보겠습니다...",
                    "datetime": "2023-02-22T08:42:00.000+09:00",
                    "thumbnail": "https://search2.kakaocdn.net/argon/130x130_85_c/FKpy9pw0yM9",
                    "title": "제주도 집짓기 전, 꼼꼼히 확인할 사항",
                    "url": "https://blog.naver.com/kimbj1096/223023778949"
                }
            ],
            "meta": {
                "is_end": false,
                "pageable_count": 793,
                "total_count": 641198
            }
        }),
    }
</script>