var onClick1 = function (e) {
	var $el = e.target;
  
  e.stopPropagation();

	alert('CLICK! ' + (this.id) );
    $el.style.backgroundColor = 'yellow';
}

document.body.onclick = onClick1;
box1.onclick = onClick1;
box2.onclick = onClick1;
box3.onclick = onClick1;

var onClick2 = function (e) {
	var $el = e.target;
  
  e.preventDefault();
  
	alert('CLICK! ' + (this.id) );
    $el.style.backgroundColor = 'brown';
}

document.body.onclick = onClick2;
box4.onclick = onClick2;
box5.onclick = onClick2;
box6.onclick = onClick2;
