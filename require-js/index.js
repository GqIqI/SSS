/*
require(['add'],function(add){
    var a=5;
    var b=10;
    console.log(add(a,b))

});
*/
require(['sortArray'],function(sortArray){ //['sortArray']为用到的模块，后面的function为他要执行的函数
    var arr1=[1,2,5,3,6,4];
    console.log(sortArray(arr1));
});
