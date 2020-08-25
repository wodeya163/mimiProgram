// component/my-event/my-event.js
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
    people:{name:"张三",age:"64"}

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickAdd(){
      this.triggerEvent("getClick",this.data.people,{})
      //console.log('我有反应哦！')
    }

  }
})
