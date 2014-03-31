var elem, canvas,grad,img,size;
function initiate(){
	elem=document.getElementById('canvas');
	canvas=elem.getContext('2d'); // указывает на то, что при рисовании используем двухмерную графику
	// canvas.save();
	// canvas.fillStyle='orange';
	// canvas.strokeRect(100,100,120,120);
	// canvas.fillRect(110,110,100,100);
	// canvas.clearRect(120,120,80,80);
	// grad=canvas.createLinearGradient(0,0,10,100);
	// grad.addColorStop(0.5,'pink');
	// grad.addColorStop(0.9,'green');
	// canvas.fillStyle=grad;
	// canvas.fillRect(40,40,200,200);
	// canvas.fillRect(250,40,200,200);
	// canvas.beginPath();
	// canvas.moveTo(100,100);
	// canvas.lineTo(200,200);
	// canvas.lineTo(100,200);
	// canvas.closePath();
	// canvas.clip();
	// for (var f=0;f<300;f=f+10){ //300 и 500 значение высоты и ширины
	// 	canvas.moveTo(0,f);
	// 	canvas.lineTo(500,f);
	// }
	// canvas.stroke();
	// canvas.restore();
	// canvas.beginPath(); //Рисуем круг разобраться почему не работает круг при рабочем clip. Работает  
	// canvas.arc(100,100,50,0,Math.PI*2,false);//только с canvas.save и canvase.restore
 //    canvas.closePath();
	// canvas.stroke();
	// canvas.lineWidth=10;
	// canvas.lineCap='round';
	// canvas.beginPath();
	// canvas.moveTo(230,150);
	// canvas.arc(200,150,30,0,Math.PI,false);
	// canvas.stroke();
	// canvas.lineWidth=5;
	// canvas.lineJoin='mitter';
	// canvas.beginPath();
	// canvas.moveTo(195,135);
	// canvas.lineTo(215,155);
	// canvas.lineTo(195,155);
	// canvas.stroke();
	// canvas.beginPath();
	// canvas.arc(200,150,50,0,Math.PI*2,false);
	// canvas.stroke();
	// canvas.beginPath();
	// canvas.arc(180,130,5,0,Math.PI*2,false);
	// canvas.stroke();
	// canvas.beginPath();
	// canvas.arc(215,130,5,0,Math.PI*2,false);
	// canvas.stroke();
	// canvas.beginPath();
	// canvas.moveTo(50,50);
	// canvas.quadraticCurveTo(100,125,50,20);
	// canvas.moveTo(300,50);
	// canvas.bezierCurveTo(200,125,300,125,250,200);
	// canvas.stroke();
	// img =document.createElement('img');
	// img.setAttribute('src','image(pic.jpg)');
	// img.addEventListener('load',function(){
	// canvas.drowImage(img,20,20);
	// });

//текст
	canvas.font='bold 24px verdana,san-serif';
	canvas.textAlight='start';
	size = canvas.measureText('Hello'); //загнали в переменную размер текста
	canvas.strokeRect(100,75,size.width,36);
	canvas.shadowColor='rgba(0,0,0,0.5)';
	canvas.shadovOffsetX=4;
	canvas.shadovOffsetY=4;
	canvas.shadovBlur=10;
	canvas.fillText('Hello',100,100);
	canvas.translate(50,70);
	canvas.rotate(Math.PI/180*45);
	canvas.fillText('Text',0,0);

	canvas.rotate(-Math.PI/180*45); // для обнуления поворота
	canvas.translate(0,100);
	canvas.scale(2,2);
	canvas.fillText('Test',0,0);
	canvas.restore(); //обнуление трансформации restore сработает только если прописан save
	//паттерны(размножеине картинок)
	img=document.createElement('img');
	img.setAttribute('src','/Users/t2ras/Downloads/2.jpg');
	img.addEventListener('load',modimage); //картинка загрузилась вызываем функцию
}
function modimage(){
		pattern=canvas.createPattern(img,'repeat');
		canvas.fillStyle=pattern;
		canvas.fillRect(0,0,300,200);
		/*если вставить так, то текст будет поверх паттерна
		canvas.font='bold 24px verdana,san-serif'; 
	canvas.textAlight='start';
	size = canvas.measureText('Hello'); //загнали в переменную размер текста
	canvas.strokeRect(100,75,size.width,36);
	canvas.shadowColor='rgba(0,0,0,0.5)';
	canvas.shadovOffsetX=4;
	canvas.shadovOffsetY=4;
	canvas.shadovBlur=10;
	canvas.fillText('Hello',100,100);
	canvas.translate(50,70);
	canvas.rotate(Math.PI/180*45);
	canvas.fillText('Text',0,0);

	canvas.rotate(-Math.PI/180*45); // для обнуления поворота
	canvas.translate(0,100);
	canvas.scale(2,2);
	canvas.fillText('Test',0,0);
	canvas.restore();
		*/
	}
// прямоугольники  x и y считается относительно canvas
// fillRect(x,y,width,height)  залит черным цветом
// strokeRect(x,y,width,height)  не  залит черным цветом прямоугольник
// clearRect(x,y,width,height) стирает область нарисованную
// strokeStyle
// fillStyle
//Градиенты
// createLinearGradient(x1,y1,x2,y2); создает объект для последующей реализации градиента
// addColorStop(position,color);  position от 0.0 до 1.0  - затухание цвета
// createRadiusGradient(x1,y1,x2,y2); только с
// Методы для создания путей:
// beginPath()
// closePath()
// stroke() визуализируем объект в виде контура
// flip() закрывает фигуру и заливает цветом
// clip() маска которая накладывается поверх 
// Методы для создания фигуры
// moveTo(x,y) позиция с которой начинается линия
// lineTo(x,y)
// rect(x,y,width,height)
// arc(x,y,radius,startAngle,endAngle,direction) риисует дуги
// quadraticCurveTo(cpx,cpu,x,y) линия без Е
// Параметры линни
// lineWidth  толщина
// lineCap окончание линии round square butt
// lineJoin соединение двух линий
// Изображения
// drowImage(/image,x,y) вставить изображение и куда
// drowImage(/image,x,y,width,height) вставить изображение определенного размера
// drowImage(/image,x1,y1,width1,height1,x2,y2,width2,height2) Втсавили обрезали и Изменить размер
// Текст (лучше всего делать логотипв через canvas потому что поисковая машина прочитает его)
// .textBasLine выравнивание по вертикали
// .textAlight выравнивание по горизонтали
// .font для определения 
// strokeText(text,x,y[max-size]); max-size максимальный размер текста
// fillText текст как залитая фигура
// measureText для изменение размера текста
//box.shadow(x,y,r,color) в CSS в canvas есть следующие свойства:
// shadowColor
// shadovOffsetX
// shadowOffsetY
// shadowBlur размытость
// Элементы трансформации(поворот холста)
// translate(x,y) применятеся для переноса начальных координат
// rotate(угол) поворачивает холст вокруг начала координат на указанны угол
// scale(x,y) масштабирует все элементы на холсте
// Анмация(зрачки следят за мышкой)
//  нужно узнать угол который идет из центра глаза до курсора и на основании этого угла в зависимости 
// от размера зрачка определить расстояние и направления центра зрачка и получается что нужны две формулы
// Math.atan2(y,x) это и есть наш угол, который требуется 
// Math.sin(угла)*x x -гипотенуза
// Math.cos(угла)*x x -гипотенуза
addEventListener('load', initiate);

//!!!Задание - нарисовать шапку!!!!!