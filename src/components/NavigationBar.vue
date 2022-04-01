<template>
  <v-bottom-navigation v-model="value" fixed grow class="pa-2" color="primary">
    <v-btn :to="{ name: 'Settings' }" :exact="true">
      <v-icon>mdi-cog-outline</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'Calculate' }" :exact="true">
      <v-icon>mdi-alarm-panel-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      value: 1,
    }
  },
}
</script>

<style scoped>
.v-btn {
  background-color: transparent !important;
}
</style>
