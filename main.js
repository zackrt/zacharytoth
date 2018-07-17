	jQuery(function($){
        let showMenu = false;
    $( '.menu-btn' ).click(function(){
        if (!showMenu) {
    		$('.responsive-menu').addClass('expand')
    		$('.menu-btn').addClass('btn-none')
        } else {
            $('.responsive-menu').removeClass('expand')
    		$('.menu-btn').removeClass('btn-none')
        }
        //showmenu starts false, changes to true on click, and the toggling of showMenu changes it between true & false. 
        showMenu = !showMenu;
    })	
});