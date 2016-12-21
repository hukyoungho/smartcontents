$(function(){

    $('header nav li').mouseenter(function(){
        $(this).css('background','#f00').children('a').css('color','#ff0');
    })
    $('header nav li').mouseleave(function(){
        $(this).css('background','#ccc').children('a').css('color','#000');
    })
    $('header nav li').click(function(){
        var idx = $(this).index();
        var move = $('.content section').eq(idx).offset().top;
        $('body,html').animate({
            scrollTop:move
        })
        console.log(idx)
        return false;

    })
    var idx = 0
    var inters = setInterval(function(){
        $('.next').click();
    },1000);
    $('.slidebanner').mouseenter(function(){
        clearInterval(inters)
    }).mouseleave(function(){
        inters = setInterval(function(){
            $('.next').click();
        },1000);
    })
    $('.slidebanner .next').click(function(){

        $('.slidebanner li')
        .eq(idx)
        .addClass('on')
        .find('img')
        .stop()
        .animate({
            left:'-100%'
        })
        .parent()
        .removeClass()
        .next()
        .addClass('on')
        .find('img')
        .css({
            left:'100%',
            display:'block'
        })
        .stop()
        .animate({
            left:0
        })
        idx++
        if(idx==$('.slidebanner li').length){
            idx=0
            $('.slidebanner li')
            .eq(idx)
            .addClass('on')
            .find('img')
            .css({
                left:'100%'
            })
            .stop()
            .animate({
                left:0
            })
        }
    })
    $('.slidebanner .prev').click(function(){

        $('.slidebanner li')
        .eq(idx)
        .addClass('on')
        .find('img')
        .stop()
        .animate({
            left:'100%'
        })
        .parent()
        .removeClass()
        .prev()
        .addClass('on')
        .find('img')
        .css({
            left:'-100%',
            display:'block'
        })
        .stop()
        .animate({
            left:0
        })
        idx--
        if(idx<0){
            idx = $('.slidebanner li').length -1
            $('.slidebanner li')
            .eq(idx)
            .addClass('on')
            .find('img')
            .css({
                display:'block',
                left:'-100%'
            })
            .stop()
            .animate({
                left:0
            })
        }
    })


    var fidx;
    $('.fadebanner li a').click(function(){

         fidx = $(this).parent().index();
         $('.fadebanner li.on').removeClass().find('img').fadeOut();
         $('.fadebanner li').eq(fidx).addClass('on').find('img').fadeIn();

        return false

    })

})
