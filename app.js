App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.getUserInfo({
      success:function(res){
        console.log(res.userInfo)  //用户信息可以发给服务器
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log(options);
    //回调判断小程序进入场景
    switch(options.scene){
      case 1001:console.log('顶部进来');
      break;
      case 1005: console.log('微信首页顶部搜索框的搜索结果页');
      break;
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData:{
    name: 'codewhu',
    age:18
  }
})
