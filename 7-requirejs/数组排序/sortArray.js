define(['isArray'],function(isArray){  //['isArray']第一个为用哪个模块。
   function sortArray(arr){
       if(isArray(arr)){
           arr.sort(function(x,y){
               return x-y; //从小到大排序
           });
           return arr;
       }
       return  '请输入数组';
    }
    return sortArray;
});