// component/my-tabcontrol/my-tabcontrol.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[],

    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击事件获取每个item的index值
    clickChangeIndex(event){
      //console.log(event)
      const index=event.currentTarget.dataset.index
      this.setData({
        currentIndex:index
      })
      //将此事件传递给页面
      this.triggerEvent("clickIndex",
      {index:index,titles:this.properties.titles},{})

    }

  }
})
