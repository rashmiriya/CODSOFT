// custom script

// header scroll

let nav = document.querySelector(".navbar");
window.onscroll = () => {
    console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach((a)=>{
    a.addEventListener('click', ()=>{
        navCollapse.classList.remove('show')
    })
})