import {commonParams} from './config'
import axios from 'axios'
import jsonp from 'common/js/jsonp'

export function getLyric(mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    pcachetime: +new Date(),
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    g_tk: 1805928033,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}

export function getSongVkey(songmid) {
  const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'

  const data = Object.assign({}, commonParams, {
    callback: 'musicJsonCallback',
    loginUin: 3051522991,
    format: 'json',
    platform: 'yqq',
    needNewCode: 0,
    cid: 205361747,
    uin: 3051522991,
    guid: 5931742855,
    songmid: songmid,
    hostUin: 0,
    filename: `C400${songmid}.m4a`
  })

  return jsonp(url, data)
}
