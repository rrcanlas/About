import React, { Component } from 'react';
import Title				from '../components/Title';
import { infoData }         from "../data/infoData";
import { Head5 } 			from '../styles/Head5';

export default class Information extends Component {
	
	state = {
    	infoDatas: infoData
  	};
  	editUser = () => {
  		this.props.navigation.navigate("Front-End");
      };
	render() {
		return (
			
		  <section id="about" className="about"> 
		  	
		  	<div className="how-about sect-more light-color">

		  	<Title title="A little more about Me" />  	  

		  	    <Head5>
		  	    	<div className="light-color">
			  	        Experienced Web Developer with a demonstrated history of working in the non-profit
			  	    	organization management industry. Skilled in User Experience (UX), CMS - WordPress, 
			  	    	User Interface Design, Web Design, and HTML. Alumni of the Grow with Google Developer Scholarship in 2018 and have 
			  	    	completed Udacity's Front-End Developer nanodegree. 
		  	    	</div>
		  	    </Head5>

		  		<Head5> 
		  			<div className="light-color">  
			  			I’m currently working on creating an online portfolio. Until that is finished, 
			  			feel free to browse my work on GitHub.  Get in touch with me if you think I’d be a good fit 
			  			for your next project. I offer the following services:
			  		</div>
				</Head5>    
		  		   
		  		<Head5>	
		  			<div className="light-color">	
		  				Website design, Front-end development and Software development <br />	
		  			</div>		
		  		</Head5> 
				
		  	  </div>	

			  <div className="how-portfolio">
			  	<Title title="portfolio" />
			  	  <div className="portfolio-center">
			  	    {this.state.infoDatas.map((item, index) => {
			  	    	return (
			  	    	<article key={index} className="portfolio">
			  	    		<span className="icon-portfolio">{item.icon}</span>
			  	    		<h6 className="icon-portfolio">{item.titl}</h6>
			  	    		<p>{item.deta}</p>
			  	    	</article>
			  	    	);
			  	    })}
			  </div>
			  
			</div>

		  </section>
	    
		);
	}
}