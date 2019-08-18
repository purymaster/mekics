$(function(){
	
	/////////////////////
	//브라우저 업데이트//
	/////////////////////
	if (navigator.userAgent.match(/MSIE 7/)) {
		$('.ie7').show();
    };

	///////////////////
	//스킵 네비게이션//
	///////////////////
	$('.skip a').click(function(){
		$('#content').attr('tabindex', '0').focus();
		return false;
	});
	
	////////////
	//GNB 제어//
	////////////
	$('.gnb > li').bind('mouseover focusin', function(){
		$(".gnb_bg").show();
		$(this).addClass('on').siblings().removeClass('on');
	}).mouseout(function(){
		$(".gnb_bg").hide();
		$('.gnb > li').removeClass('on');
	});
	
	$(".gnb > li > ul > li > a").last().focusout(function(){
		$(".gnb_bg").hide();
		$('.gnb > li').removeClass('on');
	});
	$("h1").focusin(function(){
		$(".gnb_bg").hide();
		$('.gnb > li').removeClass('on');
	});
	
	////////////
	//LNB 제어//
	////////////
	$('.lnb > ul > li > ul > li.slide').bind('mouseover focusin', function(){
		$('.lnb > ul > li > ul > li').removeClass('show');
		$(this).addClass('show');
	}).mouseout(function(){
		$(this).removeClass('show');
	});
	
	$('.lnb > ul > li > ul > li > ul > li:last-child > ul > li:last-child > a').focusout(function(){
		$(this).parents('.slide').removeClass('show');
	});			
	
	/////////////////
	//상단메뉴 제어//
	/////////////////
	$(".top_menu > a.menu").bind('click', function(){
		if($(this).next("ul").css("display") == "none"){
			$(".top_menu > a.menu + ul").hide();
			$(this).next("ul").show();
			return false;
		} else {
			$(".top_menu > a.menu + ul").hide();
			return false;
		};
	});
	$(".top_menu > a.menu + ul > li:last-child > a").focusout(function(){
		$(this).parents("ul").hide();
	});
	$(".top_menu > a.map").bind('click focusin', function(){
		$(".sitemap").show();
	})
	$(".sitemap .close").bind('click focusin', function(){
		$(".sitemap").hide();
	});
	$(".top_menu > a.menu + ul > li > a").click(function(){
		$(".top_menu > a.menu + ul").hide();
	});
	
	////////////////////////
	//다운로드 게시판 제어//
	////////////////////////
	$("table.common.download .down > a").bind('click focusin', function(){
		$("table.common.download .down > div").hide();
		$(this).next("div").show();
	});
	$("table.common.download .down > div .close").bind('click focusout', function(){
		$(this).parent("div").hide();
	});
	
	////////////
	//QNA 제어//
	////////////
	$('dl.qna dd').hide();
	$('dl.qna > dt > a').click(function(){
		$('dl.qna > dt > a').removeClass('on');
		if($(this).parent().next().css('display')=='none'){
			$('dl.qna dd').hide();
			$(this).parent().next('dd').show();
			$(this).parent().children('a').addClass('on');
		} else if($(this).parent().next().css('display')=='block'){
			$('dl.qna dd').hide();
			$(this).parent().children('a').removeClass('on');
		};
	});
	
	/////////////////////////
	//제품 정보 탭메뉴 제어//
	/////////////////////////
	$('.text_prod').hide();
	$('.fnb').show();
	$('.product .tab_prod .tab li:first-child').addClass('on');
	
	function prod_tab(menu){
		$('.text_prod').hide();
		$('.'+ menu +'').show();
	};
	
	var prod_tabM = $('.product .tab_prod .tab li a');
	prod_tabM.click(function(){
		$('.product .tab_prod .tab li').removeClass('on');
		$(this).parents('li').addClass('on');
		var prod_val = $(this).attr('class');
		prod_tab(prod_val);
		return false;
	});
	prod_tabM.focusin(function(){
		$('.product .tab_prod .tab li').removeClass('on');
		$(this).parents('li').addClass('on');
		var prod_val = $(this).attr('class');
		prod_tab(prod_val);
		return false;
	});
});