//施設の内容//
function facilityPart() {
  $('#facility').css('display', 'block');
  $('#plan').css('display', 'none');
  $('#access').css('display', 'none');
  $('#review').css('display', 'none');
  $('.facility').css('border-bottom-color', '#FFF');
  $('.plan').css('border-bottom-color', '#DEDEDE');
  $('.access').css('border-bottom-color', '#DEDEDE');
  $('.review').css('border-bottom-color', '#DEDEDE');
};
//プランの内容//
function planPart() {
  $('#facility').css('display', 'none');
  $('#plan').css('display', 'block');
  $('#access').css('display', 'none');
  $('#review').css('display', 'none');
  $('.facility').css('border-bottom-color', '#DEDEDE');
  $('.plan').css('border-bottom-color', '#FFF');
  $('.access').css('border-bottom-color', '#DEDEDE');
  $('.review').css('border-bottom-color', '#DEDEDE');
};
//アクセスの内容//
function accessPart(data) {
  $('#facility').css('display', 'none');
  $('#plan').css('display', 'none');
  $('#access').css('display', 'block');
  $('#review').css('display', 'none');
  $('.facility').css('border-bottom-color', '#DEDEDE');
  $('.plan').css('border-bottom-color', '#DEDEDE');
  $('.access').css('border-bottom-color', '#FFF');
  $('.review').css('border-bottom-color', '#DEDEDE');
//GoogleMapの設定//
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 16 ,  // ズーム値
    center: new google.maps.LatLng( data.location_latitude, data.location_longitude ) // 中心の位置座標
  });
// マーカーのインスタンスを作成する
  var marker = new google.maps.Marker({
    map: map ,  // 地図
    position: new google.maps.LatLng( data.location_latitude, data.location_longitude ) // 位置座標
  });
};
//レビューの内容//
function reviewPart() {

  $('#facility').css('display', 'none');
  $('#plan').css('display', 'none');
  $('#access').css('display', 'none');
  $('#review').css('display', 'block');
  $('.plan').css('border-bottom-color', '#DEDEDE');
  $('.facility').css('border-bottom-color', '#DEDEDE');
  $('.access').css('border-bottom-color', '#DEDEDE');
  $('.review').css('border-bottom-color', '#FFF');
};

function rateCV() {
  //各レビューの評価//
  var rate1 = "★☆☆☆☆"
  var rate2 = "★★☆☆☆"
  var rate3 = "★★★☆☆"
  var rate4 = "★★★★☆"
  var rate5 = "★★★★★"
  var noRate = "☆☆☆☆☆"
// //レビューの評価処理//
  function rateFunc(index, element) {
    var rate = $(element).text();
    if (rate == 1){
      $(element).text(rate1);
    } else if (rate == 2){
      $(element).text(rate2);
    } else if (rate == 3){
      $(element).text(rate3);
    } else if (rate == 4){
      $(element).text(rate4);
    } else if (rate == 5){
      $(element).text(rate5);
    } else {
      $(element).text(noRate);
    }
  };
  $('.review-rate').find('.on').each(rateFunc);
}
//スライドショーの設定//
$(document).on('turbolinks:load', function(){

  $('.slideshow-main').slick({
    accessibility: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    speed: 500,
    asNavFor: '.slideshow-nav'
  });

  $('.slideshow-nav').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slideshow-main',
    focusOnSelect: true
  });

  $('.facility').css('border-bottom-color', '#FFF');
  $('#facility').css('display' , 'block')
//施設タブをクリックした時//
  $('.facility').on('click', function() {
    facilityPart();
  });
//プランタブをクリックした時//
  $('.plan').on('click', function() {
    planPart();
  });
  //アクセスタブをクリックした時//
  $('.access').on('click', function() {
    $.ajax({
      type: "GET",
      url: window.location.href.json,
      dataType: "json"
    })
    .done(function(data){
      accessPart(data);
    })

    .fail(function(){
      console.log("取得できません");
    });
  });
  //レビュータブをクリックした時//
  $('.review').on('click', function() {
    reviewPart();
  });
  $('.review').one('click', function() {
    rateCV();
  });
  //予約ルームエリアにマウスを乗せた時//
  $('.eachroom-area').each(function(i, element) {
    $(element).hover(

      function() {
        $(element).find('.roomBox').css('display', 'block');
      },

      function() {
        $('.roomBox').css('display', 'none');
      }
    )
  });

  $('.room-description').on('click', function() {
    $(this).css('overflow', 'visible');
    $(this).find('.body').css('display', 'inline-block');
    $(this).find('.body').css('-webkit-box-orient', '');
    $(this).find('.body').css('-webkit-line-clamp', '');
  });
});

