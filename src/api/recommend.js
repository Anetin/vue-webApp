import jsonp from 'common/js/jsonp'
import {commomParams, options} from './config'
import axios from 'axios'

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

export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commomParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    console.log(res)
    return Promise.resolve(res.data)
  })
}
