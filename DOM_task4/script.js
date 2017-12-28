var applyLanguage = function (lang) {
  alert('Now language is: ' + lang);
};

var getCurrentLanguage = function () {
  var defaultLanguage = 'ua';
  if ( document.querySelector('input[type="radio"]:checked') == null ) {
    defaultLanguage;
  }
  else {
    var defaultLanguage = document.querySelector('input[type="radio"]:checked').dataset.lang;
  }
  return defaultLanguage;
}

function check() { 
  var checkLang = "[data-lang='"+currentLang+"']";
  document.querySelector(checkLang).checked = true;
  localStorage.save = true;
} 

var currentLang = localStorage.language || getCurrentLanguage();
if (localStorage.save) {
check();
}  
greetingMessage(); 


var checkbox = document.getElementById('languages');
checkbox.onchange = function() {
  currentLang = getCurrentLanguage();
  greetingMessage();
  check();
}

function greetingMessage() { 
  var langEls = document.getElementsByClassName('lang');
  for (var i=0; i<langEls.length; i++) {
    var langEl = langEls[i];
    langEl.classList.remove('visible');
  }

  var langEls = document.getElementsByClassName('lang-' + currentLang);
  for (var i=0; i<langEls.length; i++) {
    var langEl = langEls[i];
    langEl.classList.add('visible');
  }
} 

var $save = document.querySelector('html body button#save');
$save.addEventListener('click', function() {
  localStorage.setItem('language', currentLang);
  applyLanguage(currentLang);
});