$('#projects-button').on('click', function() {
  $('main').velocity('scroll', {duration:1500}).velocity({opacity:1});
});

$('#contact-me-button').on('click', function() {
  $('footer').velocity('scroll', {duration:1500}).velocity({opacity:1});
});

$('#home-star').on('click', function() {
  $('body').velocity('scroll', {duration:1500}).velocity({opacity:1});
});