<template>
  <div class="classifier">
    <!--div>
      <span class="font-weight-bold">Classe:</span>
      {{(msg.className) ? msg.className.split(',')[0] : ''}}
      <br>
      <span class="font-weight-bold">Confiança:</span>
      {{(msg.probability) ? (msg.probability*100).toFixed(2).replace('.', ',') + '%' : ''}}
    </div-->
  <DisplayClassificationComponent v-if="msg.className !== undefined" :classification="msg" />
  <div class="btn-container">
    <v-btn light @click="classify">Classificar Objeto</v-btn>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VisionService from '@/services/VisionService'
import DisplayClassificationComponent from '@/components/DisplayClassificationComponent'
const portugueseLabels = require('@/labels/imagenet_labels_pt_br.json')

export default Vue.extend({
  methods: {
    async classify () {
      const predictions = await this.visionService.classify()
      for (const prediction of predictions) {
        prediction.className = portugueseLabels[prediction.className]
      }
      this.msg = predictions[0]
    }
  },
  data () {
    return {
      msg: {},
      visionService: new VisionService()
    }
  },
  components: {
    DisplayClassificationComponent
  }
})
</script>

<style lang='sass' scoped>
.btn-container
  justify-content: center
  text-align: center

div
  margin: 2em
</style>
