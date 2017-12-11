import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.playing = flag
  },
  [types.SET_PLAYLIST](state, list) {
    state.playing = list
  },
  [types.SET_SEQUENCE_LIST](state, list) {
    state.playing = list
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.playing = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.playing = index
  }
}
export default mutations
