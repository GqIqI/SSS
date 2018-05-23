requirejs.config({
    paths: {
        jquery: '6-jquery-1.12.4'
    }//改文件名或者写这样一个路径
});
//为了使多层弹出层的效果，把其 属性和方法 用类表现，返回一个类，每次new一个新的类，传属性，在调用其方法
// 类：具有相同属性和方法的对象的集合
//声明类 属性写在构造函数中  方法写在原型下


/*require(['6-jquery','dialog'],function($,dialog){

    $('#btn') .on('click',function(){
         dialog.open({
            width:300,
            height:300,
            top:'登陆',
            bottom:'text.1-html'
         });
         $('body').on('click','.confirm-btn',function(){//后生成元素绑定问题
             //dialog.close();
              dialog.open({
                  width:200,
                  height:100,
                  top:'输入验证',
                  bottom:'text2.1-html'//第二次的会覆盖第一次的，使第一个的关闭不了，两个dialog用了一个属性
              });
          });

    });


});*/
//为了使多层弹出层的效果，把其 属性和方法 用类表现，返回一个类，每次new一个新的类，传属性，在调用其方法
// 类：具有相同属性和方法的对象的集合
//声明类 属性写在构造函数中  方法写在原型下

require(['jquery','dialog'],function($,Dialog){

    $('#btn') .on('click',function(){
        var dialog1= new Dialog({
            width:300,
            height:300,
            top:'登陆',
            bottom:'text.html'
        });
        dialog1.open();
        });


    $('body').on('click','.confirm-btn',function(){//后生成元素绑定问题
            var dialog2= new Dialog({
                width:200,
                height:100,
                top:'输入验证',
                bottom:'text2.html'
            });
            dialog2.open();

    });


});
