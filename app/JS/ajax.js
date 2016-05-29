//erstellt durch Silvio Müller 28.05
$(document).ready(function() {
   var q = 0;
   var w = 0; //Testen wie viel mal falsch
   var f= document.forms[0];

    $("#test1").click(function() {

        if ($('.field1').val() == '3/4'){
        $(".alert1").load("right.txt", function(){ 
        });
         $('.field2').focus();
         
     }else{
           $(".alert1").load("wrong.txt", function(){ 
        });
      $('.field1').focus();
        q++;
        
        if (q>3){var $newItem = $('<p class="hint">Der Tango hat ein 3/4 Takt</p>');
        $('.alert1').after($newItem);
        q=-1000000;}
  }}); 
    $("#test2").click(function() {

        if ($('.field2').val() == 1910){
        $(".alert2").load("right.txt", function(){ 
        });
         
     }else{
           $(".alert2").load("wrong.txt", function(){ 
        });
      $('.field2').focus();}
      w++;
        
        if (w>3){var $newItem = $('<p class="hint">Der Tango entstand um 1910</p>');
        $('.alert2').after($newItem);
        w=-10000;}
   }); 
}); 
