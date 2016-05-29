$(document).ready(function() {
	$('form').submit(function () {

    
    var name = $.trim($('#txtSurname').val());
    var email = $.trim($('#txtEmail').val());
    var phone = $.trim($('#txtPhone').val());
    var text = $.trim($('#text').val());

    
    if (name  === '') {
        alert('Bitte geben Sie ihren Namen ein');
        $('#txtSurname').focus();
        return false;
    }
     if (email  === ''|| email.length<7||email.indexOf('.',0)==-1) {
        alert('Bitte geben Sie eine gültige E-Mail an');
        $('#txtEmail').focus();
        return false;
    }
     if (phone  === ''|| phone.match(/^\d+$/)) {
        alert('Bitte geben Sie ihre Telefonnummer an');
        $('#txtPhone').focus();
        return false;
    }
     if (text  === '') {
        alert('Bitte hinterlassen Sie uns eine Nachricht ');
        $('#text').focus();
        return false;
    }else{
    	alert('Danke für Ihre Mitteilung');
    	return false; //Da kein keine Serverseitige verarbeitung existiert.
    	
    }
});



})