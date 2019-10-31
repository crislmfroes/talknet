<template>
<v-layout row wrap>
  <v-flex xs12>
    <ClassifyComponent />
  </v-flex>
</v-layout>
</template>

<script>
// @ is an alias to /src
import ClassifyComponent from '@/components/ClassifyComponent.vue'

export default {
  name: 'classify',
  components: {
    ClassifyComponent
  }
}
</script>
