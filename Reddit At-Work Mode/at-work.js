var RedditAtWork = (function($){
	var at_work = true;
	var $button = $('<div/>')
		.attr('id', 'reddit-at-work-button')
		.attr('style', 'position:fixed;top:21px;right:5px;z-index:100;padding:10px;border-radius:10px;cursor:pointer;');
	function toggleElements(){
		if (at_work){
			$('.at-work').hide();
			$button.css('background-color', '#393');
			$button.attr('title', 'You are in At-Work mode!');
		}
		else{
			$('.at-work').slideDown();
			$button.css('background-color', '#933');
			$button.attr('title', 'You have left At-Work mode!');
		}
	}
	function onButtonClick(e){
		e.preventDefault();
		at_work = !at_work;
		toggleElements();
	}
	return {
		init: function(){ 
			$.each($(".nsfw-stamp"), function(){ $(this).closest('.thing').addClass('at-work'); });
			at_work = true;
			toggleElements();
			$button.click(onButtonClick);
			$('body').append($button);
		}
	};
})(jQuery);
RedditAtWork.init();