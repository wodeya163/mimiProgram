// component/my-counter/my-counter.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    counter:0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //该方法用于在页面中调用，从而改变counter的值
    changeCounter(num){
      this.setData({
        counter:this.data.counter+num
      })
    }

  }
})
