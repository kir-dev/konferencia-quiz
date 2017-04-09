$( document ).ready(function() {
  var c = document.getElementById('myCanvas');
  var ctx = c.getContext('2d');

  // bind event handler to clear button
  document.getElementById('clear').addEventListener('click', function() {
    ctx.clearRect(0, 0, c.width, c.height);
    document.getElementById('codeArea').value='';
  }, false);

  // bind event handler to draw button
  document.getElementById('draw').addEventListener('click', function() {
    var code = document.getElementById('codeArea').value;
    var result = eval(code);
  }, false);

  document.getElementById('drawKirdev').addEventListener('click', function() {
    // vertical line
    var size = Math.min( c.width, c.height)/4;

    ctx.moveTo(3*size,0);
    ctx.lineTo(3*size,4*size);
    ctx.stroke();
    // bottom half circle
    ctx.beginPath();
    ctx.arc(3*size,4*size,2*size,Math.PI,0);
    ctx.stroke();
    // upper quater circle
    ctx.beginPath();
    ctx.arc(3*size,0,2*size,Math.PI/2,Math.PI);
    ctx.stroke();
    // upper rigt half circle
    ctx.beginPath();
    ctx.arc(4*size,1*size,1*size,3*Math.PI/2,Math.PI/2);
    ctx.stroke();
    // upper hotizontal line
    ctx.moveTo(3*size,1);
    ctx.lineTo(4*size,1);
    ctx.stroke();
    // lower horizontal line
    ctx.moveTo(3*size,2*size);
    ctx.lineTo(4*size,2*size);
    ctx.stroke();
  }, false);
});
