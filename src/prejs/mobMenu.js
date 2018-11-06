+function(){
   let mobBtn = document.querySelector('.mob__btn');
   let mobNav = document.querySelector('.mob__nav');
   let heightNav;


   mobBtn.addEventListener('click', function(){
     heightNav = mobNav.offsetHeight;
   
        if(heightNav < 1) {
            mobNav.style.height = '240px';
        }
        else {
            mobNav.style.height = '0px';
        }
   })
}();




