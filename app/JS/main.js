var q = 0;
var c = 0;
	c=(Cookies.get('stylsheet'));
	console.log(c);
	if(c==1){
		$('link[href="css/styles.css"]').attr({href:'css/alternate.css'});
	};

$(document).ready(function() {




	$('#normal').click(function (){
   $('link[href="css/alternate.css"]').attr({href:'css/styles.css'});
   q=0;
   Cookies.set('stylsheet', q);
   c=(Cookies.get('stylsheet'));
	console.log(c);
   
});

$('#inverted').click(function (){
   $('link[href="css/styles.css"]').attr({href:'css/alternate.css'});
   q=1;
   Cookies.set('stylsheet', q);
   c=(Cookies.get('stylsheet'));
	console.log(c);

});
	
	
	


})  