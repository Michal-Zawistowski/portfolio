$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
            $('.about .about-content .left img').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
            $('.about .about-content .left img').removeClass("show");
        }
        if(this.scrollY > 1650){
            $('.skills .skills-content .right span').addClass("show");
        }else{
            $('.skills .skills-content .right span').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing",{
        strings: ["Jr Frontend Developer", "Student", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: ["Jr Frontend Developer", "Student", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
})