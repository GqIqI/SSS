define(function(){
   function sortArray(arr){
       arr.sort(function(x,y){
           return x-y; //从小到大排序
       });
       return arr;
    }
    return sortArray;
});