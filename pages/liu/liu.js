// pages/zeng/zeng.js
var common = require('../../assets/common.js');
Page({
  timer: null,
  /**
   * 页面的初始数据
   */
  data: {
    info: {
      img: '../../assets/img/naer.jpg',
      name: '爆坑',
      speciality: '深渊爆坑',
      habits: '喝洗洁精',
      desc: '定位于千元级中端市场的新一代Pascal架构产品，相对于上一代产品GTX 950虽然流处理器数量由之前的768个缩减至640个，但得益于新架构的优势与更高的显存带宽其总体性能仍超过GTX 950，功耗反而更低，并将竞争对手Radeon RX 460甩在了身后。为了区分产品线，GTX 1050将只会配有2GB显存，基于GP107-400核心的GTX 1050Ti则会配有4GB显存，并且释放掉了被屏蔽的一组SM单元组成完整的6组SM单元，流处理器数量提升至768个，但核心频率有所降低。基于Samsung的14nm FinFET工艺打造（之前的Pascal显卡均采用TSMC的16nm FinFET工艺），在保证低功耗低发热的前提下依然有着出色的性能。TDP仅有75W，对系统电源需求也仅有300W，如果采用公版PCB设计则无需外接供电，部分厂商设计的提升核心频率的非公版则会加强用料并会提供额外的6pin供电接口以保证稳定性。GP107GP107出于其省电力的特性，所以对散热及供电用料方面的需求并不高，公版方案采用的是短卡设计。'
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