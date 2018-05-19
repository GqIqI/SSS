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