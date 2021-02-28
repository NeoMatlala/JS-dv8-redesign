
/* ----- CHANGE HEADER'S BACKGROUND ----- */
function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 150) header.classList.add('scroll-header'); else header.classList.remove('scroll-header') 
}

window.addEventListener('scroll', scrollHeader)
