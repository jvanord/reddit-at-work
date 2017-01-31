var at_work = true;
$.each($(".nsfw-stamp"), function() {
	$(this).closest('.thing').addClass('at-work').toggle(!at_work);
});
$('body').append($('<div/>').attr('id', 'reddit-at-work-button').attr('style', 'position:fixed;bottom:5px;right:5px;padding:5px 10px;border-radius:10px;background-color:#ffd;font-weight:bold;').append(	
	$('<a/>').text('At-Work').attr('href', '#reddit-at-work').attr('title', 'Click to allow NSFW').click(function(e){
		e.preventDefault();
		at_work = !at_work;
		$('#reddit-at-work-button>a')
			.text(at_work ? 'At-Work' : 'Not At-Work')
			.attr('title', at_work ? 'Click to allow NSFW' : 'Click to hide NSFW');
		$('.at-work').slideToggle(!at_work);
	})));