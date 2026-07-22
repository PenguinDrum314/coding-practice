$(function () {
  $(".navbar-toggler-icon").on("click", function () {
    $("#collapse").toggleClass("show");
  });
});

$(function () {
  $(".slider").slick({
    arrows: true,
    prevArrow: '<span class="prev-arrow"></span>',
    nextArrow: '<span class="next-arrow"></span>',
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(function () {
  $(".newsbox-q").on("click", function () {
    $(this).next().slideToggle();
  });
});

$(function () {
  const option = {
    threshold: 0.3,
  };
  const observer = new IntersectionObserver(doWhenIntersect, option);
  $(".inview_re").each(function () {
    observer.observe(this);
  });
  function doWhenIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target).addClass("is-show");
        observer.unobserve(entry.target);
      }
    });
  }
});
