<template>
<div class="pages">
  <header-bar @showTalion="open"></header-bar>
  <router-view/>
  <talion-view v-show="talion" @closeTalion="close"></talion-view>
</div>
</template>
<script>
import HeaderBar from '../components/HeaderBar'
import TalionView from '../pages/TalionView'
/* eslint-disable */ 
export default {
  name: 'pages',
  components: {HeaderBar, TalionView},
  data () {
    return {
      talion: ''
    }
  },methods: {
    open: function () {
      this.talion = 'open'
    },
    close: function () {
      this.talion = ''
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  margin-top: 100px;
}
</style>
