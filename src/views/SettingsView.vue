<template>
  <div>
    <v-card class="mx-auto" max-width="400" flat>
      <v-card-text>
        <p>
          Estos son los porcentajes que la calculadora usa para darle el valor
          que ud debe cobrar o el valor que ud quiere recibir.
        </p>
        <v-text-field
          v-model="event.eps"
          v-model.number="event.eps"
          :label="settings.meta.eps.label"
          :hint="settings.meta.eps.hint"
          step="0.1"
          min="0.1"
          max="1"
          type="number"
          persistent-hint
          disabled
        >
        </v-text-field>
        <v-text-field
          v-model="event.pension"
          v-model.number="event.pension"
          :label="settings.meta.pension.label"
          :hint="settings.meta.pension.hint"
          step="0.1"
          min="0.1"
          max="1.0"
          type="number"
          persistent-hint
          disabled
        ></v-text-field>
        <v-text-field
          v-model="event.retefuente"
          v-model.number="event.retefuente"
          :label="settings.meta.retefuente.label"
          :hint="settings.meta.retefuente.hint"
          step="0.1"
          min="0.1"
          max="1.0"
          type="number"
          persistent-hint
          disabled
        ></v-text-field>
        <v-text-field
          v-model="event.reteica"
          v-model.number="event.reteica"
          :label="settings.meta.reteica.label"
          :hint="settings.meta.reteica.hint"
          step="0.1"
          min="0.1"
          max="1.0"
          type="number"
          persistent-hint
          disabled
        ></v-text-field>
      </v-card-text>
      <!-- <v-card-actions>
        <v-btn color="deep-purple accent-4" v-on:click="updateSettings" text>
          update
        </v-btn>
        <v-btn v-on:click="setDefaults" text> defaults </v-btn>
      </v-card-actions> -->
    </v-card>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import formatter from '../mixins/formatter'

export default {
  data() {
    const variables = this.$store.state.settings.variables
    return {
      event: this.createFreshEvent(variables),
    }
  },
  mixins: [formatter],
  methods: {
    createFreshEvent(variables) {
      return {
        eps: variables.eps,
        pension: variables.pension,
        retefuente: variables.retefuente,
        reteica: variables.reteica,
      }
    },
    updateSettings() {
      this.$store.dispatch('settings/update', this.event)
    },
    setDefaults() {
      const variables = this.$store.state.settings.default
      this.event = this.createFreshEvent(variables)
      this.$store.dispatch('settings/update', this.event)
    },
  },
  computed: {
    ...mapState(['settings']),
  },
}
</script>
