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

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commomParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1,
    singermid: singerId,
    g_tk: '424644473'
  })

  return jsonp(url, data, options)
}
