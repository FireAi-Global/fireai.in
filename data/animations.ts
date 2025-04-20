export const animations = {
  fadeInUp: {
    animate: {
      opacity: [0, 1],
      y: [10, 0],
    },
    transition: {
      duration: 1,
      easing: "ease-in-out",
    },
  },
  marquee: {
    animate: {
      x: [0, -1035], // Adjust this value based on your content width
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      easing: "linear",
    },
  },
};
