<template>
  <v-row align="center" justify="center" class="ma-1">
    <v-col cols="12">
      <h1 class="display-1 font-weight-thin mb-4">
        Possible list of saved calculations
      </h1>
      <h4 class="subheading"></h4>
      <router-link :to="{ name: 'Calculate' }">Take me back home</router-link>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {},
}
</script>
