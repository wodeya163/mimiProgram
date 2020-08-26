// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    age:"",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var name=options.name
    var age= options.age
    this.setData({
      name:name,
      age:age
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
    //1、获取页面对象
    var pages= getCurrentPages()
    //console.log(pages)
    var day= pages[0].data.day
    const home=pages[pages.length-2]
    console.log(day)
    //2、调用页面对象的setData方法
    home.setData({
      day:100
    })


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