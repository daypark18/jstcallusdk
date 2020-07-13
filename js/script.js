$(function(){





    // $(".m_donut.back").delay(1000).animate({
    //   "top" : "0"
    //
    // },{
    //   complete:function(){
    //      $(".m_donut.back").delay(2000).css({
    //        "visibility":"hidden",
    //        "opacity": "0"
    //      });
    //      $(".m_donut.bite").delay(4000).addClass("on");
    //
    //   }
    // },{duration:5000});


    $(".m_donut.back").delay(100).animate({
      "top" : "0"
    },1500,function(){
      $(".m_donut.back").delay(300).css(
        "background-image", "url(img/donut_bite.png)",
      );
    });



  $(window).scroll(function() {
    var winscTop = $(window).scrollTop();
    var secOffset = $('.page.second').offset().top;
    var cofOffset = $('.page.second .sec_txt').offset().top;
    var donOffset = $('.page.second .search').offset().top;
    var sandOffset = $('.page.thr .menu_title').offset().top;

    // console.log("winscTop ==", winscTop);
    // console.log("secOffset ==",  secOffset);
    // console.log("cofOffset ==", cofOffset);
    // console.log("donOffset ==",donOffset);

    if(winscTop > secOffset ) {

        $('.page.sec .str_img .str.pic1').addClass("on");
        $('.page.sec .str_img .str.pic2').addClass("on");
        $('.page.sec .str_img .str.pic3').addClass("on");
    }

    if(winscTop > cofOffset ) {
        $('.page.thr .img_cof').addClass("on");
    }
    if(winscTop > donOffset ) {
        $('.page.thr .img_don').addClass("on");
    }
    if(winscTop > sandOffset ) {
        $('.page.thr .img_sand').addClass("on");
    }
  })

 var gnbOver = function(){
   $(".sub_gnb").css("visibility","visible").stop().animate({
     "height" : "180px"
   }).addClass("on");

  $(".sub_bg").stop().animate({
    "height":"180px"
  })

 }

 var gnbLeave = function(){
   $(".sub_gnb").stop().animate({
     "height" : "0"
   },{
     complete : function() {
       $(".sub_gnb").css('visibility', 'hidden')
     }
   }).removeClass("on");

   $(".sub_bg").stop().animate({
     "height":"0"
   })
 }

 $('.main .top_menu .menu_list').hover(
   function() {
     gnbOver();
   },
   function() {}
 )

 $('header').hover(
   function() {

   },
   function() {
     gnbLeave();
   }
 )

 var gallery = $('.eve_img > ul'),
     items = gallery.find("li"),
     len = items.length,
     current = 1,
     direction = items.width(),
     first = items.filter(':first'),
     last = items.filter(':last'),
     triggers = $('button');

     first.before(last.clone(true));
     last.after(first.clone(true));


     console.log(len,direction);


     triggers.on('click', function() {

      if (gallery.is(':not(:animated)')) {

          var cycle = false,
              delta = (this.id === "prev")? -1 : 1;


          gallery.animate({ left: "+=" + (-direction * delta) }, function() {

              current += delta;
              console.log("current == ", current);
              //console.log("delta == ", delta);

              cycle = (current === 0 || current > len);
              console.log("cycle == ", cycle);

              if (cycle) {
                  current = (current === 0)? len : 1;
                  //current === 0: go prev on first set, left + set width
                  gallery.css({left:-direction * current });

              console.log("current ==", current);
              }
          });
       }

    });


 // var gallery = $('.eve_img > ul'),
 //   items = gallery.find("li"),
 //   len = items.length,
 //   current = 1,
 //   first = items.filter(':first'),
 //   last = items.filter(':last'),
 //   triggers = $('button');
 //
 //   first.before(last.clone(true));
 //   last.after(first.clone(true));
 //
 //
 //   console.log(len);
 //
 //
 //
 // triggers.on('click', function() {
 //
 //   if (gallery.is(':not(:animated)')) {
 //
 //       var cycle = false,
 //           delta = (this.id === "prev")? -1 : 1;
 //
 //
 //       gallery.animate({ left: "+=" + (-1040 * delta) }, function() {
 //
 //           current += delta;
 //           console.log("current == ", current);
 //           //console.log("delta == ", delta);
 //
 //           cycle = (current === 0 || current > len);
 //           console.log("cycle == ", cycle);
 //
 //           if (cycle) {
 //               current = (current === 0)? len : 1;
 //               //current === 0: go prev on first set, left + set width
 //               gallery.css({left:  -1040 * current });
 //
 //           console.log("current ==", current);
 //           }
 //       });
 //    }
 //
 // });



});
