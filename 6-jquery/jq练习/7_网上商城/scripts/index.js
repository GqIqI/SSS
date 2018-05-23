/*大屏广告轮播图*/
var timer;
var count=0;
$('.btn-box a').on('mouseover',function(){
    change($(this).index());
    count=$(this).index();
});
function run(){
    timer=setInterval(function(){
        count++;
        if(count==$('#JS_imgWrap img').length ){
            count=0;
        }
        change(count);
    },2000);
}

run();
$('#jnImageroll').on('mouseover',function(){
    clearInterval (timer);
}).on('mouseout',function(){
    run();
});
function change(idx){
    $('.btn-box a').eq(idx).addClass('chos').siblings().removeClass('chos');
    $('#JS_imgWrap img').eq(idx).fadeIn(400).siblings().stop().fadeOut(400);
}
/*大屏广告轮播图*/


/*换肤*/
$('#skin li').on('click',function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.mainNav').attr('class','mainNav skin'+$(this).index());
    $('#jnCatalog h2').attr('class','h2 skin'+$(this).index());
   // setCookie('skin',$(this).index(),7);
});
//var index = getCookie('skin');
//$('#skin li').eq(index).trigger('click');

/*换肤*/


/*品牌活动*/
$('#jnBrandTab li').on('click',function(){
    changes($(this).index());
});
function changes(idx){
    $('#jnBrandTab li').eq(idx).addClass('chos').siblings().removeClass('chos');
    //  $('#jnBrandList').css('left:-idx*760');
    $("#jnBrandList").animate({
        left: -$("#jnBrandList li").innerWidth() * 4 *idx
    }, 1000);
};
/*品牌活动*/



/*搜索框*/

$('#inputSearch').on('focus',function(){
    if(this.value == this.defaultValue){
        this.value = "";
    }
}).on("blur", function(){
    if(this.value == ""){
        this.value = this.defaultValue;
    }
});

/*搜索框*/

/*导航*/
$('#nav li').on('mouseover',function(){
    $(this).children('.jnNav').show();
}).on('mouseout',function(){
    $(this).children('.jnNav').hide();
})

/*导航*/


/*右边的最新动态*/
$('#jnNoticeInfo li').on('mouseover',function(e){
    e=e||window.event;
    $('<div id="title1">'+this.title+'<div/>').appendTo('body').css({
        left:e.pageX +10,
        top:e.pageY+10,
    });
    $('#title1').animate({
        height:30
    }, 1000);
});

/*右边的最新动态*/
/*最新动态开始*/

var $title = '';

$('#jnNoticeInfo li a').on('mouseover',function(e){
    //$title = $(this).attr('title');
    this.myTitle = $(this).attr('title');
    $('<div class="tip">'+this.myTitle+'</div>').appendTo('body').offset({
        left:e.pageX +20,
        top:e.pageY+20
    });
    $(this).attr('title','');
}).on('mousemove',function(e){
    $('.tip').offset({
        left:e.pageX +20,
        top:e.pageY+20
    });
}).on('mouseout',function(){
    $('.tip').remove();
    //$(this).attr('title',$title);
    $(this).attr('title',this.myTitle);

});




/*最新动态结束*/