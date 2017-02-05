//プランの内容//
function planPart(data) {
  $('.plan').css('border-bottom-color', '#FFF');
  $('.facility').css('border-bottom-color', '#DEDEDE');
  $('.access').css('border-bottom-color', '#DEDEDE');
  $('.review').css('border-bottom-color', '#DEDEDE');
    var eachPlan = data.plan
  $('.tabContent').html(eachPlan);
};
//施設の内容//
function facilityPart(data) {
  $('.plan').css('border-bottom-color', '#DEDEDE');
  $('.facility').css('border-bottom-color', '#FFF');
  $('.access').css('border-bottom-color', '#DEDEDE');
  $('.review').css('border-bottom-color', '#DEDEDE');
  var grade1 =  '<a src="/grade", class="hover">' +
                  '<img src="/assets/grade_star.jpg" alt="The STAR" width="30" height="28">' +
                  '</img>' +
                '</a>'
  var grade2 =  '<a src="/grade", class="hover">' +
                  '<img src="/assets/grade_star.jpg" alt="The STAR" width="30" height="28">' +
                  '</img>' +
                  '<img src="/assets/grade_star.jpg" alt="The STAR" width="30" height="28">' +
                  '</img>' +
                '</a>'
  var grade3 =  '<a src="/grade", class="hover">' +
                  '<img src="/assets/grade_star.jpg" alt="The STAR" width="30" height="28">' +
                  '</img>' +
                  '<img src="/assets/grade_star.jpg" alt="The STAR" width="30" height="28">' +
                  '</img>' +
                  '<img src="/assets/grade_star.jpg" alt="The STAR" width="30" height="28">' +
                  '</img>' +
                '</a>'
  var grade_museum =  '<a src="/grade", class="hover">' +
                        '<img src="/assets/grade_museum.jpg" alt="The MUSEUM" width="100" height="21">' +
                        '</img>' +
                      '</a>'
  var grade_casual =  '<a src="/grade", class="hover">' +
                        '<img src="/assets/grade_casual.jpg" alt="The CASUAL" width="100" height="21">' +
                        '</img>' +
                      '</a>'
  var eachFacility =  '<div class="introduction margin-top">' +
                        '<h3 class="subTitle">' +
                          "施設の紹介" +
                        '</h3>' +
                        '<p class="description">' +
                          data.description +
                        '</p>' +
                      '</div>' +
                      '<div class="introduction">' +
                        '<h3 class="subTitle">' +
                          "施設・サービス" +
                        '</h3>' +
                        '<table class="hotel_detail">' +
                          '<tbody>' +
                            '<tr>' +
                              '<th>' +
                                "施設名" +
                              '</th>' +
                              '<td>' +
                                data.name +
                              '</td>' +
                            '</tr>' +
                            '<tr class="space">' +
                            '</tr>' +
                            '<tr>' +
                              '<th>' +
                                "ふりがな" +
                              '</th>' +
                              '<td>' +
                                data.hiragana_name +
                              '</td>' +
                            '</tr>' +
                            '<tr class="space">' +
                            '</tr>' +
                            '<tr>' +
                              '<th>' +
                                "住所" +
                              '</th>' +
                              '<td>' +
                                (data.prefecture + data.city + data.street) +
                              '</td>' +
                            '</tr>' +
                            '<tr class="space">' +
                            '</tr>' +
                            '<tr>' +
                              '<th>' +
                                "電話番号（予約専用）" +
                              '</th>' +
                              '<td>' +
                                "03-6432-4962<br><br>※平日・土曜の10:00〜19:00まで受付（休：日/祝日）" +
                              '</td>' +
                            '</tr>' +
                            '<tr class="space">' +
                            '</tr>' +
                            '<tr>' +
                              '<th>' +
                                "電話番号（質問専用）" +
                              '</th>' +
                              '<td>' +
                                data.phone_number +
                              '</td>' +
                            '</tr>' +
                            '<tr class="space">' +
                            '</tr>' +
                            '<tr>' +
                              '<th>' +
                                "ホームページ" +
                              '</th>' +
                              '<td>' +
                                '<a href="'+ data.url +'">' +
                                  data.url +
                                '</a>' +
                              '</td>' +
                            '</tr>' +
                            '<tr class="space">' +
                            '</tr>' +
                            '<tr>' +
                              '<th>' +
                                "チェックイン時間" +
                              '</th>' +
                              '<td>' +
                                data.check_in_time +
                              '</td>' +
                            '</tr>' +
                            '<tr class="space">' +
                            '</tr>' +
                            '<tr>' +
                              '<th>' +
                                "チェックアウト時間" +
                              '</th>' +
                              '<td>' +
                                data.check_out_time +
                              '</td>' +
                            '</tr>' +
                            '<tr class="space">' +
                            '</tr>' +
                            '<tr>' +
                              '<th>' +
                                "総部屋数" +
                              '</th>' +
                              '<td>' +
                                (data.total_rooms + "室") +
                              '</td>' +
                            '</tr>' +
                            '<tr class="space">' +
                            '</tr>' +
                            '<tr>' +
                              '<th>' +
                                "クレジットカード" +
                              '</th>' +
                              '<td>' +
                                data.card_type +
                              '</td>' +
                            '</tr>' +
                            '<tr class="space">' +
                            '</tr>' +
                          '</tbody>' +
                        '</table>' +
                      '</div>' +
                      '<div class="introduction">' +
                        '<h3 class="subTitle">' +
                          "施設の特徴" +
                        '</h3>' +
                        data.amenity +
                        '<p class ="remarks">' +
                          "施設の特徴は一般的な設備を表すもので、宿泊施設によって設備内容やサービスの範囲は異なります。<br>詳細は宿泊施設へ直接ご確認のうえ、ご予約くださいませ。" +
                        '</p>' +
                        '<p class ="remarks">' +
                          "◆備考" +
                        '</p>' +
                        '<p class ="childremarks">' +
                          data.remark +
                        '</p>' +
                        '<div class="gradeBox">' +
                          '<div class="left">' +
                            '<p class ="title">' +
                              '<img src="/assets/grade_title.jpg", alt="Relux Grade">' +
                              '</img>' +
                            '</p>' +
                            '<p class ="star">' +
                            '</p>' +
                            '<img src="/assets/grade_verified.jpg", alt="Relux verified">' +
                            '</img>' +
                          '</div>' +
                          '<div class="right">' +
                            '<p class ="description">' +
                            '</p>' +
                            '<p class ="gradeLink">' +
                              '<a src="/grade", class="hover">' +
                                "Reluxグレードとは" +
                              '</a>' +
                            '</p>' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                      '<div class="introduction">' +
                        '<h3 class="subTitle">' +
                          "キャンセルポリシー" +
                        '</h3>' +
                        data.cancel +
                        '<p class ="notes">' +
                          "やむをえない理由によりキャンセル頂く場合は、ご予約頂いた料金に対して、キャンセル料金を頂戴しております。<br>予めご確認の上、ご予約をお願いいたします。" +
                        '</p>' +
                      '</div>'
  $('.tabContent').html(eachFacility);
//ホテルのグレードの条件分岐//
  switch (data.grade){
    case 1: $('.star').html(grade1);
            $('.right').find('.description').text("都道府県下を代表する旅館・ホテルであり、ちかくに寄る際は、訪れてみたい宿泊施設。");
            break;
    case 2: $('.star').html(grade2);
            $('.right').find('.description').text("その地方を代表する旅館・ホテルであり、すこし遠まわりをしてでも、訪れてみたい宿泊施設。");
            break;
    case 3: $('.star').html(grade3);
            $('.right').find('.description').text("日本を代表する旅館・ホテルであり、どんなに遠くても、人生に一度は訪れてみたい宿泊施設。");
            break;
    case 1: $('.star').html(grade_museum);
            $('.right').find('.description').text("芸術といえるほどの、極上の宿泊体験を提供する、世界屈指の宿泊施設です。人々にインスピレーションを与えるおもてなしは、まさに宿泊可能なインスタレーションアート。<br><br>誰もがその価値を認める、宿泊施設コレクションです。");
            break;
    default: $('.star').html(grade_casual);
            $('.right').find('.description').text("その地区では満足度がとても高い旅館・ホテルであり、カジュアルにもお楽しみいただける宿泊施設。");
            break;
  }
};
//アクセスの内容//
function accessPart(data) {
  $('.plan').css('border-bottom-color', '#DEDEDE');
  $('.facility').css('border-bottom-color', '#DEDEDE');
  $('.access').css('border-bottom-color', '#FFF');
  $('.review').css('border-bottom-color', '#DEDEDE');
  var eachAccess =  '<div id="map">' +
                    '</div>' +
                    '<a href="https://maps.google.co.jp/maps?q=26.527778888889,127.93972333333" class="googleMap">' +
                      "GoogleMapで開く" +
                    '</a>' +
                    '<div class="introduction">' +
                      '<table class="hotel_detail">' +
                        '<tbody>' +
                          '<tr>' +
                            '<th>' +
                              "施設名" +
                            '</th>' +
                            '<td>' +
                              data.name +
                            '</td>' +
                          '</tr>' +
                          '<tr class="space">' +
                          '</tr>' +
                          '<tr>' +
                            '<th>' +
                              "住所" +
                            '</th>' +
                            '<td>' +
                              (data.prefecture + data.city + data.street) +
                            '</td>' +
                          '</tr>' +
                          '<tr class="space">' +
                          '</tr>' +
                          '<tr>' +
                            '<th>' +
                              "公共交通機関でのアクセス " +
                            '</th>' +
                            '<td>' +
                              '<p class ="description">' +
                                data.access_by_public +
                              '</p>' +
                            '</td>' +
                          '</tr>' +
                          '<tr class="space">' +
                          '</tr>' +
                          '<tr>' +
                            '<th>' +
                              "お車でのアクセス" +
                            '</th>' +
                            '<td>' +
                              '<p class ="description">' +
                                data.access_by_car +
                              '</p>' +
                            '</td>' +
                          '</tr>' +
                          '<tr class="space">' +
                          '</tr>' +
                        '</tbody>' +
                      '</table>' +
                    '</div>'
  $('.tabContent').html(eachAccess);
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
function reviewPart(data) {
  $('.plan').css('border-bottom-color', '#DEDEDE');
  $('.facility').css('border-bottom-color', '#DEDEDE');
  $('.access').css('border-bottom-color', '#DEDEDE');
  $('.review').css('border-bottom-color', '#FFF');
  var grade1 =  '<a src="/grade", class="hover">' +
                  '<img src="/assets/grade_star.jpg" alt="The STAR" width="30" height="28">' +
                  '</img>' +
                '</a>'
  var grade2 =  '<a src="/grade", class="hover">' +
                  '<img src="/assets/grade_star.jpg" alt="The STAR" width="30" height="28">' +
                  '</img>' +
                  '<img src="/assets/grade_star.jpg" alt="The STAR" width="30" height="28">' +
                  '</img>' +
                '</a>'
  var grade3 =  '<a src="/grade", class="hover">' +
                  '<img src="/assets/grade_star.jpg" alt="The STAR" width="30" height="28">' +
                  '</img>' +
                  '<img src="/assets/grade_star.jpg" alt="The STAR" width="30" height="28">' +
                  '</img>' +
                  '<img src="/assets/grade_star.jpg" alt="The STAR" width="30" height="28">' +
                  '</img>' +
                '</a>'
  var grade_museum =  '<a src="/grade", class="hover">' +
                        '<img src="/assets/grade_museum.jpg" alt="The MUSEUM" width="100" height="21">' +
                        '</img>' +
                      '</a>'
  var grade_casual =  '<a src="/grade", class="hover">' +
                        '<img src="/assets/grade_casual.jpg" alt="The CASUAL" width="100" height="21">' +
                        '</img>' +
                      '</a>'
  var rate1 = "★☆☆☆☆"
  var rate2 = "★★☆☆☆"
  var rate3 = "★★★☆☆"
  var rate4 = "★★★★☆"
  var rate5 = "★★★★★"
  var noRate = "☆☆☆☆☆"
  var ReviewBox =  '<div class="gradeBox">' +
                        '<div class="left">' +
                          '<p class ="title">' +
                            '<img src="/assets/grade_title.jpg", alt="Relux Grade">' +
                            '</img>' +
                          '</p>' +
                          '<p class ="star">' +
                          '</p>' +
                          '<img src="/assets/grade_verified.jpg", alt="Relux verified">' +
                          '</img>' +
                        '</div>' +
                        '<div class="right">' +
                          '<p class ="description">' +
                          '</p>' +
                          '<p class ="gradeLink">' +
                            '<a src="/grade", class="hover">' +
                              "Reluxグレードとは" +
                            '</a>' +
                          '</p>' +
                        '</div>' +
                      '</div>' +
                      '<div class="introduction margin-top">' +
                        '<h3 class="subTitle">' +
                          "宿泊者のレビュー" +
                        '</h3>' +
                      '</div>' +
                      '<div class="reviewArea">' +
                      '</div>' +
                    '</div>'
  $('.tabContent').html(ReviewBox);
  var data_reviews = data.reviews;
  $.each(data_reviews, function(i, review){
    var eachReview =  '<div class="reviewList clearfix margin-top">' +
                        '<div class="avatar">' +
                          '<img src="/assets/icon_nouser.gif" alt="メール会員" class="face">' +
                          '</img>' +
                        '</div>' +
                        '<div class="review-body">' +
                          '<div class="review-header clearfix">' +
                            '<p class="review-rate">' +
                              "総合点：" +
                              '<span class="on">' +
                                review.rate +
                              '</span>' +
                            '</p>' +
                            '<p class="review-name">' +
                              '<i class="fa fa-user fa-lg">' +
                              '</i>' +
                              review.name +
                              '<i class="fa fa-clock-o fa-lg">' +
                              '</i>' +
                              ("宿泊日：" + review.accommodation_date) +
                            '</p>' +
                          '</div>' +
                          '<p class="review-text">' +
                            review.body +
                          '</p>' +
                        '</div>' +
                      '</div>'
    $('.reviewArea').append(eachReview);
  });
//レビューの評価処理//
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
  }
  $('.review-rate').find('.on').each(rateFunc);
//グレードの条件分岐//
  switch (data.grade){
    case 1: $('.star').html(grade1);
            $('.right').find('.description').text("都道府県下を代表する旅館・ホテルであり、ちかくに寄る際は、訪れてみたい宿泊施設。");
            break;
    case 2: $('.star').html(grade2);
            $('.right').find('.description').text("その地方を代表する旅館・ホテルであり、すこし遠まわりをしてでも、訪れてみたい宿泊施設。");
            break;
    case 3: $('.star').html(grade3);
            $('.right').find('.description').text("日本を代表する旅館・ホテルであり、どんなに遠くても、人生に一度は訪れてみたい宿泊施設。");
            break;
    case 1: $('.star').html(grade_museum);
            $('.right').find('.description').text("芸術といえるほどの、極上の宿泊体験を提供する、世界屈指の宿泊施設です。人々にインスピレーションを与えるおもてなしは、まさに宿泊可能なインスタレーションアート。<br><br>誰もがその価値を認める、宿泊施設コレクションです。");
            break;
    default: $('.star').html(grade_casual);
            $('.right').find('.description').text("その地区では満足度がとても高い旅館・ホテルであり、カジュアルにもお楽しみいただける宿泊施設。");
            break;
  }

};
//スライドショーの設定//
$(document).on('turbolinks:load', function(){

  var i = 1;

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
//プランタブをクリックした時//
  $('.plan').on('click', function() {
    $.ajax({
        type: "GET",
        url: window.location.href.json,
        dataType: "json"
    })
    .done(function(data){
      planPart(data);
    })

    .fail(function(){
      console.log("取得できません");
    });
  });
//施設タブをクリックした時//
  $('.facility').on('click', function() {
    $.ajax({
      type: "GET",
      url: window.location.href.json,
      dataType: "json"
    })
    .done(function(data){
      facilityPart(data);
    })

    .fail(function(){
      console.log("取得できません");
    });
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
    $.ajax({
      type: "GET",
      url: window.location.href.json,
      dataType: "json"
    })
    .done(function(data){
      reviewPart(data);
    })

    .fail(function(){
      console.log("取得できません");
    });
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

