$(document).ready(function(){
    var mainDescription = "<strong style='font-family: Pacifico'>Tienda.com</strong> is one of the "+
    "websites thats interested in giving all the users the best offers they can get"+
    "to buy things they realy want without any worry and more than that you can "+
    "<strong>Sell</strong> all things you don't need any more.";

    var booksDescription = "Find any book you want so easy with filters and search bar that is smart enough"+
                " to find the book you are looking for or just tell us the type of books you want and "+
                "we well help.";

    var phoneDescription = "Find Iphones, Samsung phones, Huawei and more phones with realy speacial offers "+
                           "or just find the best backcovers and accessories that makes you mobile phone looks better";

    var backpackDescription = "Do you thing it's hard to pack your things and carry them with your every where? \n"+
                              "We solve this problem for you, just find the backpack thats look special, bueatifull and comfortable"+
                              " to pack your things and remove your worry about needing something you left at the house";
       
    var accessoriesDescription = "Are you looking for new accessories and jewelries to wear ? \n"+
                                 " Look up here and find the best necklaces, watches and rings and more ..";

    var sweaterDescription = "It's time to add new collection of sweaters, t-shirts and more to your closet, Check these offers for more ...";

    var makeupDescription = "Come on !! you need these stuff to be a modern leader in road of makeups and fashion, check it out here ";
    //$('p#dynamic-text').html(mainDescription);
    resetDynamicText(mainDescription);

    // change text on hover ....
    $("div#books").on('mouseover', function(){
        $("body").css("background-image", "url('/images/books.jpeg')");
        $("body").css("background-size", "cover");
        $("body").css("background-repeat", "no-repeat");
        $("div#descripe-idea").css("background-color", "rgba(0,0,0, 0.6)");
        $('p#dynamic-text').text(booksDescription);
    });
    $("div#books").on('mouseout', function(){
        resetDynamicText(mainDescription);
    });  

    $("div#phone").on('mouseover', function(){
        $("body").css("background-image", "url('/images/mobile.jpeg')");
        $("body").css("background-size", "cover");
        $("body").css("background-repeat", "no-repeat");
        $("div#descripe-idea").css("background-color", "rgba(0,0,0, 0.6)");
        $('p#dynamic-text').text(phoneDescription);
    });
    $("div#phone").on('mouseout', function(){
        resetDynamicText(mainDescription);
    });    

    $("div#backpack").on('mouseover', function(){
        $("body").css("background-image", "url('/images/backpack.jpeg')");
        $("body").css("background-size", "cover");
        $("body").css("background-repeat", "no-repeat");
        $("div#descripe-idea").css("background-color", "rgba(0,0,0, 0.6)");
        $('p#dynamic-text').text(backpackDescription);
    });
    $("div#backpack").on('mouseout', function(){
        resetDynamicText(mainDescription);
    });  
    $("div#necklace").on('mouseover', function(){
        $("body").css("background-image", "url('/images/accessories.jpeg')");
        $("body").css("background-size", "cover");
        $("body").css("background-repeat", "no-repeat");
        $("div#descripe-idea").css("background-color", "rgba(0,0,0, 0.6)");
        $('p#dynamic-text').text(accessoriesDescription);
    });
    $("div#necklace").on('mouseout', function(){
        resetDynamicText(mainDescription);
    });  
    $("div#sweater").on('mouseover', function(){
        $("body").css("background-image", "url('/images/sweater.jpeg')");
        $("body").css("background-size", "cover");
        $("body").css("background-repeat", "no-repeat");
        $("div#descripe-idea").css("background-color", "rgba(0,0,0, 0.6)");
        $('p#dynamic-text').text(sweaterDescription);
    });
    $("div#sweater").on('mouseout', function(){
        resetDynamicText(mainDescription);
    });  
    $("div#cosmetics").on('mouseover', function(){
        $("body").css("background-image", "url('/images/makeup.jpeg')");
        $("body").css("background-size", "cover");
        $("body").css("background-repeat", "no-repeat");
        $("div#descripe-idea").css("background-color", "rgba(0,0,0, 0.6)");
        $('p#dynamic-text').text(makeupDescription);
    });
    $("div#cosmetics").on('mouseout', function(){
        resetDynamicText(mainDescription);
    });  
});

function resetDynamicText(text){
    //$("body").css("background-color", "rgba(37, 37, 37, 0.706)");
    $("body").css("background-image", "url('/images/bg.jpeg')");
    $('p#dynamic-text').html(text);
}