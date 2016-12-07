var controller = new ScrollMagic.Controller();

var tween = TweenMax.staggerFromTo(".card", 5,
    {autoAlpha:0,ease:Power4.easeInOut}, 
    {autoAlpha:1,ease:Power4.easeInOut}
 , 1.5);

var scene = new ScrollMagic.Scene({
    triggerElement: '#card-container',
    duration: 400 /* How many pixels to scroll / animate */
  })
  .setTween(tween)
  .addTo(controller);
  
  // Add debug indicators fixed on right side
scene.addIndicators();
  



$('#destroy-game-button').on('click', function(){
  moveDownToProjects();
});

$('#projects-button').on('click', function() {
  moveDownToProjects();
});

function moveDownToProjects(){
  $('main').velocity('scroll', {duration:1500}).velocity({opacity:1}).delay(1500);
  destroyGame();
}

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