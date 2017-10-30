$(document).ready(function(){
	var scrollLink = $('.scroll');
	
	//smooth scrolling:
	scrollLink.click(function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop:$(this.hash).offset().top //how far away from the top is this section
		},1500);										//then bring the scroll bar to the current position
	})
	
	/*switch active links
	$(window).scroll(function(){
		var scrollBarLocate = $(this).scrollTop();//location of the scroll bar from the top
		scrollLink.each(function(){
			var sectionOffset = $(this.hash).offset().top - 20;
			if(sectionOffset <= scrollBarLocate){
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		})
	})*/
})
	 