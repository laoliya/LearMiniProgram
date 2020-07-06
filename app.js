App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  globalData:{
    token:'',
  },
  onLaunch: function () {
    // 1.先从缓存中去除token.
    const token = wx.getStorageSync('token')
    // 2.判断token是否有值
    if(token.length.length !== 0){
      this.check_token(token);  //验证token
    }else{
      this.login();
    }
    
  },
  check_token(token){
    console.log('执行了验证');
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header: {
        token
      },
      success:(res)=>{
        console.log(res);
        if(!res.data.errCode){
          this.globalData.token = token;
        }else{
          this.login();
        };
      },
      fail: (res)=>{
        console.log(res);
      }
    })
  },
  login(){
    console.log('执行了登录');
    wx.login({
      success: (res)=> {
        if (res.code) {
          //发起网络请求
          console.log(res);
          wx.request({
            url: 'http://123.207.32.32:3000/login',
            method:'post',
            data: {
              code: res.code
            },
            success:(res)=>{
              // 取出token
              this.globalData.token = res.data.token;
              console.log(this.globalData.token);
              // 进行本地存储
              wx.setStorageSync('token', this.globalData.token)
            },
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
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
    
  }
})
