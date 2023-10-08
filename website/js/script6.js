//SWOT
$(document).ready(function(){
    $("#built1").click(function(){
    
    
    if($('#built1Content').is(':visible'))
{
    $("#built1Content").slideToggle("slow");
    $("#myVideo1").trigger('pause');

}else{
    $("#built1Content").slideToggle("slow");
    $("#myVideo1").trigger('play');

}

    });

//GPM
$("#built2").click(function(){
    
    
    if($('#built2Content').is(':visible'))
{
    $("#built2Content").slideToggle("slow");
    $("#myVideo2").trigger('pause');

}else{
    $("#built2Content").slideToggle("slow");
    $("#myVideo2").trigger('play');

}

    });

//GRACE
$("#built3").click(function(){
    
    
    if($('#built3Content').is(':visible'))
{
    $("#built3Content").slideToggle("slow");
    $("#myVideo3").trigger('pause');

}else{
    $("#built3Content").slideToggle("slow");
    $("#myVideo3").trigger('play');

}

    });
});





