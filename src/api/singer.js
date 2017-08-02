import jsonp from 'common/js/jsonp'
import {commomParams, options} from './config'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commomParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: '100',
    pagenum: '1',
    g_tk: '424644473',
    // jsonpCallback: 'GetSingerListCallback',
    loginUin: '867999352',
    hostUin: '0',
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: '0',
    platform: 'yqq',
    needNewCode: '0'
  })

  return jsonp(url, data, options)
}
