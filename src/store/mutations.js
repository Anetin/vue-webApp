import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, singer) { // 第一个参数是整个state状态， 第二个是传递的参数
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAY_LIST](state, list) {
    state.playList = list
  },
  [types.SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  },
  [types.SET_TOP_LIST](state, list) {
    state.topList = list
  },
  [types.SET_DISC](state, disc) {
    state.disc = disc
  }

}
export default mutations
