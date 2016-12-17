width = $(window).width();

var controller = new ScrollMagic.Controller();



var myPlane = TweenMax.from('#paper-plane', 300,
    {x: -width -50, y: +300});

var scene = new ScrollMagic.Scene({
    triggerElement: '#show-contact',
    duration: 300
  })
  .setTween(myPlane)
  .addIndicators()
  .addTo(controller);
  



var myName = TweenMax.fromTo('#my-name', 50,
    {css:{opacity:1}}, 
    {css:{opacity:0}});

var scene = new ScrollMagic.Scene({
    triggerElement: '#play-stagger-words',
    duration: 500
  })
  .setTween(myName)
  .addIndicators()
  .addTo(controller);
  





var moveWords = TweenMax.staggerFromTo(["#node", "#html", "#css3", "#redux", "#react", "#git", "#mongodb", "#express"], 500,
    {autoAlpha:0,ease:Power4.easeInOut, x:-500, y:-800}, 
    {autoAlpha:1,ease:Power4.easeInOut, x:0, y:-200}
 ,30);

var scene = new ScrollMagic.Scene({
    triggerElement: '#my-name',
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