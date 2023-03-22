<template>
  <v-app dark>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer;onHypeButtonClick" />

      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>

      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>

      <v-spacer />

      <SearchSort />
      <SearchField />
      <SearchSize />

      <v-spacer />
      

      <v-btn icon @click.stop="rightDrawer = !rightDrawer" class="mr-2">
        HYPE
        <v-icon>mdi-star</v-icon>
      </v-btn>
    </v-app-bar>


    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>


    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer</v-list-item-title>
        </v-list-item>
      </v-list>
      <HypeQuery/>
    </v-navigation-drawer>


    <v-footer :absolute="fixed" app>
      <span>&copy; 2023 Taehyun</span>
    </v-footer>


  </v-app>
</template>

<script>
import { FETCH_HYPE_QUERY } from '@/store'

export default {
  name: 'DefaultLayout',
  data: () => ({
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-view-headline',
          title: 'List',
          to: '/list',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
  }),
  created() {
    return this.$store.dispatch(FETCH_HYPE_QUERY);
  },
  methods: {
    onHypeButtonClick() {
      return this.$store.dispatch(FETCH_HYPE_QUERY);
    },
  },
}
</script>
