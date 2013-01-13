/*
*
* Copyright 2013 Leonid Zolotarev
* Released under the BSD license.
* http://leoz.net/license
*
*/

$(document).ready(function() { 
	$('.social').hover(function() {
		// Mouse over
		$(this).stop().fadeTo(500, 1).siblings().stop().fadeTo(500, 0.2);		
	}, function() {
		// Mouse out
		$(this).stop().fadeTo(500, 1).siblings().stop().fadeTo(500, 1);	
	});
});