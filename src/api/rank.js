import jsonp from 'common/js/jsonp'
import {commomParams, options} from './config'

export function getTopList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'

  const data = Object.assign({}, commomParams, {
    // g_tk: '1805928033',
    // uin: '1012886343',
    // format: 'json',
    // inCharset: 'utf-8',
    // outCharset: 'utf-8',
    // notice: 0,
    platform: 'h5',
    needNewCode: 1

  })

  return jsonp(url, data, options)
}

export function getMusicList(topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  const data = Object.assign({}, commomParams, {
    page: 'detail',
    type: 'top',
    tpl: 3,
    platform: 'h5',
    needNewCode: 1,
    topid

  })

  return jsonp(url, data, options)
}
