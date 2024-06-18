let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll =()=> {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr = ScrollReveal({
    distance: '30px',
    duration: 2600,
    reset : true
})

sr.reveal('.home-text',{delay:200, origin:'bottom'})
// sr.reveal('.featured,.shop,.contact,.about',{delay:200, origin:'bottom'})