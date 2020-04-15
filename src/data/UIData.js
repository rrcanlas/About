import React                          from 'react';
import { MdPhoneIphone, MdPhonelink } from "react-icons/md";
import { GiPerspectiveDiceThree}      from "react-icons/gi";
import { AiTwotoneSliders}            from "react-icons/ai";
import { FaHandHoldingHeart}          from "react-icons/fa";

export const uiData = [

	{
	    id: 1,
      icon:   <AiTwotoneSliders/>,
      title:  'Onboarding', 
      info: "An amazing  onboarding screen animation.",
      language:  'Designed using Adobe Xd', 
      youTube: "https://youtube.com/embed/OJ10IdpaNeQ",
      rel: "noopener noreferrer"
    },
    {
      id: 2,
      icon: <MdPhoneIphone/>,
      title: 'Interactive Menu',
      info: "A beautiful interactive menu.",
      language:  'Designed using Adobe Xd', 
      youTube: "https://youtube.com/embed/QlAt_M4jmj4",
      rel: "noopener noreferrer"
    },
    {
      id: 3,
      icon: <MdPhonelink/>,
      title: 'Restaurant',
      youTube: "https://youtube.com/embed/vPzOi8HClUE",
      info: 'First Xd design. A restaurant prototype', 
      language:  'Designed using Adobe Xd',
      rel: "noopener noreferrer"
    },
    {
      id: 4,
      icon: <FaHandHoldingHeart/>,
      title: 'Join the Journey',
      info: " Demonstrates the range of animation and video editing.", 
      language:  'Designed using Adobe Photoshop',     
      youTube: "https://youtube.com/embed/sKUXOFERxKU",
      rel: "noopener noreferrer"
    },
    {
      id: 5,
      icon: <GiPerspectiveDiceThree/>,
      title: 'Parallax',
      info: "An image that moves at a different speed than the foreground.", 
      language:  'Designed using Adobe Photoshop',     
      youTube: "https://youtube.com/embed/2rR7V1vxHMw",
      rel: "noopener noreferrer"
    }
]

