// ローディング
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

// トップへスクロール
const scrollToTopButton = document.getElementById("scroll-to-top")

scrollToTopButton.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// #で始まるアンカーをクリックした場合に処理
$(function () {
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? "html" : href);
    // 移動先を数値で取得
    var position = target.offset().top - 100;
    // スムーススクロール
    $("body,html").animate(
      { scrollTop: position + 95, scrollLeft: 0 },
      speed,
      "swing"
    );
    $(".header-sp-nav").css("display", "none");
    $(".header-sp-icon-wrap").removeClass("is-open");
    $(".header-sp-nav").css("display", "none");
    return false;
  });
});


const checkbox = document.querySelector("#menu-check")
const menuLi = document.querySelectorAll("#menu a[href]")

// メニューないのリンクをクリックしたらチェックボックスを外す
menuLi.forEach((li) => {
  li.onclick = (e) => {
    checkbox.checked = false
  } 
})

// .fadeIn がついたタグに対してアニメーション
const sample = document.querySelectorAll('.fadeIn');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('active');
    } else {
      // 可視領域から外れたらリセット
      entry.target.classList.remove('active');
    }
  });
});

// ロゴ回転
sample.forEach(item => {
  observer.observe(item);
});

$(function() {
  var rotate = function(centerlogo, angle) {
   centerlogo.css({
   "transform" : "rotate("+angle+"deg)"
   });
  }
  $(window).scroll(function(){
   rotate($(".centerlogo"), $(window).scrollTop()*0.2);
  })
});

// モーダル
$(function() { 
  $('.bg-img01').click(function() {
          var imgSrc = $('.modal01').children().attr('src');
          $('.bigimg').children().attr('src', imgSrc);
          $('.modal01').fadeIn();
          $('body,html').css('overflow-y', 'hidden');
          return false
        });
  
  $('.close-btn').click(function() {
          $('.modal01').fadeOut();
          $('body,html').css('overflow-y', 'visible');
          return false
        });
});

$(function() { 
  $('.bg-img02').click(function() {
          var imgSrc = $('.modal02').children().attr('src');
          $('.bigimg').children().attr('src', imgSrc);
          $('.modal02').fadeIn();
          $('body,html').css('overflow-y', 'hidden');
          return false
        });
  
  $('.close-btn').click(function() {
          $('.modal02').fadeOut();
          $('body,html').css('overflow-y', 'visible');
          return false
        });
});

$(function() { 
  $('.bg-img03').click(function() {
          var imgSrc = $('.modal03').children().attr('src');
          $('.bigimg').children().attr('src', imgSrc);
          $('.modal03').fadeIn();
          $('body,html').css('overflow-y', 'hidden');
          return false
        });
  
  $('.close-btn').click(function() {
          $('.modal03').fadeOut();
          $('body,html').css('overflow-y', 'visible');
          return false
        });
});
