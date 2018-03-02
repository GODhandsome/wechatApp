Component({
  properties: {
    info: { // 属性名
      type: Object, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
    },
  },
  data: {
    animationScroll: {},
    animationRotate: {},
    status: false,
  },
  methods: {
    tapLeft: function (params) {
      const animation = wx.createAnimation({
        duration: 1000,
        timingFunction: "ease",
        delay: 0
      });
      const animationRotate = wx.createAnimation({
        duration: 1000,
        timingFunction: "ease",
        delay: 0
      });
      const { status } = this.data;
      const width = wx.getSystemInfoSync().screenWidth;
      if (!status) {
        animation.left(width / 2).step();
        animationRotate.rotateY(-180).step();        
        this.setData({
          animationScroll: animation.export(),
          animationRotate: animationRotate.export(),
          status: true,
        })
      } else {
        animation.left(width).step();
        animationRotate.rotateY(0).step();                
        this.setData({
          animationScroll: animation.export(),
          animationRotate: animationRotate.export(),          
          status: false,
        })
      }
    },
    handleBottom: function (params) {
      wx.showToast({
        title: '没有咯',
        icon: 'info',
        image: '../../assets/img/cry.png',
      })
    }
  }
})
