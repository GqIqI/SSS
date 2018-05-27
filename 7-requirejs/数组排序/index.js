
require(['sortArray'],function(sortArray){ //['sortArray']为用到的模块，后面的function为他要执行的函数
    var arr1=[1,2,5,3,6,4];//页面级的用require 引入主键  ，模块级用define 新建主键，可以被别的调用
    var str='aaaa';
    var object={
        name:'sss',
        age:'12'
    }
    console.log(sortArray(arr1));//[1, 2, 3, 4, 5, 6]
    console.log(sortArray(str));//请输入数组
    console.log(sortArray(object));//请输入数组
});


/*seaJs*/
/*define(function(require){

 var arr1 = [1,23,4,13,8,10];
 var str = 'sdfghjk';
 var obj = {
 name:'22',
 age:10
 }

 var sortArray = require('sortArray');
 console.log( sortArray(obj)  );

 });*/
