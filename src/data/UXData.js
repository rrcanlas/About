import React, { Component }      from 'react';
import { MdTabletMac, MdGridOn } from "react-icons/md";
import { GiConsoleController, 
         GiOBrick               }from "react-icons/gi";

export const uxData = [
{
	  id: 1,
      icon:   <GiConsoleController/>,
      title:  'Arcade Game', 
      info: "Consists of 1 player and bugs. The goal of the game is to cross the road to reach the water, without bumping into any of the bugs, using the arrow keys to move the player. The score goes back to zero when the player collides to the bug.",      
      github: "https://github.com/rrcanlas/ArcAde-gAme",
      title2: "Languages:",
      languages: "HTML, CSS, JavaScript",
      liveDemo: "https://rrcanlas.github.io/ArcAde-gAme/",
      rel: "noopener noreferrer"
    },
    {
      id: 2,
      icon: <MdGridOn/>,
      title: 'Memory Game',
      info: "On the game board, there are always two identical images. Start the game by flipping a card. Then try to find another card that has the same image as the first. If you can't find a pair, the flipped cards will be flipped back with the face down. When you find a pair they are removed from the board and when you find all the pairs in this memory, you have completed the level.",
      github: "https://github.com/rrcanlas/MeMory-gaMe",
      title2: "Languages:",
      languages: "HTML, CSS, JavaScript",
      liveDemo: "https://rrcanlas.github.io/MeMory-gaMe/",
      rel: "noopener noreferrer"
    },
    {
      id: 3,
      icon: <MdTabletMac/>,
      title: 'Mock-Up',
      github: "https://github.com/rrcanlas/moCkUp-tO-artiCle",
      title2: "Languages:",
      languages: "HTML, CSS",
      liveDemo: "https://rrcanlas.github.io/moCkUp-tO-artiCle/",
      info: "HTML and CSS represent the languages at the core of the web, acting as the foundation of front-end development. This is a converted digital design mockups into static web pages with page layout break down  into page elements and utilizes responsive design techniques.",
      rel: "noopener noreferrer"
    },
    {
      id: 4,
      icon: <GiOBrick/>,
      title: 'Pixel Art Maker',
      info: "For creating pixel art. It's fun, easy to use, and it's simple to get started - even if you've never made pixel art before. Can only be viewed on Desktop.",      
      github: "https://github.com/rrcanlas/piXel-aRt-maKeR",
      title2: "Languages:",
      languages: "HTML, CSS, JavaScript",
      liveDemo: "https://rrcanlas.github.io/piXel-aRt-maKeR/",
      rel: "noopener noreferrer"
    }
]