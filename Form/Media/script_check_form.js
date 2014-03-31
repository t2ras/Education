var button,form;
function initiate(){
	var button=document.getElementById('send');   //getElementById обращение к селекторам на странице
	button.addEventListener('click', sendit);     //прослушиватель нажития кнопки button
form=document.querySelector('form[name=information]');
form.addEventListener('invalid',validation);
form.addEventListener('input',checkval);
}
function sendit(){
	var valid=form.checkvalidity();
	if(valid){
		form.submit();
	}
}
function validation(e){
	var elem=e.target;   //последнее событие инвалид перехватывается 
	elem.style.background='red';
}
function checkval(e){
	var elem = e.target;
	if (elem.validity.valid) {
		elem.style.background='green';
	} else {elem.style.background='red';}
}

addEventListener('load',initiate);

//кроме getElementById есть следующие функции 
//getElementByClass getElementByTagName  возвращают массив
//quereSelector('form[name]')
//quereSelectorAll  тоже возвращает все в ввиде массива что найдет