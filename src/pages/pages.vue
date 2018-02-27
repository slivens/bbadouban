<template>
<div class="pages">
  <header-bar></header-bar>
  <router-view/>
</div>
</template>
<script>
import HeaderBar from '../components/HeaderBar'
export default {
  name: 'pages',
  components: {HeaderBar},
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  margin-top: 100px;
}
</style>
