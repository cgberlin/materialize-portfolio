$('#projects-button').on('click', function() {
  $('main').velocity('scroll', {duration:1500}).velocity({opacity:1});
  $('#phaser').html('<h2 style="text-align:center;margin-top:5rem">Cody Berlin</h2>');
});

$('#contact-me-button').on('click', function() {
  $('footer').velocity('scroll', {duration:1500}).velocity({opacity:1});
  $('#phaser').html('<h2 style="text-align:center;margin-top:5rem">Cody Berlin</h2>');
});

$('#home-star').on('click', function() {
  $('body').velocity('scroll', {duration:1500}).velocity({opacity:1});
});