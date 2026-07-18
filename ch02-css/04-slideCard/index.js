var splide = new Splide(".splide-dating", {
  perPage: 5,
  perMove: 1,
  rewind: true,
  type: "loop",
  wheel: true,
  autoplay: true,
  breakpoints: {
    1280: {
      perPage: 4,
    },
    1024: {
      perPage: 3,
    },
    768: {
      perPage: 2,
    },
    512: {
      perPage: 1,
    },
  },
});
splide.mount();
