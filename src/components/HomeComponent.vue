<template>
  <div class="home">
    <div>
      <v-icon aria-label="Ícone de um robô" size="128">mdi-robot</v-icon>
    </div>
    <div>
      <span class="title">TalkNet App</span>
    </div>
    <div>
      <p>Seja bem-vinde! Sou um aplicativo que pretende te ajudar classificando para você objetos comuns no seu dia a dia.</p>
    </div>
    <div>
      <v-btn light to="/classify">Classificar Objetos</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HomeComponent extends Vue {
  @Prop() private msg!: string;
  @Prop() private colSpan!: string;
}
</script>

<style lang="sass" scoped>
.home
  text-align: center
  justify-content: center

div
  margin: 2em
</style>
