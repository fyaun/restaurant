$(function() {

    // ハンバーガー
    $('.drawer-icon').on('click', function(e) {
        e.preventDefault();
      
        $('.drawer-icon').toggleClass('is-active');
        $('.drawer-content').toggleClass('is-active');
        $('body').toggleClass('is-active');
    
        return false;
      });


      const swiper = new Swiper('.swiper', {
        loop: true,
        effect: "fade", //フェードのエフェクト
        // 切り替える時にふわっと表示
        speed: 2000,
        autoplay: {
          delay: 5000, //４秒後に次の画像へ
          disableOnInteraction: false //ユーザー操作後に自動再生を再開する
        },
      
      
      });


 $(document).ready(function() {
      $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();

        // スクロール位置が特定の条件を満たす場合にactiveクラスを追加
        if (scrollPosition > 650) {
          $('.drawer-icon').addClass('active');
          $('.header-logo a').addClass('active');
          $('.header-logo a span').addClass('active');
        } else {
          $('.drawer-icon').removeClass('active');
          $('.header-logo a').removeClass('active');
          $('.header-logo a span').removeClass('active');
        }
      });
    });




  // スムーススクロール
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({
        scrollTop: 0
    }, 1000);
    return false;
  });














// $(document).ready(function() {

//   $(window).scroll(function() {
//     const target = $('.effect');
//     const position = Math.floor($(window).height() * 0.75);
  
//     target.each(function() {
//       let offsetTop = Math.floor($(this).offset().top);
//       let offsetBottom = Math.floor($(this).offset().top + $(this).outerHeight());
  
//       if (offsetTop < position) {
//         $(this).addClass('scroll-in');
//       }
      
//       if (offsetBottom < 0) {
//         $(this).removeClass('scroll-in');
//       }
//     });
//   });


// });


// const fadeIn = function(){

//   const target = document.getElementsByClassName('effect');
//   const position = Math.floor(window.innerHeight * .75);

//   for (let i = 0; i < target.length; i++) {

//       let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
//       let offsetBottom = Math.floor(target[i].getBoundingClientRect().bottom);

//       if (offsetTop < position) {
//           target[i].classList.add('scroll-in');
//       }
      
//       if(offsetBottom < 0){
//           target[i].classList.remove('scroll-in');
//       }
//   }
// }
// window.addEventListener('scroll', fadeIn, false);


// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(){

  // 背景色が伸びて出現（左から右）
$('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
  }else{
    $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
  }
});	

 // 文字列を囲う子要素
$('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
  }else{
    $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
  }
});		
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述




});

