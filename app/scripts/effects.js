(function () {
    'use strict';
    
    var mobileMenu = $('#mobile-nav'),
        mobileMenuPosition = parseInt(mobileMenu.css('left')),
        wrapper = $('#container-view'),
        wrPosition = $('#container-view').css('left'),
        toggleBtn = $('#btn-toggle'),
        duration = 1000;
    
    function showMenu() {
        mobileMenu.animate({left: 0}, duration);
        wrapper.animate({left: 200}, duration);
        mobileMenuPosition += 200;
    }
    
    function hideMenu() {
        mobileMenu.animate({left: -200}, duration);
        wrapper.animate({left: 0}, duration);
        mobileMenuPosition -= 200;
    }
    
    toggleBtn.on('click', function() {
        if( mobileMenuPosition == -200) {
            showMenu();
        }
        else{
            hideMenu();
        }
    });
    
    // TODO: fix left property after returning to normal view
	
}());