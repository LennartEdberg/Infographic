$(window).load(function (){

    //Headern
    $('#headline-box').animate({
    'font-size':'50px',
    'line-height':'195px'}, 1000);

    //Första linjen
    $('.line-one').delay(250).animate({
        height: '150px',
        width: '100%'}, 1000);
    $('.arrow-left-blue').delay(350).fadeIn(1200)

    //Andra linjen
    $('.line-two').delay(750).animate({
        height: '250px',
        width: '100%'}, 1000);
    $('.arrow-right-green').delay(700).fadeIn(1200)

    //Tredje linjen
    $('.line-three').delay(1250).animate({
        height: '150px',
        width: '100%'}, 1000);
    $('.arrow-left-red').delay(1250).fadeIn(1200)

    //Fjärde linjen
    $('.line-four').delay(1750).animate({
        height: '250px',
        width: '100%'}, 1000);
    $('.arrow-right-white').delay(1750).fadeIn(1200)

    //Femte linjen
    $('.line-five').delay(2250).animate({
        height: '150px',
        width: '100%'}, 1000);
    $('.arrow-left-orange').delay(2250).fadeIn(1200)


    //Sjätte linjen
    $('.line-six').delay(2750).animate({
        height: '250px',
        width: '100%'}, 1000);
    $('.arrow-right-ligthgreen').delay(2750).fadeIn(1200)
});
