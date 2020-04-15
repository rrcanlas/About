import React, { Component } from 'react';
import { Head5 } 			from '../styles/Head5';
import { Head4} 			from '../styles/Head4';
import Title				from '../components/Title';
import { followData } 		from "../data/followData";

export default class Follow extends Component {
	
	state = {
		follows: followData
	};

	render() {
	    return (	    
	      <section> 
	      	<div className="follow-img follow"></div> 	        
	        <div className="how-portfolio">
	        	<div className="h5-white-color">
	          		<Title title="Follow Me" />
	          	</div>
	            <div className="pad-bot">
		          	<Head5>
		          		<div className="h5-white-color margin-bottom">   
		          			Want to chat about interactive web development?
		          			I’d love to hear from you. Drop me a line via email or your preferred social media platform.
		          		</div>
		          	</Head5> 	
				</div>
                <ul>
            	  {this.state.follows.map((item, index) => {
              		return (
              		  <li key={index}>
              			
              			<Head5>
              				<a className="nav-link p-project" href={item.source_url} 
		    			   		target="_blank" rel={item.rel}> {item.name}                          
                        	</a>   
              		    		<div className="h5-white-color"> 
              		    			{item.detail}
              		    		</div>
              		    	</Head5>  
              		       	          		
              		  </li>
              		);
            	  })}
                </ul>      
	        </div>	        
	      </section>	       	                	       	      
		);
  	}
}