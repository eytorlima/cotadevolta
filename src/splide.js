const splide = new Splide('.splide', {
  type: 'loop',
  drag: false,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  pagination: false,
  focus: 'center',
  perPage: 3,
  autoScroll: {
    speed: 0.35,
  },
});

splide.mount(window.splide.Extensions);
