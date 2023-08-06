
// window.addEventListener('header-scrolled', fixNavbar);

// function fixNavbar() {
//   var navbar = document.getElementsByClassName('.navbar');
//   var sticky = navbar.offsetTop;
  
//   if(document.documentElement.scrollTop > 100) {
//     navbar.classList.add('header-scrolled');
//   } else {
//     navbar.classList.remove('header-scrolled');
//   }
// }


//Header Scroll
// let nav=document.querySelector(".navbar");
// window.onscroll=function(){
//     if(document.documentElement.scrollTop > 100)
//     {
//         nav.classList.add("header-scrolled");
       
//     } else{
//         nav.classList.remove("header-scrolled");
//     }
// }

//nav hide
let navBar = document.querySelectorAll( ".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");

    })
})