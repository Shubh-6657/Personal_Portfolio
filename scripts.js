const navbar=document.querySelector(".navbar");
const navbaroffsetTop=navbar.offsetTop;
const sections=document.querySelectorAll("sections");
const navbarLinks=document.querySelectorAll(".navbar-link");

window.addEventListener("scroll",()=>{   
    if(window.pageYOffset >= navbaroffsetTop){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }

    sections.forEach((section,i) => {
        if(window.pageYOffset >=section.offsetTop - 10){
            navbarLinks.forEach(navbarLink =>{
                navbarLink.classList.remove("change");
            })
            navbarLinks[i].classList.add("change");
        }
    });
});