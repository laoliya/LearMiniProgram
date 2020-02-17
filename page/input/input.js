// page/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleinput(event){
    console.log('用户输入内容', event.detail.value);
  },
  handlefocus(event){
    console.log('input获取焦点',event);
  },
  handleblur(event){
    console.log('input失去焦点',event)
  },
})