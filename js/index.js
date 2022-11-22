// BURGER
let burger = document.querySelector('.header-wrapper__hamburger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.header-list__item');

burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (elem) {
  elem.addEventListener('click', function () {
    burger.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('stop-scroll');
  });
});

// TABS
let tabsBtn = document.querySelectorAll('.work-list__item');
let tabsItem = document.querySelectorAll('.work-wrapper');

tabsBtn.forEach(function (elem) {
  elem.addEventListener('click', function(e){
    const step = e.currentTarget.dataset.step;

    tabsBtn.forEach(function(btn){
      btn.classList.remove('active');
    });
    e.currentTarget.classList.add('active');

    tabsItem.forEach(function(elem){
      elem.classList.remove('active');
    });
    document.querySelector(`[data-work="${step}"]`).classList.add('active');
  });
});
