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

      $('.followers__slider-item').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
      });
      
      var mixer = mixitup('.new__products-inner')
});
