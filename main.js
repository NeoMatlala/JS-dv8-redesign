/* ----- SHOW SCROLL TOP ----- */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll') 
}

window.addEventListener('scroll', scrollTop)

/* ----- CHANGE HEADER'S BACKGROUND ----- */
function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 150) header.classList.add('scroll-header'); else header.classList.remove('scroll-header') 
}

window.addEventListener('scroll', scrollHeader)


/* SHOW ACTIVE LINK */
/*const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length

/*for( let i = 0; i < menuLength; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = "active-link"
    }
}
*/

/*console.log(currentLocation)
console.log('neo matlala')*/