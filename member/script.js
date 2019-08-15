$(document).ready(function(){
	$('#nameCard').nameCard();
	$('#avatar').generate();

	var card = $('#nameCard');
	var ctx = card[0].getContext('2d');

	ctx.drawImage($('#avatar')[0], 100.5, 200.5, 256,256);

});
