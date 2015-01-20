
// // Basic approach (does not allow closing of the clicked section)
// $('.title').on('click', function () {
//   $('.content').addClass('collapse');
//   $(this).parent().children('.content').removeClass('collapse');
// });


// Refined approach with full toggle functionality allows
// repeated open & close of the clicked section.
$('.title').on('click', function () {
  var thisContent = $(this).parent().children('.content'),
      allContent = $('.content');

  if (thisContent.hasClass('collapse')) {
    allContent.addClass('collapse');
    thisContent.removeClass('collapse');
  } else {
    allContent.addClass('collapse');
  }
});

