<template>
  <div class="mt-2">
    <v-card class="mx-auto" color="rgb(115 38 218)" dark max-width="400">
      <v-card-title>
        <v-icon large left> mdi-twitter </v-icon>
        <span class="text-h6 font-weight-light">Twitter</span>
      </v-card-title>

      <v-card-text class="text-h5 font-weight-bold">
        De una factura que usted emita por
        {{ asCurrency(value.amount.amount, 0) }}, usted recibira un total de
        {{ asCurrency(value.received.amount, 0) }}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>El Javis</v-list-item-title>
          </v-list-item-content>

          <!-- <v-row
              align="center"
              justify="end"
            >
              <v-icon class="mr-1">
                mdi-heart
              </v-icon>
              <span class="subheading mr-2">256</span>
              <span class="mr-1">·</span>
              <v-icon class="mr-1">
                mdi-share-variant
              </v-icon>
              <span class="subheading">45</span>
            </v-row> -->
          <v-btn :to="{ name: 'Calculate' }" text> Cerrar </v-btn>
        </v-list-item>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto mt-2" max-width="400">
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="(category, index) in value.items" :key="index">
              <td>{{ category.label }}</td>
              <td>{{ asCurrency(category.amount, 2) }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
import formatter from '../mixins/formatter'

export default {
  props: {
    value: {
      type: Object,
      required: false,
    },
  },
  mixins: [formatter],
}
</script>

<style></style>
