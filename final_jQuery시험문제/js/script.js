    var over = function(){
        $(this).css('background',"#f00").find('a').css('color','#ff0');
    };

    var out = function(){
        $(this).css('background',"transparent").find('a').css('color','#000');
    };
    var scrollEvent=function(){
        var idx = $(this).index();
        var sot = $('.content section').eq(idx).offset().top;
        $('html,body').stop().animate({
            scrollTop:sot
        },1000)
        return false;
    }
    var idx;


    function movement(go,stop,i){

        $('.slidebanner li').eq(i).addClass('on').find('img').css({
            'left':go,
            'display':'block'
        }).stop().animate({
            'left':stop
        }).parent().siblings().removeClass();
        if(idx==$('.slidebanner ul li').length){
            idx = 0
            movement('100%',0,idx)
        }else if (idx<0) {
            idx = $('.slidebanner ul li').length-1
            movement('-100%',0,idx)

        }
    }
$(function(){
    idx = Math.floor($('.slidebanner ul li').length * Math.random());
    console.log(idx);

    $('nav li')
    .hover(over,out)
    .click(scrollEvent)
    $('.slidebanner li').eq(idx).addClass('on').find('img').css({
        'display':'block'
    })
    $('.slidebanner .next').click(function(){
        movement(0,'-100%',idx)
        idx++
        movement('100%',0,idx)
    })
    $('.slidebanner .prev').click(function(){
        movement(0,'100%',idx)
        idx--
        movement('-100%',0,idx)
    })
    $('.slidebanner ul li a').click(function(){
        var num = $('.slidebanner ul li.on').index()
        idx = $(this).parent().index()
        if(num<idx){
            movement(0,'-100%',num)
            movement('100%',0,idx)
        }else if (num>idx) {
            movement(0,'100%',num)
            movement('-100%',0,idx)
        }
        return false;
    })
    var inters = setInterval(function(){
        $('.slidebanner .next').click();
    },10 00);
    $('.slidebanner').mouseenter(function(){
        clearInterval(inters);
    }).mouseleave(function(){
        inters = setInterval(function(){
            $('.slidebanner .next').click();
        },1000);
    })
    var fidx = 0;
    $('.fadebanner ul li a').click(function(){
        fidx = $(this).parent().index();
        $('.fadebanner ul li a').eq(fidx).parent().addClass('on').children('img').fadeIn().parent().siblings().removeClass().children('img').fadeOut()
        return false;
    })

    var finter = setInterval(function(){

        if (fidx==$('.fadebanner ul li').length) {
            fidx=0
            $('.fadebanner ul li').eq(fidx).children('a').click()
        }else {
            $('.fadebanner ul li').eq(fidx).children('a').click()
        }
        fidx++

    },4800)
    $('.fadebanner').mouseenter(function(){
        clearInterval(finter);
    }).mouseleave(function(){
        finter = setInterval(function(){

            if (fidx==$('.fadebanner ul li').length) {
                fidx=0
                $('.fadebanner ul li').eq(fidx).children('a').click()
            }else {
                $('.fadebanner ul li').eq(fidx).children('a').click()
            }
            fidx++

        },4800)
    })

    $('.movie-view li').click(function(){
        var imgur1 = ['Uv554B7YHk4', '4z4sN05-xIs', '1ELGunbuvqc', 'uBezVQweeUE', 'q6f-LLM1H6U']
        var src1 = 'https://www.youtube.com/embed/'
        var midx = $(this).index()
        $('.movie-view .view iframe').attr('src',src1+imgur1[midx])
        $('.movie-view li').eq(midx).fadeTo(1000,0.5).siblings().fadeTo(1000,1)
        return false;
    })

    $(window).scroll(function(){
        var he = $(this).scrollTop()
        $('.wing').stop().animate({
            top:he
        },1000)
    })

    $('.btnevent1').click(function(){
        bl();
        $('.blaind').fadeTo(1000,0.5)
        var tg='.'+$(this).attr('id')
        var h=  $(tg).height();
        var w=  $(tg).width();
        var wh= $(window).height();
        console.log(tg+h+w+w+wh)
        $(tg).css({
            'display':'block',
            'left':'50%',
            'top':$(window).scrollTop()-(wh/2)-(h/2),
            'opacity':0,
            'marginTop':(wh/2)-(h/2)

        }).stop().animate({
            'top':$(window).scrollTop(),
            'opacity':1

        },1000)

    })

    var close = function() {
        $('.pop').stop().animate({
            'top':$(window).scrollTop(),
            'opacity':0

        },1000);
        $('.blaind').fadeOut(function() {
            $('.blaind').remove();
        })
    }

    $('body').on('click', '.blaind', close);

    $('.close').click(close);
    function bl() {
        $('body').prepend('<div class="blaind"></div>')

    }

})
