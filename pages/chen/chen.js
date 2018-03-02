// pages/zeng/zeng.js
var common = require('../../assets/common.js');
Page({
  timer: null,
  /**
   * 页面的初始数据
   */
  data: {
    info: {
      img: '../../assets/img/akali.jpg',
      name: '橘子',
      speciality: '炖榴莲',
      desc: '相比高高在上的GTX 1080/1070来说，GTX 1060的定位要低不少，但依然会继承Pascal架构的全部技术特性，只是核心规模缩小了一些而已。具体来说，GTX 1060采用的是全新的GP106核心，拥有1280个CUDA单元，106个纹理单元，48个光栅单元，192bit显存位宽，6GB GDDR5显存，核心频率1506MHz，Boost频率1709MHz，等效显存频率8GHz。虽然GTX 1070在发布会上的存在时间不超过5分钟，但是我们还是知道了这块显卡的消息，6.5TFlops的单精度性能，8GB GDDR5显存，官方宣称性能比GTX Titan X更强'
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