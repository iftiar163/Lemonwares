// Click Slider One

$(document).ready(function(){
	$('#content-one').show();
	$('#content-two').hide();
	$('#content-three').hide();
	$('#content-four').hide();

	$('#button-one').click(function(){
		$('#button-one').addClass('active');
		$('#button-two').removeClass('active');
		$('#button-three').removeClass('active');
		$('#button-four').removeClass('active');

		$('#content-one').show();
		$('#content-two').hide();
		$('#content-three').hide();
		$('#content-four').hide();
	});

		$('#button-two').click(function(){
		$('#button-one').removeClass('active');
		$('#button-two').addClass('active');
		$('#button-three').removeClass('active');
		$('#button-four').removeClass('active');

		$('#content-one').hide();
		$('#content-two').show();
		$('#content-three').hide();
		$('#content-four').hide();
	});

		$('#button-three').click(function(){
		$('#button-one').removeClass('active');
		$('#button-two').removeClass('active');
		$('#button-three').addClass('active');
		$('#button-four').removeClass('active');

		$('#content-one').hide();
		$('#content-two').hide();
		$('#content-three').show();
		$('#content-four').hide();
	});

		$('#button-four').click(function(){
		$('#button-one').removeClass('active');
		$('#button-two').removeClass('active');
		$('#button-three').removeClass('active');
		$('#button-four').addClass('active');

		$('#content-one').hide();
		$('#content-two').hide();
		$('#content-three').hide();
		$('#content-four').show();
	});


	// Click Slider Two

	$('#base-row').show(); 
	$('#prem-row').hide();

	$('#basic').click(function(){
		$('#base-row').show(); 
		$('#prem-row').hide();
		$('#basic').addClass('active');
		$('#premium').removeClass('active');
	}); 

	$('#premium').click(function(){
		$('#base-row').hide(); 
		$('#prem-row').show();
		$('#basic').removeClass('active');
		$('#premium').addClass('active');
	}); 



	// Owl Slider

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
	});
});