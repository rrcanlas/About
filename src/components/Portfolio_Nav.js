import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLaptopCode, FaPaintBrush, FaDatabase} from 'react-icons/fa'
import Titl from './Titl';

export default class Portfolio_Nav extends Component {
	state={
		proc: [
		{
			icon: <FaLaptopCode/>,
			titl: 'Front-end',
			activeTab: 0,
		},
		{
			icon: <FaPaintBrush/>,
			titl: 'Graphic Design',
			activeTab: 1,
		},
		{
			icon: <FaDatabase/>,
			titl: 'Programming',
			activeTab: 2,
		  	}
		]
	}


	render() {
		return (
			
		  <section className="about"> 
		  	
				<div className="how-portfolio">
				  	
				  	  <div className="portfolio-center-nav">
				  	    {this.state.proc.map((item, index) => {
				  	    	return (
				  	    	<article key={index} className="portfolio-nav">
				  	    		<span className="nav-link">{item.icon}</span>
				  	    		<h6 className="nav-link">{item.titl}</h6>
				  	    		
				  	    	</article>
				  	    	);
				  	    })}
				  	  </div>
				</div>
		</section>
	    
		);
	}

}