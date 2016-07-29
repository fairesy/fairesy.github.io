$(document).ready(function(){
    bindNavEvents();
    onClickYearButton();
    onClickMenu();
});

function bindNavEvents(){
    $("nav .close-icon").on("click", function(){
        $("nav").animate({
            "height" : "toggle"
        }, 150, function(){
            $("nav").hide();
            $(".menu-icon-wrapper").show(); 
        });
    });
    $(".menu-icon-wrapper img").on("click", function(){
        $("nav").animate({
            "height" : "toggle"
        }, 150, function(){
            $("nav").show();
            $(".menu-icon-wrapper").hide();
        });
    });
}

function onClickYearButton(){
    $("#seven-button").click(function(){
        $("#seven").show();
        $("#sixteen").hide();
        $("#sixteen-button span").removeClass("selected");
        $("#seven-button span").addClass("selected");
    });
    
    $("#sixteen-button").click(function(){
        $("#sixteen").show();
        $("#seven").hide();
        $("#sixteen-button span").addClass("selected");
        $("#seven-button span").removeClass("selected");
    });
//    
//    var itaewon_07 = "https://junjimin0220.carto.com/viz/fe9ebc8c-5491-11e6-9719-0e98b61680bf/embed_map";
//    var itaewon_16 = "https://junjimin0220.carto.com/viz/247b8be6-53f8-11e6-aa6d-0e98b61680bf/embed_map";
//    
//    var mangwon_07 = "https://junjimin0220.carto.com/viz/89a6f366-53f8-11e6-b5d0-0e8c56e2ffdb/embed_map";
//    var mangwon_16 = "https://junjimin0220.carto.com/viz/c00d2b0a-53f8-11e6-b983-0e8c56e2ffdb/embed_map";
//    
//    var sinsa_07 = "https://junjimin0220.carto.com/viz/d23d957c-53ed-11e6-a51a-0e8c56e2ffdb/embed_map";
//    var sinsa_16 = "https://junjimin0220.carto.com/viz/0aadc21a-53da-11e6-986b-0e98b61680bf/embed_map";
//    
//    var yeonnam_07 = "https://junjimin0220.carto.com/viz/6841815c-53d8-11e6-bafb-0e8c56e2ffdb/embed_map";
//    var yeonnam_16 = "https://junjimin0220.carto.com/viz/8e3c373c-53ea-11e6-aa1b-0e98b61680bf/embed_map";
//    
//    var samchung_07 = "https://junjimin0220.carto.com/viz/741c4e4c-548e-11e6-9469-0e98b61680bf/embed_map";
//    var samchung_16 = "https://junjimin0220.carto.com/viz/f8b12eb6-53f8-11e6-9e0e-0e8c56e2ffdb/embed_map";
}

function onClickMenu(){
    $("nav .title-nav").click(function(){
        $("nav .title-nav").addClass("selected");
        $("nav .detail-nav").removeClass("selected");
        $("main").animate({
            "margin-left" : "0px"
        });
//        $("#title-section").show();
//        $("#detail-section").hide();
    });
    $("nav .detail-nav").click(function(){
        $("nav .detail-nav").addClass("selected");
        $("nav .title-nav").removeClass("selected");
        $("main").animate({
            "margin-left" : "-100%"
        });
//        $("#title-section").hide();
//        $("#detail-section").show();
    });
}