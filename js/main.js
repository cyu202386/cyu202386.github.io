(function($){
	"use strict";
	var maxIndex = 0;
	var nowIndex = 0;
	$('#fh5co-projects-feed img').each(function(i,v){
		$(v).attr("data-index",i);
		maxIndex = i;
	})
	$('#fh5co-projects-feed img').click(function(){
		var src = $(this).attr("src");
		$("#scan-img").attr("src",src);
		$("#scan-bk1").slideToggle("normal","linear");
		nowIndex = $(this).attr("data-index");
		console.log(nowIndex);
	})

	$("#left").click(function(){
		nowIndex = parseInt(nowIndex);
		if (nowIndex <= 0) {
			nowIndex= maxIndex+1;
		}
		nowIndex = nowIndex-1;

		var src = $("#fh5co-projects-feed img[data-index="+nowIndex+"]").attr("src");
		$("#scan-img").attr("src",src);
		console.log(src,nowIndex,$("#fh5co-projects-feed img[data-index='"+nowIndex+"']"));
	})

	$("#right").click(function(){
		nowIndex = parseInt(nowIndex);
		if (nowIndex >= maxIndex){
			nowIndex = -1;
		}
		nowIndex = nowIndex+1;

		var src = $("#fh5co-projects-feed img[data-index="+nowIndex+"]").attr("src");
		$("#scan-img").attr("src",src);
		console.log(src,nowIndex,$("#fh5co-projects-feed img[data-index='"+nowIndex+"']"));
	})

	$("#cancel").click(function(){
		$("#scan-bk1").slideToggle("normal","linear");
	})
$("#returnTop").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 });
	$(window).load(function() {
		var $container = $('#fh5co-projects-feed'),
		containerWidth = $container.outerWidth();

		$container.masonry({
			itemSelector : '.fh5co-project',
			columnWidth: function( containerWidth ) {
				if( containerWidth <= 330 ) {
					return 310;
				} else {
					return 330;
				}
			},

			isAnimated: !Modernizr.csstransitions
		});
	});

})(window.jQuery);