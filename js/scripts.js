/* var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("gray").getElementsByClassName("quote");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "flex";
} */


$(document).ready(()=>{
  $('.qoute-container').data('slideIndex',0);
  $('.qoute-container').children('.btn').on('click',event=>{
    let curIndex=$(event.currentTarget).parent().data('slideIndex');

    var $quotes=$(event.currentTarget).parent().find('.quote-content');
    $($quotes[curIndex]).fadeOut(300,()=>{
      if($(event.currentTarget).hasClass('left')){
        curIndex-=1;
      }
      else if($(event.currentTarget).hasClass('right')){
        curIndex+=1;
      }

      if(curIndex==-1){curIndex=$quotes.length-1;}
      else if(curIndex==$quotes.length){curIndex=0;}
      $($quotes[curIndex]).css('display','flex')
      .hide()
      .fadeIn(300);
      $(event.currentTarget).parent().data('slideIndex',curIndex);
    });
    //alert(slideIndex);

  });

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
  });

  $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('.header-menu .menu-icon').show();
            $('.header-menu .nav-menu').css({
              'flex-direction': 'column'
            })
        }
        else {
            $('.header-menu .menu-icon').hide();
            $('.header-menu .nav-menu').removeClass('visible').css({
              display: 'flex' ,
              'flex-direction': 'row'
            })
        }
    });
  $('.header-menu .menu-icon').on("click",event=>{

    $(event.currentTarget).parent().children('.nav-menu').toggleClass('visible');
  });

  $('.map').on('click',event=>{
    $(event.currentTarget).toggleClass('opened');

    $(event.currentTarget).children('.open-map').fadeToggle(1000);

  });

  $('.grid-container').children("div").on("mouseenter",event=>{
    $(event.currentTarget).find('img:first').css('opacity',0.3);
    $(event.currentTarget).find('.hidden-content').fadeIn(300);
  });
  $('.grid-container').children("div").on("mouseleave",event=>{
    $(event.currentTarget).find('img:first').css('opacity',1);
    $(event.currentTarget).find('.hidden-content').fadeOut(300);
  });

  $('.services-list .item').on('click',event=>{
    $(event.currentTarget).find('.btn-down').toggleClass('btn-rotate');
    $('.services-list .hidden-text').hide();
    $(event.currentTarget).next().slideToggle();
  });

  //Animation of gallery images
  $('.img-gallery .img-container').on('mouseenter',event=>{
    $(event.currentTarget).find('.content-span').fadeIn(300);
    $(event.currentTarget).addClass('active');
    $(event.currentTarget).find('img:first').css('opacity',0.3);

  });

  $('.img-gallery .img-container').on('mouseleave',event=>{
    $(event.currentTarget).find('.content-span').fadeOut(300);
    $(event.currentTarget).removeClass('active');
    $(event.currentTarget).find('img:first').css('opacity',1);
  });

  /////

  $('.bottom-nav-item').on('mouseenter',event=>{
    $('.header-bottom-nav').find('.bottom-nav-item').removeClass('selected');
    $(event.currentTarget).addClass('selected');
  });


});
