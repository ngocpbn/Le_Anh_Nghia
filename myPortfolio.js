const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.leftOfNav');
    const navLinks = document.querySelectorAll('.leftOfNav a')


    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) =>{
            //index is for easily animating the delay btwn each
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = 'leftOfNavFade 1.5s ease forwards';
            }

        });

        //burger animation
        burger.classList.toggle('toggle');

    });
    

}

navSlide();