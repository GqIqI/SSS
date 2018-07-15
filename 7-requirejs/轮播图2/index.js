/**
 * Created by thinkpad on 2018/5/26.
 */
require(['carousel'],function(Carousel){
 var carousel1=new Carousel();
  carousel1.init({
      selector:'.box',
      imgData:['img/1.jpg','img/2.jpg','img/3.jpg','img/个人4.jpg'],
      arrowPos:'center',//bottom
      btnType:'circle'//square
  });
    var carousel2=new Carousel();
    carousel2.init({
        selector:'.box2',
        imgData:['img/1.jpg','img/2.jpg','img/3.jpg','img/个人4.jpg'],
        arrowPos:'bottom',//bottom
        btnType:'square'//circle
    });
});