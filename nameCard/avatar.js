(function($){
	console.log('avatar loaded');
	function black(x, y, ctx){
		var size = 16;
		var rawX = x * size;
		var rawY = 128 - size * (y + 1);
		// console.table({x: rawX, y: rawY});
		ctx.fillRect(rawX, rawY, size, size);
	}
			
	function clear(ctx, bgColor){
		var tmp = ctx.fillStyle;
		ctx.fillStyle = bgColor;
		ctx.fillRect(0, 0, 128, 128);
		ctx.fillStyle = tmp;
	}

	function generate(ctx, color, bgColor){
		clear(ctx, bgColor);
		var tmp = ctx.fillStyle;
		ctx.fillStyle = color;

		var list = [7,6,5,4];
		for(var i = 0; i < 8; i++){
			for(var j in list){
				if(Math.random() * 100 > 50){
					black(j, i, ctx);
					black(list[j], i, ctx);
				}
			}
		}

		ctx.fillStyle = tmp;
	}

	$.fn.avatar = function(color = '#ffffff', bgColor = '#000000'){
		// console.table({color: color, bgColor: bgColor});
		var ctx = this[0].getContext('2d');
		generate(ctx, color, bgColor);
		
		return this;
	}
})($);

