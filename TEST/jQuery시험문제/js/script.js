
//
//     var over = function(){
//         $(this).css('background',"red");
//     };
//
//     var out = function(){
//         $(this).css('background',"transparent");
//     };
//     var scrollEvent=function(){
//         var idx = $(this).index();
//         var sot = $('.content section').eq(idx).offset().top;
//         $('html,body').stop().animate({
//             scrollTop:sot
//         },1000)
//         return false; //대신에 가능<a href="javascript:void(0)";>
//     }
// $(function(){
//     $('nav li')
//     .hover(over,out)
//     .click(scrollEvent)
//
// })


////1
// var navEvent ={
//     mouse:function(){
//
//         $('nav li').on({
//             mouseenter:function(){
//                 $(this).css('background','red').children('a').css('color','#FFF');
//             },
//             mouseleave:function(){
//                 $(this).css('background','initial').children('a').css('color','initial');
//             },
//             click:function(){
//                 navEvent.idx = $(this).index();
//                 var sot = $('.content section').eq(navEvent.idx).offset().top;
//                 $('html,body').stop().animate({
//                     scrollTop:sot
//                 })
//                 return false;
//             }
//         })
//
//
//     }
//
// }
// //문서 준비
// $(function(){
//     navEvent.mouse()
// })

// //2
// var navEvent ={ // mouseEvent fuction
//     mouse:function(){
//         var over = function(){
//             $(this).css('background','red').children('a').css('color','#FFF');
//         }
//
//         var out = function(){
//             $(this).css('background','initial').children('a').css('color','initial');
//         }
//
//         var scroll = function(){
//             navEvent.idx = $(this).index();
//             var sot = $('.content section').eq(navEvent.idx).offset().top;
//             $('html,body').stop().animate({
//                 scrollTop:sot
//             })
//             return false;
//         }
//
//         $('nav li').on({
//             mouseenter:over,
//             mouseleave:out,
//             click:scroll
//         })
//      }
// }
//
//
// var slide = {
//
//
// }
// //문서 준비
// $(function(){
//     //mouseEvent
//     navEvent.mouse()
// })




//함수
var idx = 0;
var scrollEvent=function(){
    var idx = $(this).index();
    var sot = $('.content section').eq(idx).offset().top;
    $('html,body').stop().animate({
        scrollTop:sot
    },1000)
    return false;
};
function movement(start, end, i) {
    $('.slidebanner li').eq(i).addClass('on').find('img').css({
        left: start,
        'display': 'block'
    }).stop().animate({
        left: end
    }).parent().siblings().removeClass();

    if (idx == $('.slidebanner li').length) {
        idx = 0
        movement('100%', 0, idx)
    } else if (idx < 0) {
        idx = $('.slidebanner li').length - 1;
        movement('-100%', 0, idx)
    }
}


////비함수
// var idx = 0;
// var slide = {
//     Event:function(){
//         $('.slidebanner .next').click(function(){
//            var move = $('.slidebanner').width()
//
//
//            $('.slidebanner ul li').eq(idx)
//            .find('img')
//            .stop()
//            .animate({
//                'left':-move
//            }).parent().next().find('img').css({
//               'left':move,
//                'display':'block'
//            }).stop().animate({
//                'left':0
//            })
//            idx++
//            if(idx == $('.slidebanner ul li').length){
//                idx = 0;
//                $('.slidebanner ul li').eq(idx)
//                .find('img')
//                .css({
//                   'left':move,
//                    'display':'block'
//                }).stop().animate({
//                    'left':0
//                })
//            }
//         })
//         $('.slidebanner .prev').click(function(){
//            var move = $('.slidebanner').width()
//
//
//            $('.slidebanner ul li').eq(idx)
//            .find('img')
//            .stop()
//            .animate({
//                'left':move
//            }).parent().prev().find('img').css({
//               'left':-move,
//                'display':'block'
//            }).stop().animate({
//                'left':0
//            })
//            idx--
//            if(idx <0){
//                idx = $('.slidebanner ul li').length -1
//                $('.slidebanner ul li')
//                .eq(idx)
//                .find('img')
//                .css({
//                   'left':-move,
//                    'display':'block'
//                }).stop().animate({
//                    'left':0
//                })
//            }
//         })
//     }
//
// }
$(function(){
    $('nav ul li').mouseover(function(){
        $(this).css('background','red').children('a').css('color','blue');
    }).mouseout(function(){
        $(this).css('background','#ccc').children('a').css('color','black');
    }).click(scrollEvent)

    // 비함수
    // slide.Event()

    // 함수

    $('.next').click(function() {
        movement(0, '-100%', idx);
        idx++
        movement('100%', 0, idx);

    })

    $('.prev').click(function() {
        movement(0, '100%', idx);
        idx--
        movement('-100%', 0, idx);
    })

    //
    var inters = setInterval(function() {
        $('.next').click();
    }, 4500);
    $('.view').mouseenter(function() {

            clearInterval(inters)

        }).mouseleave(function() {

            inters = setInterval(function() {
                $('.next').click();
            }, 4500);

        })

    $('.slidebanner li a').click(function(){
        var num = $('.slidebanner li.on').index();
        idx = $(this).parent().index()

        if(num<idx){
            movement(0,'-100%', num);
            movement('100%',0,idx);
        }else if(num>idx){
            movement(0,'100%',num);
            movement('-100%',0,idx);
        }
        return false;
    })

});

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
    // 선생님이 짜주신거
    // var fidx=1;
    // var finter = setInterval(function(){
    //     $('.fadebanner li a').eq(fidx).click()
    //     fidx++
    //     if(fidx==$('.fadebanner li').length){
    //         fidx=0
    //         $('.fadebanner li').eq(fidx).click()
    //
    //     }
    // },1000)

    //내가 한거
    var fidx=0;
    var finter = setInterval(function(){

        // console.log(fidx)
        if(fidx==$('.fadebanner li').length){
            fidx=0
            $('.fadebanner li').eq(fidx).children('a').click()
        }else{
            $('.fadebanner li').eq(fidx).children('a').click()
        }
        fidx++
    },1000)

    $('.fadebanner li a').click(function(){

         fidx = $(this).parent().index();
        ////선생님
        //  $('.fadebanner li.on').removeClass().find('img').fadeOut();
        //  $('.fadebanner li').eq(fidx).addClass('on').find('img').fadeIn();

        //내가 한거
         $('.fadebanner li').eq(fidx).addClass('on').find('img').fadeIn().parent().siblings().removeClass().find('img').fadeOut();

        return false

    })
    var midx;
    var imgur1 = ['Uv554B7YHk4', '4z4sN05-xIs', '1ELGunbuvqc', 'uBezVQweeUE', 'q6f-LLM1H6U' ]
    var src1 = 'https://www.youtube.com/embed/';
    $('.movie-view > ul > li').click(function() {
        midx = $(this).index();
        $('.movie-view .view iframe').attr('src', src1 + imgur1[midx]);
        return false;
    })

    $(window).scroll(function() {
        $('.wing').stop().animate({
                top: $(this).scrollTop()
            }, 1000)

    });


    $('.btnevent1').click(function() {
        bl();
        $('.blaind').fadeTo(1000, 0.4);
        var tg = '.' + $(this).attr('id');
        var w = $(tg).width();
        var h = $(tg).height();
        var w1 = $(window).height();
        console.log(h / 2);
        $(tg).show().css({
            left: '50%',
            top: 0,
            marginLeft: function() {
                return '-' + (w / 2) + "px"
            },
            marginTop: function() {
                return (w1 / 2) - (h / 2) + "px"
            }

        }).animate({
            top:$(window).scrollTop() + 'px'
        },1000)
    })

    $('.btnevent2').click(function() {
        bl();
        $('.blaind').fadeTo(1000, 0.4);
        var tg = '.' + $(this).attr('id');
        var w = $(tg).width();
        var h = $(tg).height();
        var w1 = $(window).height();
        console.log(h / 2);
        $(tg).show().css({
            left: '50%',
            top: 0,
            marginLeft: function() {
                return '-' + (w / 2) + "px"
            },
            marginTop: function() {
                return (w1 / 2) - (h / 2) + "px"
            }

        }).animate({
            top:$(window).scrollTop() + 'px'
        },1000)
    })

    $('.btnevent3').click(function() {
        bl();
        $('.blaind').fadeTo(1000, 0.4);
        var tg = '.' + $(this).attr('id');
        var w = $(tg).width();
        var h = $(tg).height();
        var w1 = $(window).height();
        console.log(h / 2);
        $(tg).show().css({
            left: '50%',
            top: 0,
            marginLeft: function() {
                return '-' + (w / 2) + "px"
            },
            marginTop: function() {
                return (w1 / 2) - (h / 2) + "px"
            }

        }).animate({
            top:$(window).scrollTop() + 'px'
        },1000)
    })

    $('.btnevent4').click(function() {
        bl();
        $('.blaind').fadeTo(1000, 0.4);
        var tg = '.' + $(this).attr('id');
        var w = $(tg).width();
        var h = $(tg).height();
        var w1 = $(window).height();
        console.log(h / 2);
        $(tg).show().css({
            left: '50%',
            top: 0,
            marginLeft: function() {
                return '-' + (w / 2) + "px"
            },
            marginTop: function() {
                return (w1 / 2) - (h / 2) + "px"
            }

        }).animate({
            top:$(window).scrollTop() + 'px'
        },1000)
    })


    var close = function() {

        $('.pop').hide();
        $('.blaind').fadeOut(function() {
            $(this).remove();
        })

    }

    $('body').on('click', '.blaind', close);
    $('.close').click(close);


    function bl() {
        $('.btngroup').prepend('<div class="blaind"></div>')

    }

})
