window.onscroll = function(){
    const header = document.querySelector('header');
    const navbarfixed = header.offsetTop;


    if(window.pageYOffset > navbarfixed){
        header.classList.add('navbar-fixed');
    }else{header.classList.remove('navbar-fixed');
    }
}


//button hamburger//
const hamburger =document.querySelector('#hamburger');
const navMenu =document.querySelector('#nav-menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('active');
  
navMenu.classList.toggle('hidden');

})