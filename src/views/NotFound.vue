<template>
  <v-row align="center" justify="center" class="ma-1">
    <v-col cols="12">
      <h1 class="display-1 font-weight-thin mb-4">Oops!</h1>
      <h4 class="subheading">
        Our apologies for the inconvenience, however, the {{ resource }} you're
        looking for is no longer here.
      </h4>
      <router-link :to="{ name: 'Home' }">Take me back home</router-link>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
}
</script>
