// BURGER
let burger = document.querySelector('.header-wrapper__hamburger');
let menu = document.querySelector('.nav')
let menuLinks = menu.querySelectorAll('.header-list__item')

burger.addEventListener('click', function(){
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(elem){
  elem.addEventListener('click', function(){
    burger.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('stop-scroll')
  })
})
