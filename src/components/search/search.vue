<template>
	<div class="search">
   <div class="search-box-wrapper">
    <search-box ref="searchBox" @query="onqueryChange"></search-box>
   </div>

   <div class="shortcut-wrapper" v-show="!query">
     <div class="shortcut">
       <div class="hot-key">
         <h1 class="title">热门搜索</h1>
         <ul>
           <li @click="addQuery(item.k)" class="item" v-for="item in hotKey">
             <span>{{item.k}}</span>
           </li>

         </ul>
       </div>
     </div>
   </div>

   <div class="search-result" v-show="query">
     <suggest :query="query" @listScroll="blurInput"></suggest>
   </div>

   <router-view></router-view>
  </div>
</template>

<script type="text/babel">
  import SearchBox from 'base/search-box/search-box'
  import Suggest from 'components/suggest/suggest'
  import {gethotkey} from 'api/search'
  import {ERR_OK} from 'api/config'
  export default {
    created() {
      this._gethotkey()
    },
    data() {
      return {
        hotKey: [],
        query: ''
      }
    },
    methods: {
      addQuery(query) {
        this.$refs.searchBox.setQuery(query)
      },
      onqueryChange(query) {
        this.query = query
      },
      blurInput() {
        this.$refs.searchBox.blur()
      },
      _gethotkey() {
        gethotkey().then((res) => {
          if (res.code === ERR_OK) {
            this.hotKey = res.data.hotkey.slice(0, 10)
            console.log(this.hotKey)
          }
        })
      }
    },
    components: {
      SearchBox,
      Suggest
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"

.search
  .search-box-wrapper
    margin: 20px
  .shortcut-wrapper
    position: fixed
    top: 178px
    bottom: 0
    width: 100%
    .shortcut
      height: 100%
      overflow: hidden
      .hot-key
        margin: 0 20px 20px 20px
        .title
          margin-bottom: 20px
          font-size: $font-size-medium
          color: $color-text-l
        .item
          display: inline-block
          padding: 5px 10px
          margin: 0 20px 10px 0
          border-radius: 6px
          background: $color-highlight-background
          font-size: $font-size-medium
          color: $color-text-d
      .search-history
        position: relative
        margin: 0 20px
        .title
          display: flex
          align-items: center
          height: 40px
          font-size: $font-size-medium
          color: $color-text-l
          .text
            flex: 1
          .clear
            extend-click()
            .icon-clear
              font-size: $font-size-medium
              color: $color-text-d
  .search-result
    position: fixed
    width: 100%
    top: 178px
    bottom: 0
</style>
