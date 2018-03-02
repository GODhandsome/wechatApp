// pages/zeng/zeng.js
var common = require('../../assets/common.js');
Page({
  timer: null,
  /**
   * 页面的初始数据
   */
  data: {
    info: {
      img: '../../assets/img/yasuo.jpg',
      name: '神帅',
      speciality: '无所不能',
      desc: '2016年5月7日，英伟达 NVIDIA 正式发布了新一代旗舰显卡GeForce GTX 1080。采用帕斯卡（Pascal）、16nm FinFET制程的 GTX 1080 要比 GTX 980Sli 甚至是 Titan X 还要快。2016年5月7日，英伟达 NVIDIA 正式发布了新一代旗舰显卡GeForce GTX 1080。采用帕斯卡（Pascal）、16nm FinFET制程的 GTX 1080 要比 GTX 980Sli 甚至是 Titan X 还要快。'
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    common.starA(this.timer);
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
    clearInterval(this.timer);
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
    return {
      title: '616四个小伙伴',
      desc: '纪念我们的大学生活',
      path: '/pages/index/index'
    }
  }
})