$(document).ready(function() {
	// slideshow auto
   var myFunc = function(){
      var slide_sau = $('.active').next();
		if(slide_sau.length!=0){
			$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
			});
			slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
		}else{
			$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
			});
			$('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
		}
   }
   setInterval(myFunc, 3500);

// btn next and prev
   $("#btn-next").click(function (e) { 
	   
	var slide_sau = $(".active").next();
	if(slide_sau.length != 0){
		$(".active").addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (e) {
			$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
		});
		slide_sau.addClass('di-vao-ben-phai').addClass('active').one('webkitAnimationEnd', function(e){
			$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
		});
	}
	else{
		$(".active").addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (e) {
			$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
		});
		$('.slide:first-child').addClass('di-vao-ben-phai').addClass('active').one('webkitAnimationEnd', function(e){
			$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
		});
	}
   });

   $("#btn-prev").click(function (e) { 
	   
	var slide_prev = $(".active").prev();
		if( slide_prev.length != 0){
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			slide_prev.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
		}
		else{
			$(".active").addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function (e) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			$('.slide:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(e){
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
		}
   });


   //create btn back to top
   $(window).scroll(function () { 
	var pos = $('html, body').scrollTop();
	if(pos > 1200)
	{
		$('.bttop').show();
	}
	else{
		$('.bttop').hide();
	}

	});

	$(".bttop").click(function (e) { 
		$('html, body').animate({
			scrollTop: 0}, 800);
	});



	// current page

	//create side menu
	$('.header-category').click(function(){
		$('.menu-mobile-overlay').show();
		$('.mobile-main-menu-wrap').show();
	});
	
	$('.side-to-left').click(function (e) { 
		$('.menu-mobile-overlay').hide();;
		$('.mobile-main-menu-wrap').hide();

		//if accordion still open => close those
		$('.accordion-list').hide();
		$('.minus').hide();
		$('.plus').show();
		$('.accordion-list1').hide();
		$('.minus1').hide();
		$('.plus1').show();
	});


	
	// menu-mobile-overlay and mobile-main-menu
	$(window).resize(function() {
		var viewportWidth = $(window).width();
		if (viewportWidth > 739){
			$('.menu-mobile-overlay').hide();
		}
		else if($('.mobile-main-menu-wrap').css('display') == 'block'){
			$('.menu-mobile-overlay').show();
		}
	});


	// accordion
	// Cakes
	$('.plus').on('click', function(){
		$('.accordion-list').slideDown(500, function(){
			$('.accordion-list').show();
		});
		$('.plus').hide();
		$('.minus').show();
	});
	$('.minus').click(function(){
		$('.accordion-list').slideUp(500, function(){
			$('.accordion-list').hide();
		});
		$('.minus').hide();
		$('.plus').show();
	});
	// drinks
	$('.plus1').click(function(){
		$('.accordion-list1').slideDown(500, function(){
			$('.accordion-list1').show();
		});
		$('.plus1').hide();
		$('.minus1').show();
	});
	$('.minus1').click(function(){
		$('.accordion-list1').slideUp(500, function(){
			$('.accordion-list1').hide();
		});
		$('.minus1').hide();
		$('.plus1').show();
	});


	// auth-form
	$('#account').click(function(){
		$('.modal').css('display', 'flex');
	});
	$('.close').click(function(){
		$('.modal').hide();
	});
});


