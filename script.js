$(document).ready(function(){
    $('#body').hide();
    $('#hello').hide();
    $(window).load(function(){
    $('#body').fadeIn(function(){
        $("#brfix").hide();
        $('#hello').fadeIn();
    });
    });
    $('#git').click(function(){
        window.open("https://github.com/GregCode");
    });
    $('#cont').click(function(){
        window.location="mailto:greg@gregcode.net";
    });
    $('#j').click(function(){
       window.location="java.html";
    });
    $('#ard').click(function(){
        window.location="arduino.html";
    });
    $('#cs').click(function(){
        window.location="cs.html";
    });
    $('#py').click(function(){
        window.location="python.html";
    });
    $('#html5').click(function(){
        window.location="html5.html";
    });
    $('#home').click(function(){
        window.location="index.html";
    });
    
});