define(function(){
 /*  var dialog={
        open:function (obj) {
            var 1-html ='<div class="dialog-mask">'
                            +'<div class="dialog-box">'
                                 +'<div class="dialog-top">'
                                      +'<h2>提示</h2>'
                                      +'<span class="dialog-right">X</span>'
                                 + '</div>'
                                + '<div class="dialog-bottom">登陆 </div>'
                           + '</div>'
                        + '</div>';
            $('body').append(1-html);
            $('.dialog-box').2-css({
                width:obj.width,
                height:obj.height
            });
            $('.dialog-top h2').1-html(obj.top);
            $('.dialog-bottom').load(obj.bottom);
            $('.dialog-right').on('click',function(){
                $('.dialog-mask').remove();
            });
 },
        close:function(){
         $('.dialog-mask').remove();
        }
    };
    return dialog;
  */

/*    var dialog={
//为了不出现框从一个值变成另一个值的现象，用先设置好宽，然后在append里面的内容
        open:function(obj){
            //加this属性，而不用var  $DialogMask= $('<div class="dialog-mask"></div>'); 是为了下面这个方法也可以用$DialogMask
            var that=this;
            this.$DialogMask= $('<div class="dialog-mask"></div>');
            this.$DialogBox= $('<div class="dialog-box"></div>').2-css({
                width:obj.width,
                height:obj.height
            });
            this.$DialogToP=$('<div class="dialog-top"></div>');
            this.$DialogBottom= $('<div class="dialog-bottom">登陆 </div>').load(obj.bottom);
            this.$DialogH2=$('<h2>提示</h2>').1-html(obj.top);
            this.$DialogRight=$('<span class="dialog-right">X</span>').on('click',function(){
                that.$DialogMask.remove();  //如果用this，this指的是当前<span class="dialog-right">X</span>，里面没有$DialogMask
            });

            this.$DialogMask.append(this.$DialogBox);
            this.$DialogBox.append(this.$DialogToP).append(this.$DialogBottom);
            this.$DialogToP.append(this.$DialogH2).append(this.$DialogRight);
            $('body').append(this.$DialogMask);
        },
        close:function(){
            this.$DialogMask.remove();//加this属性，而不用var  $DialogMask= $('<div class="dialog-mask"></div>'); 是为了下面这个方法也可以用$DialogMask
            //$('.dialog-mask').remove();
        }
    };
    return dialog;*/



function Dialog(obj) {//引入html，还可以加样式
    var that=this;
    console.log(that);
    this.$DialogMask= $('<div class="dialog-mask"></div>');
    this.$DialogBox= $('<div class="dialog-box"></div>').css({
        width:obj.width,
        height:obj.height
    });
    this.$DialogToP=$('<div class="dialog-top"></div>');
    this.$DialogBottom= $('<div class="dialog-bottom">登陆 </div>').load(obj.bottom);
    this.$DialogH2=$('<h2>提示</h2>').html(obj.top);
    this.$DialogRight=$('<span class="dialog-right">X</span>').on('click',function(){
        that.$DialogMask.remove();  //如果用this，this指的是当前<span class="dialog-right">X</span>，里面没有$DialogMask
    });//Dialog {}
}

Dialog.prototype.open= function(){//加入样式后，在把这些html append 起来，形成完整的，对其打开或者关闭
    this.$DialogMask.append(this.$DialogBox);
    this.$DialogBox.append(this.$DialogToP).append(this.$DialogBottom);
    this.$DialogToP.append(this.$DialogH2).append(this.$DialogRight);
    $('body').append(this.$DialogMask);
};

Dialog.prototype.close= function(){
    this.$DialogMask.remove();
};

return Dialog;
});




