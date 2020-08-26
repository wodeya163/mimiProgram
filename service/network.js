//定义Promise函数getHomeData用来请求网络数据
export   function getHomeData(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: options.url,
      method:options.method||"GET",
      data:options.data||{},
      success:(res)=>{
        return resolve(res)
      },
      fail:(err)=>{
        return reject(err)
      }

    })

  })
}