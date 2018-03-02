<template>
  <div class="home has-header">
  <div class="home__nav">
    <span><router-link :to="{path:'/MovieView'}">影院热映</router-link></span>
    <span><router-link :to="{path:'/StatusView'}">欧美新碟榜</router-link></span>
    <span><router-link :to="{path:'/register'}">注册帐号</router-link></span>
    <span><router-link :to="{path:'/login'}">登入BBA</router-link></span>
    <list mold="thumbnail" :items="events"></list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
    </infinite-loading>
  </div>
  </div>
</template>
<script>
import List from '../components/List'
import InfiniteLoading from 'vue-infinite-loading'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    List, InfiniteLoading
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      events: state => state.activities.events
    })
  },
  mounted () {
    console.log(this.$store)
    console.log('events', this.$store.state)
  },
  methods: {
    onInfinite () {
      setTimeout(() => {
        this.loadMore()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    ...mapActions([
      'loadMore'
    ])
  }
}
</script>
<style lang="scss" scoped>
.home__nav {
  width: 90%;
  height: 127px;
  margin: 0 auto;
  span {
    display:inline-block;
    width:48%;
    height:50px;
    text-align: center;
    background:#e8e6e670;
    margin-top: 10px;
    line-height: 50px;
    font-size: 16px;
    margin-left: 1%;
  }
  a {
    color:#606060;
  }
}
</style>
