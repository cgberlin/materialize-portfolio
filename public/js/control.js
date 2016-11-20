$('#projects-button').on('click', function() {
  $('main').velocity('scroll', {duration:1500}).velocity({opacity:1});
  destroyGame();
});

$('#contact-me-button').on('click', function() {
  $('footer').velocity('scroll', {duration:1500}).velocity({opacity:1});
  destroyGame();
});

$('#home-star').on('click', function() {
  $('body').velocity('scroll', {duration:1500}).velocity({opacity:1});
});

function destroyGame() {
	game.destroy();
	$('#phaser').html('<h1 style="text-align:center; margin-top:15rem">Cody Berlin</h1>');
}