/*换肤*/
$('#skin li').on('click',function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.mainNav').attr('class','mainNav skin'+$(this).index());
    $('#jnCatalog h2').attr('class','h2 skin'+$(this).index());
});
/*换肤*/

/*搜索框*/
$('#inputSearch').on('focus',function(){
    if(this.value ==this.defaultValue){
        this.value="";
    }
}).on('blur',function(){
    if(this.value ==""){
        this.value=this.defaultValue;
    }
})
/*搜索框*/

/*导航*/
$('#nav li').on('mouseover',function(){
    $(this).children('.jnNav').show();
}).on('mouseout',function(){
    $(this).children('.jnNav').hide();
});
/*导航*/

/*选项卡*/
$('.tab_menu li').on('click',function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.tab_box div').eq($(this).index()).removeClass('hide').siblings().addClass('hide');
    //$('.frame div').eq($(this).index()).addClass('selected').siblings().removeClass('selected');
});
/*选项卡*/

/*尺寸*/
$('.pro_size li').on('click',function(){
   $(this).addClass('cur').siblings().removeClass('cur');
   $('.pro_size strong').html($(this).html());
});
/*尺寸*/

/*钱数*/
$("select").on('click',function () {
   var $num= $("select option:selected");
    var $price=$num.html()*200;
    $('.pro_price strong').html($price);
});
/*钱数*/

/*商品评分*/
$('.rating li').on('click',function () {
     var title = $(this).attr("title");
        alert("你对商品的评分是："+title);
        var cl = $(this).parent().attr("class");
        $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
        return false;
});
/*商品评分*/


/* 放大镜字体颜色*/
$('.color_change img').on('click',function(){
    $('.color_change strong').html($(this).attr("alt"));
});
/* 放大镜颜色*/
/*放大镜*/
$('.color_change img').on('click',function(){
    $(this).addClass('hover').parent().siblings().find('img').removeClass('hover');


var $src = $(this).attr('src');//images/pro_img/green.jpg
var i = $src.indexOf('.');
var $path = $src.substring(0,i);//images/pro_img/green
var $format = $src.substring(i);//.jpg
$('#bigImg').attr('src',$path+"_one_small"+$format);
var $color = $path.replace('images/pro_img/','');
$('.imgList li').addClass('hide');
$('.imgList_'+$color).removeClass('hide');//底下一排小图


$('.imgList li img').on('click',function(){
    var $src = $(this).attr('src');
    var i = $src.indexOf('.');
    var $path = $src.substring(0,i);
    var $format = $src.substring(i);
    $('#bigImg').attr('src',$path+'_small'+$format);//大图
});
});
/*放大镜*/

/*$('.jqzoomWrap .jqzoom').append('<div class="cencer-img"></div>');
$('#jnProitem').prepend('<div class="right-img"></div>');
$('#bigImg').on('mouseover',function(){
    $('.cencer-img').addClass('showa');
    $('.right-img').addClass('showa');
    console.log('111');
});*/
/* 滑过图片出现放大镜效果 */
/*
$(function(){
    $("#jnBrandList li").each(function(index){
        var $img = $(this).find("img");
        var img_w = $img.width();
        var img_h = $img.height();
        var spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></span>';
        $(spanHtml).appendTo(this);
    })
    $("#jnBrandList").delegate(".imageMask", "hover", function(){
        $(this).toggleClass("imageOver");
    });

    /!*
    $("#jnBrandList").find(".imageMask").live("hover", function(){
        $(this).toggleClass("imageOver");
    });
    *!/
});
*/

