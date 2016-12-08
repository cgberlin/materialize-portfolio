var isGameDestroyed = false,
	width = $(window).width();
console.log(width);

var controller = new ScrollMagic.Controller();

var tween = TweenMax.staggerFromTo(['#text-bug', '#recipe-calc', '#asteroids', '#news-ping'], 5,
    {autoAlpha:0,ease:Power4.easeInOut,x:-100}, 
    {autoAlpha:1,ease:Power4.easeInOut, x:0}
 , 1);

if (width < 768) {
	var scene = new ScrollMagic.Scene({
    triggerElement: '#card-container',
    duration: 1000 
  })
  .setTween(tween)
  .addTo(controller);
}
else {
	var scene = new ScrollMagic.Scene({
	    triggerElement: '#card-container',
	    duration: 400 
	  })
	  .setTween(tween)
	  .addTo(controller);
	}
  

scene.addIndicators();

var showAboutMe = TweenMax.fromTo("#about-me-card", 5,
	{autoAlpha:0,ease:Power4.easeInOut,x:-100}, 
    {autoAlpha:1,ease:Power4.easeInOut, x:0});

var scene = new ScrollMagic.Scene({
    triggerElement: '#about-me-container',
    duration: 200 
  })
  .setTween(showAboutMe)
  .addTo(controller);
  
 
scene.addIndicators();

var showContactMe = TweenMax.staggerFromTo(".row", 5,
    {autoAlpha:0,ease:Power4.easeInOut, y:-100}, 
    {autoAlpha:1,ease:Power4.easeInOut, y:0}
 , 1.5);

var scene = new ScrollMagic.Scene({
    triggerElement: '#contact-container',
    duration: 200 
  })
  .setTween(showContactMe)
  .addTo(controller);
  
 
scene.addIndicators();
  




function scroller(event){
  var scrollYPos = $(event.data.id).offset().top;
  event.preventDefault();
  TweenMax.to(window, 2, {scrollTo:{y:scrollYPos, x:0}, ease:Power4.easeOut})
  }


$('#destroy-game-button, #projects-button, #contact-me-button').on('click', function(){
  destroyGame();
});

$("#destroy-game-button").bind('click', { id: '#about-me-container' }, scroller);
$("#projects-button").bind('click', { id: '#project-container' }, scroller);
$("#contact-me-button").bind('click', { id: 'footer' }, scroller);


function destroyGame() {
	if (isGameDestroyed == false){
		game.destroy();
		$('#phaser').html('<h1 style="text-align:center; margin-top:15rem">Cody Berlin</h1>');
		isGameDestroyed = true;
	}
	
}