
import { MdPictureAsPdf } 									from 'react-icons/md'
import { TiSocialInstagram } 								from 'react-icons/ti'
import { FaGithubSquare, FaLinkedin, FaGooglePlusSquare } 	from 'react-icons/fa'
import React, { Component } 								from 'react';
import resume		from "../images/resume.pdf";



export const followData = [

	{
		id:1,
		img: "g0McYsMx/linkedin",
		name: "LinkedIn",
		source_url: "https://www.linkedin.com/in/rrcnlas/" ,
		source_icon: <FaLinkedin size={25}/>,
		rel: "noopener noreferrer",
		detail: "Here's my professional portfolio."
		},
	{
		id:2,
		img: "yN6Y4tTq/github-logo",
		name: "GitHub",
		source_url: "https://github.com/rrcanlas",
		source_icon: <FaGithubSquare size={25}/>,
		rel: "noopener noreferrer",
		detail: " Where I publish my open-source development projects."
	},
	{
		id:3,
		img: "26Vk3WJ2/google-plus",
		name: "Gmail",
		source_url: "mailto:rrbgc0512@gmail.com",
		source_icon: <FaGooglePlusSquare size={25}/>,
		rel: "noopener noreferrer",
		detail: "Have any questions or just want to chat? Shoot me an email."
	},
	{

 

		id:5,
		img: "Pf0xp6dZ/curriculum-vitae",
		name: "Curriculum-Vitae", 
		source_url: "https://rrcanlas.github.io/rrcResume/image/rrc-resume.pdf",
		source_icon: <MdPictureAsPdf size={25}/>,	
		rel: "noopener noreferrer",
		detail: "Represents my background, skills, and accomplishments."	

	},
	{
		id:4,
		img: "sxW34r3W/instagram",
		name: "Instagram",
		source_url: "https://www.instagram.com/web.designer.wa/",
		source_icon: <TiSocialInstagram size={25}/>,
		rel: "noopener noreferrer",
		detail: "Just random pictures."
	}
]