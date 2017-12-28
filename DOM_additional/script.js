document.getElementById('player').style.top = '50px';
document.getElementById('player').style.left = '50px';

document.body.onkeydown = function (e) {
	var el = document.getElementById('player');
  
  var KEYCODE_LEFT = 37;
  var KEYCODE_RIGHT = 39;
  
  var KEYCODE_TOP = 38;
  var KEYCODE_BOTTOM = 40;
  
  var KEYCODE_SPACE = 32;
  var KEYCODE_ENTER = 13;

  function createBullet() {
    bullet = document.createElement('div');
    bullet.className = 'bullet';
    el.appendChild(bullet);
  }

  function getOutBullet () {
  	el.removeChild(bullet);
  }
  
  if (e.keyCode == KEYCODE_LEFT) {
  	el.style.left = (parseInt(el.style.left) - 10) + 'px';
    el.style.transform = 'rotate(90deg)';
  }
  else if (e.keyCode == KEYCODE_RIGHT) {
  	el.style.left = (parseInt(el.style.left) + 10) + 'px';
    el.style.transform = 'rotate(-90deg)';
  }
  
  else if (e.keyCode == KEYCODE_TOP) {
  	el.style.top = (parseInt(el.style.top) - 10) + 'px';
    el.style.transform = 'rotate(180deg)';
  }
  
  else if (e.keyCode == KEYCODE_BOTTOM) {
  	el.style.top = (parseInt(el.style.top) + 10) + 'px';
    el.style.transform = 'rotate(0deg)';
  }

  if (el.style.top <= '0px') {
    el.style.top = (parseInt(el.style.top) + 10) + 'px';
  }

  if (e.keyCode == KEYCODE_SPACE || e.keyCode == KEYCODE_ENTER) {
    createBullet();
      setTimeout(function () {
        document.getElementsByClassName('bullet')[0].classList.add('bulletOut');
      }, .01);
      setTimeout(getOutBullet, 1000);
  } 
}