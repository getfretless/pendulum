function canvas() {
  var context = myCanvas.getContext('2d');
  var x = 0, y = 0;
  var interval;
  var n = 20;
  var width = 5;
  var height = 5;
  var multiplier = 20;
  var timeModifier = 0.02;
  var color = 'black';

  function stop() {
    clearInterval(interval);
  }

  function drawManyRectangles() {
    var time = 0
    var redraw = function () {
      context.clearRect(0, 0, myCanvas.width, myCanvas.height);

        context.fillStyle = color;
      for (var i=0; i < n; i++) {
        x = myCanvas.width / 2 + Math.sin(time * i) * multiplier;
        y = i/n * myCanvas.height;
        context.fillRect(x, y, width, height);
      }
      time += timeModifier;
    }
    interval = setInterval(redraw, 20);
  }

  function update(ev) {
    ev.preventDefault();
    var fields = this.elements;
    n = fields.n.value;
    width = fields.width.value;
    height = fields.height.value;
    multiplier = fields.multiplier.value;
    timeModifier = parseFloat(fields.time_modifier.value) / 100;
    color = fields.color.value;
  }

  document.querySelector('form').onsubmit = update;
  drawManyRectangles();
}
canvas();
