//전체 체크
$(document).on('change', '.label_control input[type="checkbox"]', function () {
	if($(this).closest('label').hasClass('check_all') ){
		if ($(this).is(":checked")) {
			$(this).closest('.label_control').find('input[type="checkbox"]').prop("checked", true);
		} else {
			$(this).closest('.label_control').find('input[type="checkbox"]').prop("checked", false);
		}
	}else{
		if (!$(this).is(":checked")) {
			$(this).closest('.label_control').find('.check_all input[type="checkbox"]').prop("checked", false);
		}
	}
});

//슬라이더 리로드
function sliderRe(){
	$('.slider').slick('refresh');
}

//레이어팝업 */
function layerShow(thisClass){
    //$('.contLayer').hide();
    $('.'+thisClass).fadeIn();
	
	if($('.'+thisClass).hasClass('fixed_layer')){
		$('html,body').css('overflow-y' , 'hidden');
	}
}
function layerHide(thisClass){
    $('.'+thisClass).fadeOut(function(){
		if($('.layer_form.fixed_layer:visible').length == 0 ){
			$('html,body').css('overflow-y' , 'auto');
		}
	});
	
	
}

/*메뉴*/
$('.menu_toggle').click(function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		$('html').css('overflow-y', 'visible');
		$('.hd_menu').animate({right: "-100%",opacity:'0'}, {
			duration: 500}
		);
		$('.hd_menu').show();
		$('#to_top').fadeIn();
		$('.menu_bg').fadeOut();
	}else{
		$(this).addClass('active');
		$('html').css('overflow-y', 'hidden');
		$('.hd_menu').show();
		$('.hd_menu').animate({right: "0",opacity:"1"}, {
			duration: 500}
		);
		$('#to_top').fadeOut();
		$('.menu_bg').fadeIn();
	}
});

//스크롤 디자인
function designScroll(){
	jQuery(document).ready(function(){
		jQuery('.design_scroll').scrollbar();
	});
}
if ($('div').hasClass('design_scroll')) {
	designScroll();
}
if ($('tbody').hasClass('design_scroll')) {
	designScroll();
}