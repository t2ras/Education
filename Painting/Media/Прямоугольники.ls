elem=document.getElementById('canvas');
	canvas=elem.getContext('2d'); // указывает на то, что при рисовании используем двухмерную графику
	canvas.fillStyle='orange';
	canvas.strokeRect(100,100,120,120);
	canvas.fillRect(110,110,100,100);
	canvas.clearRect(120,120,80,80);
	grad=canvas.createLinearGradient(0,0,10,100);
	grad.addColorStop(0.5,'pink');
	grad.addColorStop(0.9,'green');
	canvas.fillStyle=grad;
	canvas.fillRect(40,40,200,200);
	canvas.fillRect(250,40,200,200);