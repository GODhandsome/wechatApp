function starA(timer) {
  var ctx = wx.createCanvasContext('bg');
  const img = '../../assets/img/star.png';
  const width = wx.getSystemInfoSync().windowWidth / 2;
  const height = wx.getSystemInfoSync().windowHeight;
  var stars = [];
  var deletes = [];
  for (let i = 0; i < 20; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 10,
    });
  }
  timer = setInterval(() => {
    deletes = [];
    for (let i = 0; i < 20; i++) {
      let size = stars[i].size;
      size += 1;
      if (size > 20) {
        deletes.push(i);
      } else {
        stars[i].size = size;
      }
    }
    draw(stars, ctx, deletes, width, height,img);
  }, 1000 / 30);
}

function draw(stars, ctx, deletes, width, height,img) {
  for (let i = 0; i < 20; i++) {
    let star = stars[i];
    ctx.drawImage(img, star.x, star.y, star.size || 0, star.size || 0);
  }
  ctx.draw();
  for (let i = 0, len = deletes.length; i < len; len--) {
    stars.splice(deletes[i], 1);
  }
  for (let i = 0, len = deletes.length; i < len; len--) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 10,
    });
  }
}

module.exports.starA = starA;