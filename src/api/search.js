// https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg
import jsonp from 'common/js/jsonp'
import {commomParams, options} from './config'
// import axios from 'axios'

export function gethotkey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commomParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function search(query, page, zhida, perpage) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

  const data = Object.assign({}, commomParams, {
    w: query,
    p: page,
    zhidaqu: 1,
    catZhida: zhida ? 1 : 0,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage,
    n: perpage,
    remoteplace: 'txt.mqq.all',
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  })

  return jsonp(url, data, options)
}
// ,

// g_tk: '1805928033',
// format: 'json',
// inCharset: 'utf-8',
// outCharset: 'utf-8',
// notice: '0',
