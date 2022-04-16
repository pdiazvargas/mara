<template>
  <div>
    <v-card class="mx-auto" max-width="400" flat>
      <v-card-text>
        <p>
          Estos son los porcentajes que la calculadora usa para darle el valor
          que ud debe cobrar o el valor que ud quiere recibir.
        </p>
      </v-card-text>

      <v-list three-line>
        <template v-for="item in items">
          <v-list-item :key="item.label">
            <!-- <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar> -->

            <v-list-item-content>
              <v-list-item-title
                >{{ item.value }}% - {{ item.label }}</v-list-item-title
              >
              <v-list-item-subtitle v-html="item.hint"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import formatter from '../mixins/formatter'

export default {
  data() {
    const meta = this.$store.state.settings.meta
    const variables = this.$store.state.settings.variables
    const items = Object.entries(meta).map((entry) => {
      return {
        ...entry[1],
        value: this.asPercentage(variables[entry[0]] * 100),
      }
    })
    return {
      items: items,
    }
  },
  mixins: [formatter],
  methods: {},
  computed: {
    ...mapState(['settings']),
  },
}
</script>
