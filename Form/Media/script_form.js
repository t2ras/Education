var name1, name2;
function initiate(){
	name1=document.getElementById('firstname');
	name2=document.getElementById('lastname');
	name1.addEventListener('input',validation);
	name2.addEventListener('input',validation);
	validation(); //если пользователь ничего не ввел
}
function validation(){
	if(name1.value===""&&name2.value===""){
		name1.setCustomValidity('Заполните хотя бы одно из полей');
		name1.style.background='red';
		name2.style.background='red';
	} else{
		name1.setCustomValidity('');
		name1.style.background='green';
		name2.style.background='green';
	}
}
function validateComments(input){     //Все что пользователь ввел в textarea попадает в input
	if (input.value.length<20) {
		input.setCustomValidity('Вы ввели меньше 20');
	} else{
		input.setCustomValidity('');   //Обнуление ошибки, чтобы не выскакивала постоянно
	}
}
addEventListener('load',initiate);  //добавить событийный прослушиватель. 
									//Добавляет лубой прослушиватель для любого элемента. 
									//Не загужаем сайт скриптами до полной загрузи html