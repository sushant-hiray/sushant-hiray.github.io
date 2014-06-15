var pathArray = window.location.pathname.split( '/' );
var postId =  pathArray[3];
console.log("postid is " + postId);
$(function()
{
// initialize kudos
$("figure.kudoable").kudoable();

// check to see if user has already kudoed
if($.cookie(postId) == 'true') {
	// make kudo already kudod
	$("figure.kudoable").removeClass("animate").addClass("complete");

	// your server would take care of the proper kudos count, but because this is a
	// static page, we need to set it here so it doesn't become -1 when you remove
	// the kudos after a reload
	$(".num").html(1);
}	

// when kudoing
$("figure.kudo").bind("kudo:active", function(e)
{
	console.log("kudoing active");
});

// when not kudoing
$("figure.kudo").bind("kudo:inactive", function(e)
{
	console.log("kudoing inactive");
});

// after kudo'd
$("figure.kudo").bind("kudo:added", function(e)
{
	var element = $(this);
	// ajax'y stuff or whatever you want
	console.log("Kodo'd:", element.data('id'), ":)");

	// set cookie so user cannot kudo again for 7 days
	$.cookie(postId, 'true', { expires: 7 });
	
	x.transaction(function(current_value) {
	    if(current_value === null) {
		console.log("creating the data");
		return 1;
	    }
	    else {
		console.log("updated value to " + (current_val + 1));
		return current_value + 1;
	    }
    });
});

// after removing a kudo
$("figure.kudo").bind("kudo:removed", function(e)
{
	var element = $(this);
	// ajax'y stuff or whatever you want
	console.log("Un-Kudo'd:", element.data('id'), ":(");
	
	x.transaction(function(current_value) {
	    console.log("reducing the data to " + (current_value - 1));
	    return current_value - 1;
    });
	

	// remove cookie
	$.removeCookie(postId);
});
});	

var x = new Firebase('https://sweltering-fire-7891.firebaseio.com/' + postId);
console.log("x is " + x);

x.on('value', function f(s) {
  console.log("x on value is called" + s.val());
  $('.num').text(0 + s.val());
});
