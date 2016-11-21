var controller = new ScrollMagic.Controller();

var projectScene = new ScrollMagic.Scene({triggerElement: "#project-trigger"})
					// trigger a velocity opaticy animation
					.setVelocity(".card", "transition.slideLeftIn", { stagger: 400 })
					.addTo(controller);

var ContactScene = new ScrollMagic.Scene({triggerElement: '#contact-trigger'})
					.setVelocity(".row", "transition.slideLeftIn", { stagger: 400 })
					.addTo(controller);

$('#projects-button').on('click', function() {
  $('#card-container').velocity('scroll', {duration:1000}).velocity({opacity:1});
  destroyGame();
});

$('#contact-me-button').on('click', function() {
  $('footer').velocity('scroll', {duration:1000}).velocity({opacity:1});
  destroyGame();
});



function destroyGame() {
	game.destroy();
	$('#phaser').html('<h1 style="text-align:center; margin-top:15rem">Cody Berlin</h1>');
}