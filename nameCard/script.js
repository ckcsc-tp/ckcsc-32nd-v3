console.log('script loaded');
var intro = [];

data.forEach((item, index) => {
	$.ajax(`./intro/${item.intro}`).
		then((data) => {
			intro[index] = data;
		}).
		catch(() => {
			then[index] = 'not found';
		});
});

$(document).ready(function(){
	nameCard(1);
	$('#avatar').hide();

});

function nameCard(index){
	
	while(intro.length != 16);


	index -= 1;
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

	console.log(person);
	
	if(person.intro === 'not found'){
		var spot = [230, 280, 330, 380, 430, 480];
		for(var i in spot){
			var text = '';
			for(var j = 0; j < 18; j++){
				text += (Math.floor(Math.random() * 10));
			}
			ctx.fillText(text, 400, spot[i]);
		}
	}else{
		var spot = [230, 280, 330, 380, 430, 480];
		var text = intro[index].split('\n');
		console.log(text);
		for(var i in text){
			ctx.fillText(text[i], 400, spot[i]);
		}		
	}
}
