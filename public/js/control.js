var isGameDestroyed = false,
	width = $(window).width();
console.log(width);

var controller = new ScrollMagic.Controller();

var tween = TweenMax.staggerFromTo(['#project-head', '#text-bug', '#recipe-calc', '#asteroids', '#news-ping'], 5,
    {autoAlpha:0,ease:Power4.easeInOut,x:-100}, 
    {autoAlpha:1,ease:Power4.easeInOut,x:0}
 , 1);

if (width < 768) {
	var scene = new ScrollMagic.Scene({
    triggerElement: '#project-container',
    duration: 1000 
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
  

scene.addIndicators();

var showAboutMe = TweenMax.staggerFromTo(["#about-me-header", "#about-me-card"], 5,
	{autoAlpha:0,ease:Power4.easeInOut,x:-100}, 
    {autoAlpha:1,ease:Power4.easeInOut, x:0}, 
    4);

var scene = new ScrollMagic.Scene({
    triggerElement: '#about-me-container',
    duration: 300 
  })
  .setTween(showAboutMe)
  .addTo(controller);
  
 
scene.addIndicators();




var showContactMe = TweenMax.staggerFromTo(["#contact-header", ".row"], 5,
    {autoAlpha:0,ease:Power4.easeInOut, y:+100}, 
    {autoAlpha:1,ease:Power4.easeInOut, y:0}
 , 1.5);

var scene = new ScrollMagic.Scene({
    triggerElement: '#contact-container',
    duration: 200 
  })
  .setTween(showContactMe)
  .addTo(controller);
  
 
scene.addIndicators();




var moveWords = TweenMax.fromTo(["#node", "#html", "#css3", "#redux", "#react", "#git", "#mongodb", "#express"], 5,
    {autoAlpha:0,ease:Power4.easeInOut, y:+400}, 
    {autoAlpha:1,ease:Power4.easeInOut, y:-300}
 );

var scene = new ScrollMagic.Scene({
    triggerElement: '#my-name',
    duration: 400 
  })
  .setPin('#my-name')
  .setTween(moveWords)
  .addTo(controller);
  
 
scene.addIndicators();




function scroller(event){
  var scrollYPos = $(event.data.id).offset().top;
  event.preventDefault();
  TweenMax.to(window, 2, {scrollTo:{y:scrollYPos, x:0}, ease:Power4.easeOut})
  }




$("#about-me-button").bind('click', { id: '#about-me-container' }, scroller);
$("#projects-button").bind('click', { id: '#project-container' }, scroller);
$("#contact-me-button").bind('click', { id: 'footer' }, scroller);

