(function(){
	$(document).ready(function(){
		var defaults={
			  html: true,
			  linkify: true,
			  typographer: true
			};
		var md=window.markdownit(defaults)
				.use(window.markdownitEmoji)
				.use(window.markdownitFootnote)
				/*
				.use(window.markdownitAbbr)
				.use(window.markdownitContainer,"warning")
				.use(window.markdownitDeflist)
				.use(window.markdownitIns)
				.use(window.markdownitMark)
				.use(window.markdownitSub)
				.use(window.markdownitSup)
				*/;
		
		function set_preview(_attr){
			var content=$("#mark_edit").val();
			var html = md.render(content);
			var attr=_attr||$("#mark_preview").attr("html-data")||"html";			
			if(attr=="html"){
				$("#mark_preview").html(html);
				$("#mark_preview").attr("html-data","html");
			}else if(attr=="text"){
				$("#mark_preview").text(html);
				$("#mark_preview").attr("html-data","text");
			}
		}
		
		//initialization
		var title=$("#mark_title").val();
		$("#mark_preview_title").html($.trim(title));
		set_preview("html");
		
		$("#mark_title").keydown(function(event){
			if (event.keyCode == 13) { 				
				var title=$("#mark_title").val();
				$("#mark_title").val($.trim(title));
				$("#mark_title").blur();
				$("#mark_edit").focus();
				return false;
			}
		});

		$("#mark_title").on("input propertychange",function(){
			var title=$("#mark_title").val();
			title=$.trim(title);
			$("#mark_preview_title").html(title);
			var height=$("#mark_preview_title").height();
			if(height<=48){
				height=48
			}
			$("#mark_title").height(height);
		})

		$("#mark_edit").on("input propertychange",function(){
			content=$("#mark_edit").val();
			html = md.render(content);
			$("#mark_preview").html(html);
			var height=$(this).prop("scrollHeight");
			if(height>500){
				$("#mark_edit").height(height);
			}
			var len=($.trim(content)).length;
			set_preview();
		})
		
		$("#btn_prv_show").click(function(){
			$(this).hide();
			$("#btn_prv_hide").show();
			$(".markdown-panel .edit-inner").hide();
			$(".markdown-panel .preview-inner").show();
			
		})
		$("#btn_prv_hide").click(function(){
			$(this).hide();
			$("#btn_prv_show").show();
			$(".markdown-panel .edit-inner").show();
			$(".markdown-panel .preview-inner").hide();	
		})
		$("#btn_columns").click(function(){
			$("#btn_prv_show").show();
			$("#btn_prv_hide").show();
			$(".markdown-panel .edit-inner").show();
			$(".markdown-panel .preview-inner").show();
		})
		$("#btn_prv_code").click(function(){
			var attr=$("#mark_preview").attr("html-data");
			if(attr=="html"){
				set_preview("text");
			}else{
				set_preview("html");
			}
		})

		var cor={
			getSelection:function(tag){
				return $(tag).get(0).selectionStart;
			},
			insertText:function(tag,str,len) {
				var start=$(tag).get(0).selectionStart;	
				var end=$(tag).get(0).selectionEnd;
				var value=$(tag).val();
				if(start==end){
					value=value.slice(0,start)+str+value.slice(end);
				}else{
					value=value.slice(0,start)+str.slice(0,len)+value.slice(start,end)+str.slice(len)+value.slice(end);
				}				
				$(tag).val(value);
				$(tag).get(0).selectionStart=start+len;
				$(tag).get(0).selectionEnd=end+len;
			},
			insertLinhead:function(tag,str){
				var start=$(tag).get(0).selectionStart;
				var _start=start;
				var end=$(tag).get(0).selectionEnd;
				var _end=end;
				var value=$(tag).val();
				for(;value[start-1]!="\n"&&start>0;start--){
				}
				for(;value[end]!="\n"&&end<value.length;end++){
				}
				var linetext=value.slice(start,end);
				var _linelen=linetext.length;
				linetext=linetext.replace(/^\s*/,'');
				var rep=new RegExp("^"+str+"*");
				var match=(linetext.match(rep))[0];
				
				if(match.length==0){
					linetext=" "+linetext;
				}
				if(match.length<6){
					linetext=str+linetext;
				}else{
					linetext=linetext.slice(match.length);
					linetext=$.trim(linetext);
				}
				value=value.slice(0,start)+linetext+value.slice(end);
				$(tag).val(value);
				
				var len=linetext.length-_linelen;
				$(tag).get(0).selectionStart=_start+len;
				$(tag).get(0).selectionEnd=_end+len;
			}
		}
		
		$(".mark-bar a").click(function(event){
			event.preventDefault();
		});
		
		$("#btn_blod").click(function(){
			cor.insertText("#mark_edit","****",2);
			$(this).blur();
			$("#mark_edit").focus();
			set_preview();
		});
		$("#btn_italic").click(function(){
			cor.insertText("#mark_edit"," __ ",2);
			$(this).blur();
			$("#mark_edit").focus();
			set_preview();
		});
		$("#btn_header").click(function(){
			cor.insertLinhead("#mark_edit","#");
			$(this).blur();
			$("#mark_edit").focus();
			set_preview();
		});
	});
})();