import jsonp from 'common/js/jsonp'
import {commomParams, options} from './config'

const originUrl = 'https://c.y.qq.com/musichall/fcgi-bin/'
export function getRecommend() {
  const url = originUrl + 'fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commomParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}
