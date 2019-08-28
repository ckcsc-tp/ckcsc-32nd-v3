(function($){
	console.log('script loaded');
	var intro = [];
	var index = 0;
	var all = 16;
	var step = 2;
	var data;
	
	
	$(document).ready(function(){
		debugger;
		$.getJSON('/api/user')
			.done((e) => {
				data = e;
				data.forEach((item, index) => {
					$.ajax(`./intro/${item.intro}`).
						then((data) => {
							intro[index] = data;
						}).
						catch(() => {
							intro[index] = 'not found';
						});
				});
				nameCard(1);
			})
		
	
		$('#avatar').hide();
	
		$('#p0').text(data[0].name).click(()=>{button(0)});
		$('#p1').text(data[1].name).click(()=>{button(1)});
		$('#p2').text(data[2].name).click(()=>{button(2)});
		$('#p3').text(data[3].name).click(()=>{button(3)});
		$('#left').click(()=>{left(all - step)});
		$('#right').click(()=>{left(step)});
	
	});
	
	function nameCard(index){
		
		if(intro.length <= 3){
			setTimeout(nameCard, 100, index);
			return;
		}
	
		index -= 1;
		var person = data[index];
		var card = $('#nameCard-lg');
		var ctx = card[0].getContext('2d');
	
		console.log(index);
		card.nameCard({
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
		ctx.drawImage($('#avatar')[0], 50.5, 200.5, 256,256);
	
		console.log(person);
		
		var spot = [230, 280, 330, 380, 430, 480];
		var text = intro[index].split('\n');
		console.log(text);
		for(var i in text){
			ctx.fillText(text[i], 330, spot[i]);
		}		
	
		var canvasSize = [
			[450,270],
			[600,360],
			[1200,720]
		];
	
		$('canvas').not('#avatar').not('#nameCard-lg').each((index, item)=>{
			var ctx = item.getContext('2d');
			ctx.drawImage(card[0], 0, 0, canvasSize[index][0], canvasSize[index][1]);
		})
	
	}
	
	function left(n){
		index = (index + n) % all;
		console.log('===== left =====');
		for(var i = 0; i < 4; i++){
			console.log(j)
			var j = (index + i) % all;
			$(`#p${i}`).text(data[j].name);
		}
		console.log('================');
	}
	
	function button(n){
		var i = (index + n) % all;
		nameCard(i + 1);
	}
	
	$(window).resize(()=>{
		var nameCard = $('canvas').not('#avatar');
		var w = $(this).width();
		console.log(w);
		nameCard.hide();
		if(w >= 1400){
			nameCard.eq(3).show();
		}else if(w >=992){
			nameCard.eq(2).show();
		}else if(w >=768){
			nameCard.eq(1).show();
		}else{
			nameCard.eq(0).show();
		}
	}).resize();
})(jQuery);
