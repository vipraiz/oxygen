$(function () {
  $('[href^="#"]').on('click', function () {
    let href = $(this).attr('href'),
      elem = $(document).find(href);
    if (elem.length > 0) {
      let posY = elem.eq(0).offset().top;
      $('html, body').animate(
        {
          scrollTop: posY,
        },
        1000
      );
    }
    return false;
  });

  $('.menu-btn').on('click', function () {
    $('.menu').toggleClass('active');
  });

  $('.expertise__content-progress-line').each(function () {
    let val = $(this).data('value');
    $(this).css('width', val + '%'),
      $(this)
        .children('.progress-value')
        .html(val + '%');
  });

  $(window).on('scroll', function () {
    parallax($(this).scrollTop());
  });

  $('.portfolio__top-btn').on('click', function () {
    $('.portfolio__top-btn').each(function () {
      $(this).removeClass('portfolio__top-btn--active');
    });
    $(this).addClass('portfolio__top-btn--active');
  });

  $('.slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
  });
});

function parallax(top) {
  $('.header__content-inner').css(
    'background-position-y',
    +top / 2 - 94 + 'px'
  );
}

$(function () {
  var $videoContainer = $('#video'),
    $videoControls = $('.video-control'),
    $video = $('#myVideo')[0];

  $videoControls.on('click', function () {
    if ($video.paused) {
      $video.play();
      $videoContainer.addClass('video-is-playing');
    } else {
      $video.pause();
      $videoContainer.removeClass('video-is-playing');
      //  возвращаем постер
      $video.load();
    }
  });
});
