// pages/action/action.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    container:0,
    croos:['上衣','鞋子','裤子'],
    itemShow:""

  },
  touchChange(){
    this.setData({
      container:this.data.container+5
    })

  },
  //开始触摸事件
  handerTouchStart(res){
    console.log("handerTouchStart")

  },
  //触摸移动事件
  handerTouchMove(){
    console.log("handerTouchMove")

  },
  //触摸结束事件
  handerTouchEnd(){
    console.log("handerTouchEnd")

  },
  //常规触摸事件
  handerTap(){
    console.log("handTap")

  },
  //长按事件
  handerLongPress(){
    console.log("handerLongPress")
    
  },
  //点击产生的事件对象
  handerEvent(event){
    console.log('事件对象',event)
  },
  //外层view触摸事件
  handTapW(event){
    console.log('外层触摸事件',event)

  },
  //内层view触摸事件
  handTapN(event){
    console.log('内层触摸事件',event)

  },
  //获取点击内容
  handClick(event){
    const dataItem=event.currentTarget.dataset
    this.setData({
     itemShow:dataItem.item 
    })
    //console.log(event)

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