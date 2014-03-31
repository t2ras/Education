var maxim,mmedia,play,bar,progress,mute,volume,loop,size,mouseX,newtime;
function initiate(){
	maxim=400;  //максимальное количество пикселей для прогресса
	mmedia=document.getElementById('media');
	play=document.getElementById('play');
	bar=document.getElementById('bar');
	progress=document.getElementById('progress');
	mute=document.getElementById('mute');
	volume=document.getElementById('volume');
	play.addEventListener('click',push);
	mute.addEventListener('click',sound);
	bar.addEventListener('click',move);
	volume.addEventListener('change',level);
	mmedia.addEventListener('click',gofullscreen); //слушаем событие при клике на само видео
}
function push(){  //если видео не стоит на паузе и не достигло конца- ставим видео на паузу
	if(!mmedia.paused&&!mmedia.ended){
		mmedia.pause();
		play.value='play';
		clearInterval(loop);
	} else{                   //если видео проигрывается то else
		mmedia.play();
		play.value='pause';
		loop= setInterval(status,1000);   //вызывает каждую секунду функцию status
	}
}
function status(){
	if (!mmedia.ended) {
		size=parseInt(mmedia.currentTime*maxim/mmedia.duration); //перевести длительность видео в пиксели.
		progress.style.width=size+'px'; //вставляем size в стили
	} else{
		progress.style.width='0px';
		play.value='play';
		clearInterval(loop);
	}
}
function move(e){ //offsetLeft вычисляет расстоние от левого края до начала блока }
	mouseX=e.pageX-bar.offsetLeft;
	newtime=mouseX*mmedia.duration/maxim;// переводим значение пикселей во время
	mmedia.currentTime=newtime;
	progress.style.width=mouseX+'px';
}
function sound(){
	if(mute.value=='Mute'){
		mmedia.muted=true;
		mute.value='Sound';
	} else{
		mmedia.muted=false;
		mute.value='Mute';
	}
}
function level(){
	mmedia.volume=volume.value;
}
function gofullscreen(){
	if(!document.webkitfullscreenElement){  //если браузер поддерживат фуллскрин видео, вызываем фуллскрин
		mmedia.webkitRequestFullscreen();
		mmedia.play();
	}
}
addEventListener('load', initiate);
//функция var loop= setInterval(func,1000);  1000 через сколько нужно функцию повторить,
// чтобы обнулить функцию нужно вызвать clear interval(loop)
// дабл клик нельзя повесить потому что есть уже событие браузерное. Чтобы сделать видео на дабклик
// необходимо обнулить события на дабблклик e.presentDefault();