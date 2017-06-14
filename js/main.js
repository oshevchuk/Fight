/**
 * Created by Oshevchuk on 13.06.2017.
 */

$( document ).ready(function() {
    console.log( "ready!" );
    $('.preloader').delay(200).queue(function () {
        $('.preloader').hide();
        // $('.preloader').fadeIn(300);

        $('.mask').show();
        $('.home').show();
    });
});

