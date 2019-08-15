var canvas = $('#activity');
var ctx = canvas[0].getContext('2d');

// ctx.fillRect(100,100,100,100);
// ctx.clearRect(120,120,60,60);
// ctx.strokeRect(140,140,20,20);

// ctx.beginPath();
// ctx.moveTo(200,200);
// ctx.lineTo(200,400);
// ctx.lineTo(300,300);
// ctx.fill();
function nameCard(data){
	if(!data) data = {};
	var preData = {
		name: '吳政儒',
		nickName: '狸貓',
		job: '社長 社寵',
		t: '00-00000000',
		e: 'xxxx@xxxx.xxxx',
		line: 'asdfghjk',
		fb: 'qwertyui'
	};
	for(var i in preData){
		if(!(i in data)){
			data[i] = preData[i];
		}
	}

	ctx.fillStyle = '#1b2124';
	ctx.fillRect(0,0,900,540);
	ctx.fillStyle = '#ffffff';
	ctx.font = '120px Auraka點陣宋';
	ctx.fillText(data.name,30,130);
	ctx.font = '60px Auraka點陣宋';
	ctx.fillText(data.job,420,80);
	ctx.font = '50px Auraka點陣宋';
	ctx.fillText(data.nickName,420,150)
	
	ctx.font = '36px Auraka點陣宋';
	ctx.fillText(`T:       ${data.t}`,60,280);
	ctx.fillText(`E:       ${data.e}`,60,330);
	ctx.fillText(`LINE: ${data.line}`,60,380);
	ctx.fillText(`FB:     ${data.fb}`,60,430);
}

nameCard();
