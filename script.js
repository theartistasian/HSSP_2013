var c = canvas.getContext("2d"),
    w = canvas.width,
    h = canvas.height,
    gridSize = 30,
    n = gridSize,
    m = gridSize,
    margin = 10,
    time = 0,
    timeIncrement = 0.0002;

function redraw(){
  var i, u, v, x, y, z, r, theta, q,
      radius = 4;
  
  c.clearRect(0, 0, w, h);
  for(i = 0; i < n; i++){
    for(j = 0; j < n; j++){
      u = i/(n-1);
      v = j/(m-1);
      theta = u * Math.PI * 2 + j;
      r = v;
      
      x = (Math.sin(theta + time *i)) * r * w/2 + w/2;
      y = (Math.cos(theta + time * i)) * r * h/2 + h/2;
      
      q = 8 + Math.sin(time*80)*2;
      radius = (Math.sin(i + time*800)+1) * (n-j)/q;
      
      c.fillStyle = rgb(
        (Math.sin(j/4-time*200)/2+0.5)*255,
        (Math.sin(j/3-time*200)/2+0.5)*255,
        (Math.sin(j/5-time*200)/2+0.5)*100
      );
      
      drawCircle(x, y, radius);
    }
  }
  
  time += timeIncrement;
  
  requestAnimationFrame(redraw);
}

function drawCircle(x, y, radius, arcAngle){
  arcAngle = arcAngle || Math.PI * 2;
  c.beginPath();
  c.arc(x, y, radius, 0, arcAngle);
  c.closePath();
  c.fill();
}
function rgb(r, g, b){
  r = Math.floor(r);
  g = Math.floor(g);
  b = Math.floor(b);
  return ["rgb(",r,",",g,",",b,")"].join("");
}

redraw();