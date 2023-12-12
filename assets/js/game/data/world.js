const forest1 = '/assets/images/jouer/elements/forest01.png',
  forest2 = '/assets/images/jouer/elements/forest02.png',
  rocks1 = '/assets/images/jouer/elements/rocks01.png',
  rocks2 = '/assets/images/jouer/elements/rocks02.png';

export const WORLD = {
  width: 2500,
  height: 1016,
  mapSrc: '/assets/images/jouer/map-md.png',
  animateIntroduction: false,
  hero: {
    x: 625,
    y: 254
  },
  characters: {
    scale: 0.8
  },
  cities: {
    scale: 0.7
  },
  area: {
    left: 0,
    top: -100,
    right: 3000,
    bottom: 1400
  },
  elements: [
    {
      src: forest2,
      width: 130,
      height: 110,
      x: 200,
      y: 440
    },
    {
      src: forest2,
      width: 130,
      height: 110,
      x: 550,
      y: 770
    },
    {
      src: forest1,
      width: 230,
      height: 160,
      x: 670,
      y: 710
    },
    {
      src: forest1,
      width: 230,
      height: 160,
      x: 1270,
      y: 550
    },
    {
      src: forest1,
      width: 230,
      height: 160,
      x: 1680,
      y: 370
    },
    {
      src: forest2,
      width: 130,
      height: 110,
      x: 1530,
      y: 390
    },
    {
      src: rocks1,
      width: 110,
      height: 90,
      x: 1990,
      y: 590
    },
    {
      src: rocks2,
      width: 140,
      height: 110,
      x: 1890,
      y: 590
    },
    {
      src: rocks1,
      width: 110,
      height: 90,
      x: 2315,
      y: 95
    },
    {
      src: rocks1,
      width: 110,
      height: 90,
      x: 2175,
      y: 150
    },
    {
      src: rocks2,
      width: 80,
      height: 65,
      x: 2255,
      y: 130
    },

    {
      src: rocks2,
      width: 130,
      height: 65,
      x: 980,
      y: 145,
      depthOffset: -45
    },
    {
      src: rocks2,
      width: 105,
      height: 85,
      x: 1180,
      y: 115,
      depthOffset: -15
    },
    {
      src: rocks1,
      width: 140,
      height: 110,
      x: 1060,
      y: 105,
    },
  ],
  collisions: {
    size: 32,
    visible: true,
    matrice: [
        '00000000000000000000000000000000000000000000000000000000000000000000000000000000', 
        '00000000000000000000000000000000000000000000000000000000000000000000000000000000', 
        '00000000000000000000000000000000000000000000000000000000000000000000111110000000', 
        '00000000000000000000000000000000000000000000000000000000000000011111111111100000', 
        '00000000000000000000000000000000000000000000000000000000000001111111111000000000', 
        '00000000000000000000000000000000000000000000000000000000000011111111100000000000', 
        '00000000000000000000000000000000000000000000000000000001111111111111100000000000', 
        '00000000011110000000000000001111111111111111111111111111111111111111000000000000', 
        '00000000111111111111110001111111111111111111111111111111111111111111111000000000', 
        '00000000111111111111111111111100000000111111111111111111111111111111110000000000', 
        '00000001111111111111111111111000000000000111111111111111111111111111100000000000', 
        '00000011111111111111111111111000000000000111111111111111111111111111000000000000', 
        '00000111111111111111111111111000000000000011111111111111111111111111000000000000', 
        '00001111111111111111111111111111111000000111111111111111111111111111000000000000', 
        '00001111111111111111111111111111111111111111111100011000000111111111000000000000', 
        '00001111111111111111111111111111111111111111111111111100000111111111000000000000', 
        '00001111111111111111111111111111111111111111111111111111111111111111000000000000', 
        '00011111111111111111111111111111111111111111111111111111111111111111000000000000', 
        '00011000001111111111111111111111111111111111111111111111111111111111110000000000', 
        '00000000001111111111111111111111111111111111111111111111111111111111000000000000', 
        '00000000000111111111111111111111111111110000001111111111110000000000000000000000', 
        '00000000000011111111111111111111111111110000001111001111100000000000000000000000', 
        '00111111000001111111111111111111111111110000001111000000000000000000000000000000', 
        '00111111100011111111111111111111111111110000000000000000000000000000000000000000', 
        '00111111111111111111111111111111111111110000000000000000000000000000000000000000', 
        '00111111111111111111110000011111111111110000000000000000000000000000000000000000', 
        '00111111111111111100000000001111111111000000000000000000000000000000000000000000', 
        '00111111111111111100000011111100000011000000000000000000000000000000000000000000', 
        '00111111111111000000000000000000000000000000000000000000000000000000000000000000', 
        '00111111111111000000000000000000000000000000000000000000000000000000000000000000', 
        '00000000000000000000000000000000000000000000000000000000000000000000000000000000', 
        '00000000000000000000000000000000000000000000000000000000000000000000000000000000', 
        '00000000000000000000000000000000000000000000000000000000000000000000000000000000', 
        '00000000000000000000000000000000000000000000000000000000000000000000000000000000', 
        '00000000000000000000000000000000000000000000000000000000000000000000000000000000', 
        '00000000000000000000000000000000000000000000000000000000000000000000000000000000', 
        '00000000000000000000000000000000000000000000000000000000000000000000000000000000', 
        '00000000000000000000000000000000000000000000000000000000000000000000000000000000'
    ]
  }
}