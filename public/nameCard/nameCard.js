(function($){
	// var log = console.log;
	var log = () => {};
	
	log('nameCard loaded');		
	$.fn.nameCard = function(data){
		var ctx = this[0].getContext('2d');
		if(!data) data = {};
		var preData = {
			name: '吳政儒',
			nickName: '狸貓',
			job: '社長 社寵'
		};
		for(var i in preData){
			if(!(i in data)){
				data[i] = preData[i];
			}
		}
	
		ctx.fillStyle = '#1b2124';
		ctx.fillRect(0,0,900,540);
		ctx.fillStyle = '#ffffff';
		ctx.font = '120px Auraka';
		ctx.fillText(data.name,30,130);
		ctx.font = '60px Auraka';
		ctx.fillText(data.job,420,80);
		ctx.font = '50px Auraka';
		ctx.fillText(data.nickName,420,150)
		
		ctx.font = '30px Auraka';
	}
})(jQuery);
