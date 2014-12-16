(function () {
  var $     = document.querySelector.bind(document),
    $time   = $('[role=time]'),
    $hex    = $('[role=hex]'),
    $body   = $('body'),
    $canvas = $('canvas'),
    $favicon= $('link[rel="shortcut icon"]');

  var formatTime = function(date) {
    return [date.getHours(), date.getMinutes(), date.getSeconds()]
      .map(function(t) {
        return t < 10 ? '0' + t : t;
      });
  };

  var swapFavicon = function(color) {
    context = $canvas.getContext('2d');
    context.fillStyle = color;
    context.fillRect(0, 0, 16, 16);
    $favicon.href = $canvas.toDataURL();
    $favicon.type = "image/x-icon";
  };

  var tick = function() {
    var now = formatTime(new Date()),
      colourNow = '#' + now.join(''),
      timeNow = now.join(':');

    $time.innerHTML = timeNow;
    $hex.innerHTML = colourNow;
    $body.style.background = colourNow;
    document.title = 'New Tab - ' + timeNow;
    swapFavicon(colourNow);

    setTimeout(tick, 1000);
  };

  tick();
})();
