<template>
  <v-app class="full-page">
    <v-app-bar absolute color="white" flat app>
      <v-btn
        v-if="!this.$route.meta.isMain"
        :to="{ name: 'Calculate' }"
        :exact="true"
        icon
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        v-if="this.$route.meta.isMain"
        :to="{ name: 'Settings' }"
        :exact="true"
        icon
      >
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
    <!-- <navigation-bar /> -->
  </v-app>
</template>

<script>
// import NavigationBar from '@/components/NavigationBar'

export default {
  name: 'App',

  components: {
    // NavigationBar,
  },

  data: () => ({
    //
  }),
}
</script>
