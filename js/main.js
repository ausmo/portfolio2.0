$(document).ready(function(){

    let $btns = $('.project-area .button-group button')

    $btns.click(function(e){

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter:selector
        });

        return false;

    })

    // sticky navbar

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed(){
        if($('.header-area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){
                    $('.header_area .main-menu').addClass('navbar_fixed')
                }else{
                    $('.header_area .main-menu').removeClass('navbar_fixed')
                }
            })
        }
    }

    navbarFixed();
});