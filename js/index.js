// $(document).ready(function(){
//   $("i.fa-bars").click(function showNav(){
//     $("nav").show(1000);
//     $("i.fa-times").show(1000);
//     $("i.fa-bars").hide();

//   });
//   $("i.fa-times").click(function hideNav(){
//     $("i.fa-bars").show(1000);
//     $("nav").hide(1000);
//     $("i.fa-times").hide(1000);

//   });
// });

// $("#slideshow > section:gt(0)").hide();

// setInterval(function() {
//   $('#slideshow > section:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('#slideshow');
// },  3000);

$next = 1;			// fixed, please do not modfy;
$current = 0;		// fixed, please do not modfy;
$interval = 2000;	// You can set single picture show time;
$fadeTime = 800;	// You can set fadeing-transition time;
$imgNum = 5;		// How many pictures do you have

$(document).ready(function(){
	//NOTE : Div Wrapper should with css: relative;
	//NOTE : img should with css: absolute;
	//NOTE : img Width & Height can change by you;
	$('.fadeImg').css('position','relative');
	$('.fadeImg img').css({'position':'absolute','height':'inherit'});

	//nextFadeIn();
});

function nextFadeIn(){
	//make image fade in and fade out at one time, without splash vsual;
	$('.fadeImg img').eq($current).delay($interval).fadeOut($fadeTime)
	.end().eq($next).delay($interval).hide().fadeIn($fadeTime, nextFadeIn);
		
	// if You have 5 images, then (eq) range is 0~4 
	// so we should reset to 0 when value > 4; 
	if($next < $imgNum-1){ $next++; } else { $next = 0;}
	if($current < $imgNum-1){ $current++; } else { $current =0; }
};