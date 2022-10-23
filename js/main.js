$(function () {
  // Sidebar list
  $('.sidebar__list li').on('click', function () {
    $('.sidebar__list li').removeClass('active');
    $(this).addClass('active');
  });

  // Customers pagination
  $('.tabs__pagination li').on('click', function () {
    $('.tabs__pagination li').removeClass('active');
    $(this).addClass('active');
  });
});
