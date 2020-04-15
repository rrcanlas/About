import React, { Component } from 'react';
import { NavLink } 			from 'react-router-dom';

import styled 				from 'styled-components';

import { Butt } 			from '../styles/Butt';
import { CrNv } 			from '../styles/CrNv';
import { FaAlignRight} 		from 'react-icons/fa';
import { FaLaptopCode, FaPaintBrush, FaDatabase} from 'react-icons/fa'


export default class NaviProject extends Component {
	render() {
		{/*
        https://www.iconfinder.com/icons/10496/poll_icon */}
  
		return (
			<section>
				<div className="nav-project"></div>	        
		          <div className="container">
		           <div className="row">
		          	<div className="col-10 mx-auto col-md-6 mt-2  mar-bot-proj"> 
		          	
					  <CrNv className="navbar navbar-expand-sm px-sm-5">
						<ul className="navbar-nav mx-auto align-items-center ">
								
							<li className="nav-item">
								<li className="nav-item pad2">
									<span className="icon-follow"><FaLaptopCode size={25}/></span>
								</li>

								<NavLink exact to="/Front_End" className="nav-link" activeClassName="nav-active">
									UX Design
								</NavLink>
							</li>
								
							<li className="nav-item">
								<li className="nav-item pad2">
									<span className="icon-follow"><FaPaintBrush size={25}/></span>
								</li>
								
								<NavLink exact to="/Graphic_Design" className="nav-link" activeClassName="nav-active">
									UI Design
								</NavLink>
							</li>
								
							<li className="nav-item">
								<li className="nav-item pad2">
								<span className="icon-follow"><FaDatabase size={25}/></span>
								</li>
								
								<NavLink exact to="/Programming" className="nav-link" activeClassName="nav-active">
									Programming
								</NavLink>
							</li>
						</ul>	
					  </CrNv>	
				    
				    </div>
				  </div> 
				 </div>
			</section>
		);
	}
}