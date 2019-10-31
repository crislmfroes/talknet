<template>
<v-layout row wrap>
  <v-flex xs10 offset-xs1>
    <HomeComponent msg="Hello World!"/>
  </v-flex>
</v-layout>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue'

export default {
  name: 'home',
  components: {
    HomeComponent
  }
}
</script>
