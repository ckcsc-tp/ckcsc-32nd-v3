console.log('script loaded');
var intro = [];

$(document).ready(function(){
	next();
	$('#nameCard').click(next);
	$('#avatar').hide();

	data.forEach((item, index) => {
		$.ajax(`./intro/${item.intro}`).
			then((data) => {
				intro[index] = data;
			}).
			catch(() => {
				then[index] = 'fail to load introduction';
			});
	});
});

var index = 0;
var all = 16;

function next(){
	var person = data[index];
	var card = $('#nameCard');
	var ctx = card[0].getContext('2d');

	console.log(index);
	$('#nameCard').nameCard({
	//console.table({
		name: person.name,
		nickName: person.nickName,
		job: (function(job){
			var r = '';
			for(var i in job){
				r += job[i] + ' ';
			}
			return r;
		})(person.position)
	});
	
	$('#avatar').avatar();
	ctx.drawImage($('#avatar')[0], 100.5, 200.5, 256,256);
	
	///// 暫時的 /////
	var spot = [230, 280, 330, 380, 430, 480];
	for(var i in spot){
		var text = '';
		for(var j = 0; j < 18; j++){
			text += (Math.floor(Math.random() * 10));
		}
		ctx.fillText(text, 400, spot[i]);
	}

	index = (index + 1) % all; 
}

function previous(){

}
