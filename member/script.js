$(document).ready(function(){
	$('#nameCard').nameCard();
	$('#avatar').avatar().hide();

	var card = $('#nameCard');
	var ctx = card[0].getContext('2d');

	ctx.drawImage($('#avatar')[0], 100.5, 200.5, 256,256);
	
	$('#nameCard').click(next)
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
	
	index = (index + 1) % all; 
}

function previous(){

}
