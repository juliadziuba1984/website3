var map_instances = [];
var flag=true;
var startSlide;
/*-------------------popup init-------------------*/
function InitPopup(popup){
	popup = $(popup);
	var cls = popup.attr('data-popup');
	$('.custom-popup.'+cls).fadeIn('300');
	$('.custom-popup.'+cls).prev('.custom-overlay').fadeIn('300');	

		
}
/*-------------------end popup init-------------------*/


/*-------------ALIGN POPUPS-------------------------*/
function AlignPopup(){
	$('.custom-popup').each(function(){
		if($(this).outerWidth() > $(window).width()-80 && $(this).outerHeight()+80 > $(window).height()) {
			$(this).css({
				"position": "absolute",
				"top": $(window).scrollTop() + 50 + "px",
				'left': '40px'
			});
		}
		
		else if($(this).outerHeight()+80 > $(window).height()) {
			$(this).css({
				"position": "absolute",
				"top": $(window).scrollTop() + 50 + "px",
				'left': ($(window).width()-$(this).outerWidth())/ 2 + 'px'
			});
		}
		
		else if($(this).outerWidth() > $(window).width()-80) {
			$(this).css({
				"position": "absolute",
				"top": $(window).scrollTop() + 50 + "px",
				'left': '40px'
			});
		}
		
		else {
			$(this).css('top',($(window).height()-$(this).outerHeight())/ 2 + 'px');
			$(this).css('left',($(window).width()-$(this).outerWidth())/ 2 + 'px');
			$(this).css('position', 'fixed');	
		}
	});
	
	
	
	
	
	if(navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i)||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/Blackberry/i) )
    {
	$('.custom-popup').addClass('mobilepopup');
		
	$('.custom-popup').each(function(){
		$(this).css('top', 100 +$(window).scrollTop()+ 'px');
		$(this).css('left',(1240-$(this).outerWidth())/ 2 + 'px');
		$(this).css('position', 'absolute');	
	});
    }
}
/*-------------END ALIGN POPUPS-------------------------*/







/*-------------read more content*/
function showMoreContent() {
	
	$('.js_readmore_block .text').each(function(){
		if($(this).innerHeight()<="30"){
		$(this).parent().parent().find('.btn_read_more').css('display','none');
		$(this).parent().parent().find('.text_holder').css('height','auto');
		}
	})
	
	$('.js_read_more').click(function(e){
		e.preventDefault();	
		e.stopPropagation();
		if($(this).hasClass('active')){
			$(this).parent().find('.text_holder').animate({height: "35px"}, 500)
			$(this).removeClass('active');
		}
		else {
			var height = $(this).parent().find('.text').innerHeight();
			$(this).parent().find('.text_holder').animate({height: height+"px"}, 500)
			$(this).addClass('active');
		}
		
	});
	
}
/*-------------end read more content*/



/*-------------Tabs-------------------*/
function initTabs() {
    var isAnimating = false;
    $('[data-tab]').click(function(e) {
         e.preventDefault();
		if($(this).hasClass('active')){}
		else{
        if(!isAnimating) {
            var parent = $(this).closest('.js_tabs');
            var cls = $(this).attr('data-tab');
            isAnimating = true;
            $('[data-tab]', parent).removeClass('active');
            $(this, parent).addClass('active');
			
			

            if($('.hidden_content',parent).hasClass('active')){
                $('.hidden_content.active', parent).fadeOut(300, function(){
                    $('.hidden_content.active', parent).removeClass('active');
                    $('.hidden_content'+'#'+cls, parent).fadeIn(300, function() {
                        isAnimating = false;
                    });  
                    $('.hidden_content'+'#'+cls, parent).addClass('active');
					
					
					
                })
				
            }
            else {
                $('.hidden_content'+'#'+cls, parent).fadeIn(300, function() {
                    isAnimating = false;
                }); 
                $('.hidden_content'+'#'+cls, parent).addClass('active');
            }
        }
		
			}
		
    });
	$('.hidden_content.active').fadeIn();	
}
/*-------------end Tabs-------------------*/

function goToTab(){
	var type = window.location.hash.substr(1);
	$('.tabs .tab_links a').each(function(){
		var get_data_tab = $(this).attr('data-tab');
		$(this).attr('id' , get_data_tab);
		$(this).attr('href' , '#'+get_data_tab);
	})
	
	if ($('.tabs .tab_links a').attr('data-tab')==type);
	{
		$('.tabs .tab_links a[data-tab="'+type+'"]').click();
		$('body').scrollTo('#'+type, {duration:'slow'});	
	}
}
/*-------------remove input placeholders on click*/
function ClearPlaceholder(){
	$('input,textarea').focus(function(){
		 $(this).data('placeholder',$(this).attr('placeholder'))
		 $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
		 $(this).attr('placeholder',$(this).data('placeholder'));
	});
}
/*-------------end remove placeholders on click*/


/*-------------remove input placeholders on click*/
function ClearLabel(){
	$('.input input').each(function(){
		if($(this).val()!=""){
			$(this).parent().find('label').addClass('focused');
		}
		else{
			$(this).parent().find('label').removeClass('focused');
		}
	});
	
	$('.textarea textarea').each(function(){
		if($(this).val()!=""){
			$(this).parent().find('label').addClass('focused');
		}
		else{
			$(this).parent().find('label').removeClass('focused');
		}
	});
	
	
	$('.input input').focus(function(){
		$(this).parent().find('label').addClass('focused');
	});
	
	$('.textarea textarea').focus(function(){
			$(this).parent().find('label').addClass('focused');
		
	});

	$('.input input').blur(function(){
		if($(this).val()!=""){
			$(this).parent().find('label').addClass('focused');
		}
		else{
			$(this).parent().find('label').removeClass('focused');
		}
	});
	
	
	$('.textarea textarea').blur(function(){
		if($(this).val()!=""){
			$(this).parent().find('label').addClass('focused');
		}
		else{
			$(this).parent().find('label').removeClass('focused');
		}
	});
	
	$('input.js_time_mask').blur(function(){
		if($(this).val()!="__:__"){
			$(this).parent().find('label').addClass('focused');
		}
		else{
			$(this).parent().find('label').removeClass('focused');
		}
	});
}
/*-------------end remove placeholders on click*/

/*-------------custom input type file*/
function ChooseFile(){
	if($('.js_file_input').val()!=""){
		$('.js_file_value').html($('.js_file_input').val());
		$('.js_remove_file').css('display', 'block');
		$('.file_name_holder').css('display', 'inline-block');
	}
}
/*-------------end custom input type file*/



/*-------------read more content*/
function showMoreContent() {
	
	$('.comments_block_2 .comment_text_block_2 .inner').each(function(){
		if($(this).innerHeight()<="50"){
		$(this).parent().parent().find('.btn_comment_more').css('display','none');
		$(this).parent(),find('.comment_text_block_2').css('height','auto');
		}
	})
	
	$('.js_show_more_comment').click(function(e){
		e.preventDefault();	
		e.stopPropagation();
		if($(this).hasClass('active')){
			$(this).parent().find('.comment_text_block_2').animate({height: "50px"}, 500)
			$(this).removeClass('active');
		}
		else {
			var height = $(this).parent().find('.inner').innerHeight();
			$(this).parent().find('.comment_text_block_2').animate({height: height+"px"}, 500)
			$(this).addClass('active');
		}
		
		
	});
	
}
/*-------------end read more content*/


$( window ).resize(function() {
	AlignPopup();
	for(var i = 0; i < map_instances.length; i++) {
		google.maps.event.trigger(map_instances[i].map, 'resize');
		map_instances[i].map.setCenter(map_instances[i].center);
	}
	
});	




$(window).scroll(function() {
	var scrolled_top = $(window).scrollTop();
	var offset = $('.header').innerHeight()+$('.top_block').innerHeight();
	if(scrolled_top>=offset){
		$('.main_menu_block').addClass('fixed');
		$('.header').css('margin-bottom', '40px');
	}
	else {
		$('.main_menu_block').removeClass('fixed');
		$('.header').css('margin-bottom', '0px');
		}
});


$(window).load( function() {

});


$(document).ready(function(){
	AlignPopup();
	showMoreContent();
	initTabs();
	//goToTab();
	ClearPlaceholder();
	$('.js_file_input').change(function(){
		ChooseFile();						
	})
	ClearLabel();

	$('.js_scroll').click(function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		$('body').scrollTo(href, {duration:'slow'});						  
	})


	$(".js_phone_mask").mask("+7 (999) 999-99-99");
	$(".js_time_mask").mask("99:99");

/*-------------------custom select-------------------*/
	$('.js_select select').styler({
		selectSearch:false
	});
	
	
/*-------------------custom select-------------------*/




/*registration page radio buttons switch*/
    if ($('.js_radio_legal').prop('checked')==true){
        $('.js_form_legal_block').css('display','block');
        $('.js_form_entrepreneur_block').css('display','none');
    }
    if ($('.js_radio_entrepreneur').prop('checked')==true){
        $('.js_form_legal_block').css('display','none');
        $('.js_form_entrepreneur_block').css('display','block');
    }

    $('body').on('change', '.js_radio_legal', function(){
        var isCheked = $(this).prop('checked');
        if(isCheked==true){
            $('.js_form_legal_block').css('display','block').find('select, textarea, input').removeAttr('disabled').trigger('refresh');
            if(!$('.js_form_legal_block').find('.js_fill_delivery_address').prop('checked')) {
                $('.js_form_legal_block').find('.register_delivery_block').find('select, textarea, input').attr('disabled', 'disabled');
            }

            $('.js_form_individ_block').css('display','none').find('select, textarea, input').attr('disabled', 'disabled').trigger('refresh');
            $('.js_form_entrepreneur_block').css('display','none').find('select, textarea, input').attr('disabled', 'disabled').trigger('refresh');

            
        }
        $('.js_select select:visible').styler({
            selectSearch:false
        });

    })
    $('body').on('change', '.js_radio_entrepreneur', function(){
        var isCheked = $(this).prop('checked');
        if(isCheked==true){
            $('.js_form_individ_block').css('display','none').find('select, textarea, input').attr('disabled', 'disabled').trigger('refresh');
            $('.js_form_legal_block').css('display','none').find('select, textarea, input').attr('disabled', 'disabled').trigger('refresh');
            $('.js_form_entrepreneur_block').css('display','block').find('select, textarea, input').removeAttr('disabled').trigger('refresh');

            if(!$('.js_form_entrepreneur_block').find('.js_fill_delivery_address').prop('checked')) {
                $('.js_form_entrepreneur_block').find('.register_delivery_block').find('select, textarea, input').attr('disabled', 'disabled');
            }

           
        }
        $('.js_select select:visible').styler({
            selectSearch:false
        });

    })








/*-----------------------------POPUP-------------------------*/
$('[data-popup]').on('click', function(e){
        e.preventDefault();
		AlignPopup();
		InitPopup($(this));

/*images gallery carousel*/
	if($(this).attr('data-popup')=='js_photo_gallery_popup'){
		startSlide = parseInt($(this).attr('data-current'));
		if(flag){
		$('#photo_carousel').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 141,
			itemMargin: 6,
			asNavFor: '#photo_slider',
			prevText: "", 
			mousewheel: false, 
			startAt: 0,
			nextText: ""
		  });
		  $('#photo_slider').flexslider({
			animation : 'fade',
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			sync: "#photo_carousel",
			startAt: 0,
			prevText: "",     
			nextText: "",
			smoothHeight:false,
			animationSpeed: 300,   
			start: function(slider) {
				AlignPopup();				 
				   flexslider = slider; 
			  }
		  });
		}
		else {
			flexslider.flexAnimate(startSlide);
		}
	}	
	startSlide;
	$('.popup_gallery_slider .flexslider .slides.small_slides > li:eq('+startSlide+')').not('.flex-active-slide').click();
	$(window).resize();
/*end images gallery carousel*/
});

    $('.custom-overlay, .custom-popup .close, .js_close_popup').on('click',function(e){
		e.preventDefault();	
		$('.custom-overlay').delay(200).fadeOut('300');																		  
		$('.custom-popup').fadeOut('300');	
		
		$(this).closest('.custom-popup').find('input[type=text]').val("");
		$(this).closest('.custom-popup').find('input[type=password]').val("");
		$(this).closest('.custom-popup').find('label').css("display","block");
		$(this).closest('.custom-popup').find('textarea').val("");
		$(this).next('.custom-popup').find('input[type=text]').val("");
		$(this).next('.custom-popup').find('input[type=password]').val("");
		$(this).next('.custom-popup').find('label').css("display","block");
		$(this).next('.custom-popup').find('textarea').val("");

    });
/*-----------------------END POPUP----------------------------*/



/*padding from footer*/
var footer_height = $('.footer_holder').height();
$('.header_and_content_holder').css('padding-bottom',footer_height+'px');
/*end padding from footer*/



/*-------------Revealing list click-----------------*/
	$('.js_holder.active').find('.js_block').css('display', 'block');
	$('.js_heading').click(function(e){
		e.preventDefault();
	 	if($(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
			$(this).parent().find('.js_block').slideUp();
		 }
		 else{
			$(this).parent().addClass('active');
			$(this).parent().find('.js_block').slideDown();
		 }
	});	
		
/*-------------end Revealing list click-----------------*/	


/*slider on main page in the top*/
var js_info_slider = new Swiper('.js_info_slider .swiper-container', {
	slidesPerView: '1',
	spaceBetween: 0,
	loop:true,
	nextButton: '.js_info_slider .js_swiper_next',
	prevButton: '.js_info_slider .js_swiper_prev',
	mousewheelControl: false,
	speed:700,
	effect: 'slide',
	autoplay:5000,
	simulateTouch: false
});	
/*end slider on main page in the top*/

/*inputs hide form error on click*/
$('.input').click(function(){
	var parent = $(this);
	$(this).find('.form-error').remove();
	parent.removeClass('has-error');
	$(this).find('input').css('border-color','');
	$(this).find('input').focus();
})
$('.textarea').click(function(){
	var parent = $(this);
	$(this).find('.form-error').remove();
	parent.removeClass('has-error');
	$(this).find('textarea').css('border-color','');
	$(this).find('textarea').focus();
})
$('.custom_select').click(function(){
	var parent = $(this).find('.jq-selectbox');
	$(this).find('.form-error').remove();
	parent.removeClass('has-error');
	$(this).find('select').css('border-color','');
})
/*end inputs hide form error on click*/


/*-------------empty form file input*/
	$('.js_remove_file').click(function(e){
		 e.preventDefault();		
		 $(this).parent().parent().find('.js_file_value').empty();	
		 $(this).parent().parent().find('.js_file_input').val("");	
		 $('.js_remove_file').css('display', 'none');
	});	
/*-------------end empty form file input*/


/*datepicker*/
	var dateToday = new Date();
	var dates = $(".datepicker").datepicker({
		defaultDate: "+1w",
		numberOfMonths: 1,
		 minDate: dateToday,
		onSelect: function(selectedDate) {
			var option = this.id == "from" ? "minDate" : "maxDate",
				instance = $(this).data("datepicker"),
				date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
			dates.not(this).datepicker("option", option, date);
			ClearLabel();
		}  
	});
	$.datepicker.setDefaults($.datepicker.regional['ru']);
/*end datepicker*/

/*show hide top search block*/
	$('.js_icon_site_search').click(function(){
		$(this).closest('.top_search_block').addClass('active');
		$(this).closest('.top_search_block').find('input[type=text]').focus();
		return false;
	})
	$('body').click(function(e){
		$('.top_search_block').removeClass('active');	
	})
	$('.top_search_block input[type=text]').click(function(e){
		return false;
	})
	$('.top_search_block input[type=submit]').click(function(e){
		e.stopPropagation();
	})
/*end show hide top search block*/


/*small slider on item page*/
	$('.js_small_slider').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemMargin: 0,
		prevText: "", 
		mousewheel: true, 
		startAt: 0,
		nextText: "",
		start : function(slider) {
			flexslider = slider;
			 var quantity_html = '<div class="quantity"><span class="js_gallery_current"> ' + (slider.currentSlide + 1) + '</span> из ' + slider.slides.length+'</div>';
			 $('.photo_amount').append(quantity_html);
		},
		after : function(slider) {
			$('.js_gallery_current').html(slider.currentSlide + 1);
		}
	  });
	$(window).resize();
/*end small slider on item page*/


/*init fancybox*/
	if($('.js_fancybox').length>0){
	$('.js_fancybox').fancybox({
	  helpers: {
		overlay: {
		  locked: false
		}
	  }
	});
	}
/*end init fancybox*/

$('.js_address_change1 select').change(function(){
			var $block = $('.address_change_block1'), index = $('.js_address_change1 option:selected').val();
			$block.find('.block').hide().eq(index).show();
	});
	var index = $('.js_address_change1 option:selected').val();
	$('.address_change_block1 .block').eq(index).show();

$('.js_address_change2 select').change(function(){
		var $block2 = $('.address_change_block2'), index2 = $('.js_address_change2 option:selected').val();
		$block2.find('.block').hide().eq(index2).show();
});
var index2 = $('.js_address_change2 option:selected').val();
$('.address_change_block2 .block').eq(index2).show();

/*-------------------validation-------------------*/
	$.validate({
	  form : '.js_validation_has_message',
	     modules : 'security',
		lang : 'ru',
		onSuccess : function() {
			$('.js_order_call_popup').fadeOut(300, function(){
					$('.js_message_popup').fadeIn();	
			});
			return false;
        }
	});
	
	$.validate({
	   form : '.js_validation',
	   modules : 'security',
		lang : 'ru',
		onSuccess : function() {
        }
	});
	
/*-------------------validation-------------------*/	
});