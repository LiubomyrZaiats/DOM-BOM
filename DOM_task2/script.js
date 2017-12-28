window.addEventListener('scroll', function (e) {
	console.log(document.body.scrollTop);
  
  var $parallax = document.getElementById('parallax');
  var posY = -(document.body.scrollTop || document.documentElement.scrollTop) * 0.8;
  $parallax.style.backgroundPosition = '0px '+posY+'px';
})