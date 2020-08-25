// pages/tab/tab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['流行','新款','精选'],
    name:""

  },
  //获得点击信息
  getTabInfo(event){
    //console.log(event)
    var index = event.detail.index
    this.setData({
      name:event.detail.titles[index]
    })

  },
  //从页面来改变组件内的变量的值（此方法不合理，不推荐使用）
  changeConValue(){
    const counterName=this.selectComponent('#counter-id')
    //var counterValue=counterName.data.counter
    /* console.log(counterName)
    console.log(counterValue)
    counterName.setData({
      counter:counterValue+20
    }) */
    //调用组件内部的方法
    counterName.changeCounter(5)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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