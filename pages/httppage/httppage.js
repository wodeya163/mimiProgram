// pages/httppage/httppage.js
import network from '../../nettools/network.js'
 
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  /*   //1、get请求演示
    wx.request({
      url: '',
      success:function(res){
        console.log(res)
      }
    })*/
    //2、post请求
   /*  wx.request({
      url: 'http://httpbin.org/post',
      method:"POST",
      data:{
        name:"张淑和",
        age:45
      },
      success:function(res){
        console.log(res)
      }
      
    }) */
    //3、请求公司网站产品信息
    /* wx.request({
      url: 'http://www.salien-jd.com/',
      data:{
        href:"chanxiang.asp?pkid=95&classId=19"
        

      },
      success:function(res){
        console.log(res.data)
      }
    }) */
    //4、使用封装后的工具函数
    network({
      url:'http://httpbin.org/'
    }).then(res=>{
      console.log(res)
    })
    
  }, 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})