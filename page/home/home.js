// page/home/home.js
const app = getApp();
console.log(app.globalData.name);
Page({
  //初始化数据
  data:{
    message:'哈哈哈',
    list:''
  },
  //监听点击事件
  handleGetUserInfo(event){
    console.log(event)
  },
  onLoad(){
    console.log('onLoad');
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success:(res)=>{
        this.setData({
          list: res.data
        })
      },
    })
  },
  onShow(){
    console.log('onShow');
  },
  onReady(){
    console.log('onReady');
  },
  onHide(){
    console.log('onHide');
  },
  onUnload(){
    console.log('onUnload');
  },
  //监听wxml点击事件
  handleViewClick(){
    console.log('hahah被点击了');
  },
  //----监听其他事件----
  //监听页面滚动
  onPageScroll(obj){
    // console.log(obj);
  },
  onReachBottom(){
    console.log('滑动到底部了');
  },
  onPullDownRefresh(){
    console.log('下拉刷新');  //下拉刷新
  }
})