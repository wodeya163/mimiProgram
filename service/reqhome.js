//函数getHomeData的进一步封装
import {getHomeData} from "./network.js"
import {baseUrl} from "./config.js"

export  function getMultiData(){
  return  getHomeData({
    url: baseUrl+"/home/multidata"
  })
}