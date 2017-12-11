<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <player></player>
  </div>
</template>

<script type="text/babel">
import MHeader from 'components/m-header/m-header'
import player from 'components/player/player'
import Tab from 'components/tab/tab'

export default {
  components: {
    MHeader,
    Tab,
    player
  }
}
</script>

<style scoped lang="stylus" rel = "stylesheet/stylus">
@import "~common/stylus/variable"


</style>
