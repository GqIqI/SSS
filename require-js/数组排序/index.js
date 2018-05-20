
require(['sortArray'],function(sortArray){ //['sortArray']为用到的模块，后面的function为他要执行的函数
    var arr1=[1,2,5,3,6,4];
    var str='aaaa';
    var object={
        name:'sss',
        age:'12'
    }
    console.log(sortArray(arr1));//[1, 2, 3, 4, 5, 6]
    console.log(sortArray(str));//请输入数组
    console.log(sortArray(object));//请输入数组
});


