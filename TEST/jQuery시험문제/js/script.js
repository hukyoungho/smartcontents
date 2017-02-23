var navEvent = {
    mouse:function(){
        var over = function(){
            $(this).css('background','#f00').find('a').css('color','#ff0')
        }
        var out = function(){
            $(this).css('background','#ccc').find('a').css('color','#000')
        }
        var scrollEvent = function(){
            var idx = $(this).index()
            var seh = $('.content section').eq(idx).offset().top;
            $('html,body').stop().animate({
                scrollTop:seh
            },1000);
            return false;
        }
        $('nav li').on({
            mouseenter:over,
            mouseleave:out,
            click:scrollEvent
        })
    }
}
var idx = 0;
function movement(start, end ,i){
    $('.slidebanner li').eq(i).addClass('on').find('img').css({
        'left':start,
        'display':'block'
    }).stop().animate({
        'left':end
    }).parent().siblings().removeClass();

    if(idx == $('.slidebanner li').length){
        idx = 0
        movement('100%',0,idx)
    }else if(idx<0){
        idx= $('.slidebanner li').length -1
        movement('-100%',0,idx)
    }
}
$(function(){
    navEvent.mouse();
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
    var inter = setInterval(function(){
        $('.slidebanner .next').click();
    },4500);
    $('.slidebanner').mouseenter(function(){
        clearInterval(inter)
    }).mouseleave(function(){
        inter = setInterval(function(){
            $('.slidebanner .next').click();
        },4500);
    })

    var fidx = 0;
    var finter = setInterval(function(){
        if(fidx==$('.fadebanner li').length){
            fidx=0
            $('.fadebanner li').eq(fidx).children('a').click()
        }else{
            $('.fadebanner li').eq(fidx).children('a').click()
        }
        fidx++
    },1000)

    $('.fadebanner').mouseenter(function(){
        clearInterval(finter)
    }).mouseleave(function(){
        finter = setInterval(function(){
            if(fidx==$('.fadebanner ul li').length){
                fidx=0
                $('.fadebanner ul li').eq(fidx).find('a').click()
            }else {
                $('.fadebanner ul li').eq(fidx).find('a').click()
            }
            fidx++
        },1000)
    })

    $('.fadebanner li a').click(function(){
        fidx=$(this).parent().index()
        $('.fadebanner li').eq(fidx).addClass('on').find('img').fadeIn(4000).parent().siblings().removeClass().find('img').fadeOut(1000);
        return false;
    })

    var midx;
    var imgur1 = ['Uv554B7YHk4', '4z4sN05-xIs', '1ELGunbuvqc', 'uBezVQweeUE', 'q6f-LLM1H6U' ]
    var src1 = 'https://www.youtube.com/embed/';
    $('.movie-view > ul > li').click(function(){
        midx=$(this).index()
        $('.movie-view .view iframe').attr('src', src1 + imgur1[midx]);
        $(this).fadeTo(300,0.5).siblings().fadeTo(300,1)
        return false;
    })



    $(window).scroll(function(){
        $('.wing').stop().animate({
            top:$(this).scrollTop()
        },1000)
    })

    $('.btnevent1').click(function(){
        bl();
        $('.blaind').fadeTo(1000,0.4);
        var tg = '.'+$(this).attr('id');
        var w = $(tg).width();
        var h = $(tg).height();
        var w1 = $(window).height();
        $(tg).show().css({
            leff:'50%',
            top:0,
            marginLeft:function(){
                return '-'+(w/2)+'px'
            },
            marginTop:function(){
                return (w1/2)+(h/2)+'px'
            }
        }).animate({
            top:$(window).scrollTop()+'px'
        },1000)
    })
    function bl() {
        $('btngroup').prepend('<div class="blaind"></div>')

    }




})
