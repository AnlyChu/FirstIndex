	$(document).ready(function(){
			$(window).load(function(){
					imgpush();
					var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"}]}
					window.onscroll = function(){
						if(scroll())
						{
							$.each(dataImg.data,function(index,value){
									var box = $("<div>").addClass("box").appendTo($("#container"));
									var content = $("<div>").addClass("content").appendTo(box);
									// console.log("images/" + $(value).attr("src"));
									$("<img>").attr("src","images/" + $(value).attr("src")).appendTo(content);
							});
							imgpush();
						}
					};
			});
		});

		function imgpush()
		{
			var box = $(".box");
			var boxWidth = box.eq(0).width();
			var num = Math.floor($(window).width()/boxWidth);
			var boxArr = [];
			box.each(function(index,value){
					var boxHeight = box.eq(index).height();
					if(index < num)
					{
						boxArr[index] = boxHeight;
					}
					else
					{
						var minboxHeight = Math.min.apply({},boxArr);
						var minboxIndex = $.inArray(minboxHeight,boxArr);
						// console.log(minboxIndex);
						$(value).css({
							"position":"absolute",
							"top":minboxHeight,
							"left":box.eq(minboxIndex).position().left
						});
						boxArr[minboxIndex] +=  box.eq(index).height();
					}
			});
		}

		function scroll()
		{
			var box = $(".box");
			var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height()/2);
			var documentHeight = $(document).width();
			var scrollHeight = $(window).scrollTop();
			return (lastboxHeight < scrollHeight + documentHeight) ? true : false;
		}
