// page/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path:''
  },
  handleChooseAlbum(){
    console.log('---');
    wx.chooseImage({
      success: (res)=> {
        console.log(res);
        this.setData({
          path: res.tempFilePaths[0]
        })
      },
    })
  },
  handleLoad(res){
    console.log('图片加载完成');
  }
})