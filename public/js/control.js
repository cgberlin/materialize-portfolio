var isGameDestroyed = false,
	width = $(window).width();

var controller = new ScrollMagic.Controller();

var tween = TweenMax.staggerFromTo(['#project-head', '#text-bug', '#recipe-calc', '#asteroids', '#news-ping'], 150,
    {autoAlpha:0,ease:Power4.easeInOut,x:-100}, 
    {autoAlpha:1,ease:Power4.easeInOut,x:0}
 , 70);

if (width < 768) {
	var scene = new ScrollMagic.Scene({
    triggerElement: '#project-container',
    duration: 1300 
  })
  .setTween(tween)
  .addTo(controller);
}
else {
	var scene = new ScrollMagic.Scene({
	    triggerElement: '#project-container',
	    duration: 400 
	  })
	  .setTween(tween)
	  .addTo(controller);
	}
  


var showAboutMe = TweenMax.staggerFromTo(["#about-me-header", "#about-me-card"], 50,
	{autoAlpha:0,ease:Power4.easeInOut,x:-100}, 
    {autoAlpha:1,ease:Power4.easeInOut, x:0}, 
    10);

var scene = new ScrollMagic.Scene({
    triggerElement: '#about-me-container',
    duration: 300 
  })
  .setTween(showAboutMe)
  .addTo(controller);
  
 





var showContactMe = TweenMax.staggerFromTo(["#contact-header", ".row"], 50,
    {autoAlpha:0,ease:Power4.easeInOut, x:-100}, 
    {autoAlpha:1,ease:Power4.easeInOut, x:0}
 , 10);

var scene = new ScrollMagic.Scene({
    triggerElement: '#show-contact',
    duration: 200 
  })
  .setTween(showContactMe)
  .addTo(controller);
  
 





var moveWords = TweenMax.staggerFromTo(["#node", "#html", "#css3", "#redux", "#react", "#git", "#mongodb", "#express"], 500,
    {autoAlpha:0,ease:Power4.easeInOut, x:-500}, 
    {autoAlpha:1,ease:Power4.easeInOut, x:0}
 ,30);

var scene = new ScrollMagic.Scene({
    triggerElement: '#play-stagger-words',
    duration: 600 
  })
  
  .setTween(moveWords)
  .addTo(controller);
  
 





function scroller(event){
  var scrollYPos = $(event.data.id).offset().top;
  event.preventDefault();
  TweenMax.to(window, 2, {scrollTo:{y:scrollYPos, x:0}, ease:Power4.easeOut})
  }




$(".about-me-button").bind('click', { id: '#about-me-container' }, scroller);
$(".projects-button").bind('click', { id: '#project-container' }, scroller);
$(".contact-me-button").bind('click', { id: 'footer' }, scroller);
$(".button-collapse").sideNav();