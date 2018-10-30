

$(document).ready(()=>{
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
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
    $(event.currentTarget).next().slideToggle();
  });

  //Animation of gallery images
  $('.img-gallery .img-container').on('mouseenter',event=>{
    $(event.currentTarget).find('.content-span').fadeIn(300);
    $(event.currentTarget).animate({
      left:'-10px',
      top:'-10px',
    },100).addClass('active');
    $(event.currentTarget).find('img:first').css('opacity',0.3);

  });

  $('.img-gallery .img-container').on('mouseleave',event=>{
    $(event.currentTarget).find('.content-span').fadeOut(300);
    $(event.currentTarget).animate({
      left:'0px',
      top:'0px',
    },1).removeClass('active');
    $(event.currentTarget).find('img:first').css('opacity',1);
  });

  /////

  $('.bottom-nav-item').on('mouseenter',event=>{
    $('.header-bottom-nav').find('.bottom-nav-item').removeClass('selected');
    $(event.currentTarget).addClass('selected');
  });


});
