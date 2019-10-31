<template>
  <v-card class="classification-card">
    <v-card-title>
      <p class="classification-title">{{(classification.className) ? classification.className.split(',')[0] : ''}}</p>
    </v-card-title>
    <v-card-text>
      <span class="font-weight-bold">Classe:</span>
      {{(classification.className) ? classification.className.split(',')[0] : ''}}
      <br>
      <span class="font-weight-bold">Confiança:</span>
      {{(classification.probability) ? (classification.probability*100).toFixed(2).replace('.', ',') + '%' : ''}}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    classification: Object
  }
})
</script>

<style lang="sass" scoped>
.classification-card
  text-align: left

.classification-title:first-letter
  text-transform: capitalize
</style>
