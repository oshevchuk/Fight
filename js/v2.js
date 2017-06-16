/**
 * Created by Oshevchuk on 14.06.2017.
 */
$('.layer-5').hover(function () {

    $('.layer-4').css('width', '10%');
    $('.layer-4').css('right', '38%');
}, function () {
    $('.layer-4').css('width', '');
    $('.layer-4').css('right', '');
});

$('.layer-1').hover(function () {
    // $('.m1').css('opacity', '1');
    $('.m1').show(100);
}, function () {
    // $('.m1 ').css('opacity', '');
    $('.m1').hide(0);
});

$('.l1').hover(function () {
    $('.layer-2').css('width', '5%');
    $('.layer-2').css('left', '37%');
    $('.m1').show();
}, function () {
    $('.layer-2').css('width', '');
    $('.layer-2').css('left', '');
});

$('.layer-2').hover(function () {
    $('.m2').show(100);
}, function () {
    $('.m2').hide(0);
});


$('#l2').hover(function () {
    $('.layer-2').css('width', '33%');
    $('.layer-2').css('left', '8%');
    $('.m2').show();
}, function () {
    $('.layer-2').css('width', '');
    $('.layer-2').css('left', '');
});

$('#l4').hover(function () {
    $('.layer-4').css('width', '32%');
    $('.layer-4').css('right', '12%');
    $('.m4').show();
}, function () {
    $('.layer-4').css('width', '');
    $('.layer-4').css('left', '');
});

$('#l5').hover(function () {
    $('.layer-4').css('width', '10%');
    $('.layer-4').css('right', '38%');
    $('.m5').show();
}, function () {
    $('.layer-4').css('width', '');
    $('.layer-4').css('left', '');
});

$('.layer-4').hover(function () {
    $('.m4').show(100);
}, function () {
    $('.m4').hide(0);
});

$('.layer-5').hover(function () {
    $('.m5').show(100);
}, function () {
    $('.m5').hide(0);
});



