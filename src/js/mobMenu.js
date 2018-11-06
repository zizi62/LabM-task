"use strict";

+function () {
  var mobBtn = document.querySelector('.mob__btn');
  var mobNav = document.querySelector('.mob__nav');
  var heightNav;
  mobBtn.addEventListener('click', function () {
    heightNav = mobNav.offsetHeight;

    if (heightNav < 1) {
      mobNav.style.height = '240px';
    } else {
      mobNav.style.height = '0px';
    }
  });
}();