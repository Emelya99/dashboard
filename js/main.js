$(function () {
  let windowWidth = window.matchMedia('(max-width: 767px)');

  checkMedia();
  $(window).on('resize', function () {
    checkMedia();
  });

  function checkMedia() {
    if (windowWidth.matches) {
      $('.sidebar__list').hide();
      $('.sidebar__bottom').hide();
    } else {
      $('.sidebar__list').show();
      $('.sidebar__bottom').show();
    }
  }

  // Customers pagination
  $('.tabs__pagination li').on('click', function () {
    $('.tabs__pagination li').removeClass('active');
    $(this).addClass('active');
  });

  // Customers arrow
  $('.customers-name').on('click', function (e) {
    $(this).find('.customers__arrow').toggleClass('active');
    $(this).parent('.customers__item').toggleClass('active');
  });

  // Tabs
  $('.sidebar__list li').on('click', function () {
    $('.sidebar__list li').removeClass('active');
    $(this).addClass('active');
    $('.tabs__item').removeClass('active');
    $('.tabs__item').hide().eq($(this).index()).fadeIn();

    if (windowWidth.matches) {
      $('.burger').removeClass('active');
      $('.sidebar__list').slideToggle();
      $('.sidebar__bottom').fadeToggle();
    }
  });

  // Burger
  $('.burger').on('click', function () {
    $(this).toggleClass('active');
    $('.sidebar__list').slideToggle();
    $('.sidebar__bottom').fadeToggle();
  });
});
