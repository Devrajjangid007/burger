$(function(){
    $("button").click(function(){
        $("ul").slideToggle();
    });
})


$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
});

