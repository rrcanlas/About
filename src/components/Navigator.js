import React, 
	   { Component }       	from 'react';
import { NavLink } 			from 'react-router-dom';
import { Butt } 			from '../styles/Butt';
import { Navs } 			from '../styles/Navs';
import { IoIosMenu } 		from 'react-icons/io'
import logo   				from '../portfolio.png';
import styled 				from 'styled-components';

export default class Navigator extends Component {
	state={
		isOpen: false
	}
	handleToggle =() =>{
		this.setState({isOpen:!this.state.isOpen})
	}
	render() {
		{/*
        https://www.iconfinder.com/icons/10496/poll_icon */}
  
		return (
			<Navs className="navbar sticky-top navbar-expand-sm px-sm-5">
				
				<NavLink to="/About">
					<img src={logo} alt="rrcanlas" className="navbar-brand" />
				</NavLink>
				
				<button type="button" className="nav-btn" onClick={this.handleToggle}>
					<IoIosMenu className="nav-icon"/>
				</button>
				<ul className={this.state.isOpen? "nav-links show-nav":"nav-links"}>
					<li className="nav-item ml-5">
						<NavLink exact to="/About" className="nav-link" activeClassName="nav-active">
							About
						</NavLink>
					</li>
					<li className="nav-item ml-5">
						<NavLink exact to="/Project" className="nav-link" activeClassName="nav-active">
							Project
						</NavLink>
					</li>
					<li className="nav-item ml-5">
						<NavLink exact to="/Follow" className="nav-link" activeClassName="nav-active">
								Follow
						</NavLink>
					</li>
					
					
				</ul>	

				<NavLink to="/Blog" className="ml-auto">
					<Butt>
						Blog
					</Butt>
				</NavLink>

				<div>         

          </div>	
			</Navs>

		);
	}
}





