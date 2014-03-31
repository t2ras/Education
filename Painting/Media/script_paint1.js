var elem, canvas,grad,img,size;
function initiate(){
	var elem=document.getElementById('canvas');
	canvas=elem.getContext('2d');
	addEventListener('mousemove',animation);
}
function animation(e){
	canvas.clearRect(0,0,300,500);
	var xmouse=e.clientX;
	var ymouse=e.clientY;
	var xcenter=220;
	var ycenter=150;
	var ang=Math.atan2(ymouse-ycenter,xmouse-xcenter); //угол от центра глаза до мыши
	var x=xcenter+Math.round(Math.cos(ang)*10); //чтобы определить центр зрачка нужно определить 
	var y=ycenter+Math.round(Math.sin(ang)*10); //катеты и сложить их и на радиус зрачка
	// рисуем два глаза
	canvas.beginPath();
	canvas.arc(xcenter,ycenter,20,0,Math.PI*2);
	canvas.moveTo(xcenter+70,ycenter); //xcenter+70 - отступ между глазами
	canvas.arc(xcenter+50,ycenter,20,0,Math.PI*2);
	canvas.stroke();
	// рисуем зрачки
	canvas.beginPath();
	canvas.moveTo(x+10,y);
	canvas.arc(x,y,10,0,Math.PI*2);
	canvas.moveTo(x+60,y);
	canvas.arc(x+50,y,10,0,Math.PI*2);
	canvas.fill();
}
addEventListener('load', initiate);

//!!!Задание - нарисовать шапку!!!!!