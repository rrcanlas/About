import React, { Component } from 'react';
import { followData } from "../data/followData";

export default class Follow_Icon extends Component {
	
	state = {
		follows: followData
	};

	render() {
	    return (
	      <section> 	        
	        <div className="nav-project"></div>	        
		    <div className="container">
		      <div className="row">
		        <div className="col-10 mx-auto col-md-3 mt-2"> 
		          	<div className='moda-foot'>				  
		                <ul className="nav-icons">
		            	  {this.state.follows.map((item, index) => {
		              		return (	              		
		              		  <li key={index} className="nav-item">
								<a className="icon-link" href={item.source_url} 
				    			   target="_blank" rel={item.rel}> {item.source_icon}                          
		                        </a>     		  	                 		
		              		  </li>
		              		);
		            	  })}
		                </ul>
				    </div>
			  	</div>
			  </div>	
			  </div>
	      </section>	       	      
		);
  	}
}