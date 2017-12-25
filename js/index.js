 $(function() {
     // 初始化工具提示
     $('[data-toggle="tooltip"]').tooltip();
     /**
      * 1. 监听屏幕变化事件
      * 2. 在屏幕变化事件里面获取屏幕的宽度
      * 3. 判断当前屏幕宽度是否大于768 如果大于768 就是PC端 否则就是移动端
      * 4. 如果是PC端就加载PC端的a标签 如果是移动端就加载移动端的a标签
      * 5. 获取轮播图的所有轮播图项item
      * 6. 遍历所有item分别插入对应的a标签
      * 7. a标签的图片地址都不一样所以事先把图片地址存储到当前item的自定义属性身上
      * 8. 分别给item添加两个自定义属性 data-large-image（大图路径） data-small-image(小图路径)
      * 9. 通过JS获取item身上的自定义属性的值 原生JS dataset['属性名'] jquery data('属性名')
      * 10. 把图片设置到a标签里面 后添加到item里
      * 11. resize事件默认不会触发需要拖动才会执行加载图片 所以通过trigger方法触发一下当前事件
      */
     var items = $('.carousel-inner .item');
     $(window).on('resize', function() {
         var windowWidth = $(window).width();
         if (windowWidth > 768) {
             //是PC端
             items.each(function(index, value) { //each是jquery中遍历数组的方法 index是当前遍历的索引 value是当前遍历的值
                 var imgSrc = $(value).data('large-image');
                 var pcImg = '<a href="#" class="pcImg hidden-xs" style="background-image:url(' + imgSrc + ')"></a>';
                 $(value).html(pcImg)
             })
         } else {
             //是移动端
             items.each(function(index, value) { //each是jquery中遍历数组的方法 index是当前遍历的索引 value是当前遍历的值
                 var imgSrc = $(value).data('small-image');
                 var mobileImg = '<a href="#" class="mobileImg hidden-sm hidden-md hidden-lg"><img src="' + imgSrc + '" alt=""></a>';
                 $(value).html(mobileImg)
             })
         }
     }).trigger('resize'); // trigger方法是用来注册事件时马上触发事件

 });
