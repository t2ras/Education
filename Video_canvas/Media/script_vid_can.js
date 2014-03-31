//Канвас делает скрины видео, изменяет их положение и воспроизводит это
var elem,canvas,video;
function initiate(){
	elem = document.getElementById('canvas');
	canvas=elem.getContext('2d');
	video=document.getElementById('media');
//переворачиваем холст и масшабирование
	canvas.translate(483,0);
	canvas.scale(-1,1);
	setInterval(process,100); //каждые 100 милиссекунд будет обращаться к функции
}
	function process() {
	canvas.drawImage(video,0,0);
	}
addEventListener('load',initiate);

//Канвас делает скрины видео, изменяет их положение и воспроизводит это