/**
 * Created by apple on 18/1/16.
 */
var worker = new Worker('task.js');
worker.onmessage = function(e){//接收
    console.log(e.data);
};
worker.postMessage('aaaaaaaa');//抛出知识

console.log('bbbbb');
//相当于异步加载