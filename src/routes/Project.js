
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } 					from 'react';
import 		  { Switch, Route, BrowserRouter } 	from 'react-router-dom';
import 		  { NavLink } 						from 'react-router-dom';
import 		  { FaThinkPeaks, 
		 	    FaThList, 
		 	    FaStackExchange, 
		 		FaPoll } 						from 'react-icons/fa';

import Front_End 								from '../components/Front_End';
import Graphic_Design 							from '../components/Graphic_Design';
import Programming 								from '../components/Programming';
import NaviProject 								from '../components/NaviProject';
import Title 									from '../components/Title';
import { Head5 } from '../styles/Head5';

export default class Project extends Component {
	render() {
			            
		          
		
	    return (
	      <BrowserRouter>
	      
	        <div>
		        <div className="project-img"></div> 

		  		<Head5>   
		  			<div className="pad3 h5-white-color">
		  			I’m currently working on creating an online portfolio. Until that is finished, 
		  			feel free to browse my work on GitHub.  Get in touch with me if you think I’d be a good fit 
		  			for your next project. I offer the following services:
		  			</div>
				</Head5>    

	          <NaviProject />
	          <Switch>
		        <Route exact path="/Front_End" 	activeClassName="active" 
		        								component={Front_End} 
		        								exact={true} />  
	            <Route path="/Graphic_Design"   component={Graphic_Design} /> 
	            <Route path="/Programming"   	component={Programming} />
	          </Switch> 
	           	                
	        </div>
	      </BrowserRouter>
	      
	    );
  	}	
}