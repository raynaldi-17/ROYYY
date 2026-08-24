 const scrollup= document.querySelector(".scroll-up");

window.addEventListener
("scroll", () => {

    console.log(window.scrollY);


    if(window.scrollY > 500){
        scrollup.classList.add
        ("scroll-active");
    }else{
        scrollup.classList.remove
        ("scroll-active")
    }
})