// page/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noTime: new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    score:50,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(()=>{
      this.setData({
        noTime: new Date().toLocaleString(),
      })
    },1000)
  },
  handleSwitchColor(){
    console.log(123);
     this.setData({
       isActive:!this.data.isActive
     })
  },
  handlebutton(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handlegaifen(){
    this.setData({
      score:this.data.score + 6
    })
  }
})