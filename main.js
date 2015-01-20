
$('.title').on('click', function () {
  $('.content').addClass('collapse');
  $(this).parent().children('.content').removeClass('collapse');
});

