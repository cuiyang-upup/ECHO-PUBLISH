$(document).ready(function () {
    var $table = $(".table>ul>li");
    var $tableimg = $(".table-img>div");

    $table.on("click",function () {
        var i = $(this).index();
        $table.eq( i ).addClass("active").siblings().removeClass("active");

        $tableimg.eq( i ).addClass("active1").siblings().removeClass("active1");
    })

    var $i = $(".i");
    var $lineheight = $(".nav>ul>li")

    // $(window).on("scroll",function () {
    //     if ( $(window).scrollTop() > $(window).height()){
    //         $i.animate({height:"5rem"},1800)
    //         $lineheight.animate({lineHeight:"5rem"},1800)}
    //         // $i.css("height","7rem");
    //
    //      // $lineheight.css("line-height","7rem");}
    //     else{
    //
    //         // $i.css("height","5rem");
    //         $i.animate({height:"7rem"},1800)
    //         $lineheight.animate({lineHeight:"7rem"},1800)// $lineheight.css("line-height","5rem")
    // };
    // })




    // function go(try ,try1) {
    //     var $try = $("#try");
    //     var $but = $("#try1");
    //     var s = $try.offset().top;
    //     $but.on("click",function () {
    //         $('html,body').animate({
    //             scrollTop:s
    //         },800)
    //     })
    // }
    go("#try","#try1");
    go("#main","#main1");
    go("#tell","#tell1");
    go("#footer","#footer1");
    function go(but ,but1) {
        var $but = $(but);
        var $but1 = $(but1);
        var v = $but.offset().top;
        $but1.on("click",function () {
            $('html,body').animate({
                scrollTop:v-100
            },800)
        })
    }





});

