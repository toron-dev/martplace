$(function(){

    $(".rate-star").rateYo({
        rating: 4.6,
        starWidth: "17px",
        readOnly: true
      });

      $('.week__slider-inner').slick({
        infinite: true,
        slidesToShow: 1,
      });
      
      var mixer = mixitup('.products__inner-box')
});