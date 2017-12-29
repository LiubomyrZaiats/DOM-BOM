var form = document.createElement('form');
		form.setAttribute('name', 'login');

var inputAge = document.createElement('input');
		inputAge.setAttribute('type', 'text');
		inputAge.setAttribute('name', 'age');
		inputAge.setAttribute('placeholder', 'Age 0-9');

var inputName = document.createElement('input');
		inputName.setAttribute('type', 'text');
		inputName.setAttribute('name', 'username');
		inputName.setAttribute('placeholder', 'Username user_...');

var inputDate = document.createElement('input');
		inputDate.setAttribute('type', 'text');
		inputDate.setAttribute('name', 'date');
		inputDate.setAttribute('placeholder', 'Date dd/mm/yyyy');

var inputSubmit = document.createElement('input');
		inputSubmit.setAttribute('type', 'submit');
		inputSubmit.setAttribute('value', 'Validate Me');

form.appendChild(inputAge);
form.appendChild(inputName);
form.appendChild(inputDate);
form.appendChild(inputSubmit);

document.body.appendChild(form);

inputSubmit.addEventListener('click', validateForm);


function validateForm(click) {
  click.preventDefault();
  var age = inputAge.value,
    	name = inputName.value,
    	date = inputDate.value,
    	submit = inputSubmit.value;
  
  	   if (! /^[0-9]+$/.test(age)) {
	        alert('Age is invalid');
	        return false;
	    }

	    if (!(name.indexOf('user_') == 0)) {
	        alert('Username is invalid');
	        return false;
	    } 

    var todayDate = new Date(),
        dd= todayDate.getDate(),
	      mm = todayDate.getMonth() + 1,
	      yyyy = todayDate.getFullYear();
	    if (dd < 10) {
	    	dd = '0' + dd;
	    }
	    if (mm < 10) {
	    	mm = '0' + mm;
	    }
	  var fullDate = dd + '/' + mm + '/' + yyyy;
	    if (date !== fullDate) {
	        alert('Date is invalid');
	        return false;
	    }
	  alert('Your data is valid');
}
  

