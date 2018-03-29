/* ------------------- Javascript Auxiliaries -------------------*/

//Main Slider 
$(document).ready(function() {
    $("#owl-mainslider").owlCarousel({
    
    navigation : false, // Show next and prev buttons
    pagination: false,
    slideSpeed : 700,
	  autoPlay: 7000,
    paginationSpeed : 400,
    singleItem:true

    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
    });
});

//Marketing Slider 
$(document).ready(function() {
    var owl = $("#marketing-slider");
	     
    owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 2],
    [600, 3],
    [768, 4],
    [1200, 5]
    ],
    navigation : true,
	autoPlay: 3500
     
    });     
});
