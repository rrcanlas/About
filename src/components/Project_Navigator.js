import React, 
	   { Component }       	from 'react';
import { NavLink } 			from 'react-router-dom';
import { Butt } 			from '..styles/Butt';
import { Navs } 			from '../styles/Navs';
import { FaAlignRight } 	from 'react-icons/fa'
import logo   				from '../portfolio.png';
import styled 				from 'styled-components';


export default class Project_Navigator extends Component {
	render() {
		{/*
        https://www.iconfinder.com/icons/10496/poll_icon */}
  
		return (
			<Navs className="navbar sticky-top navbar-expand-sm px-sm-5">
				
				<NavLink to="/">
					<img src={logo} alt="rrcanlas" className="navbar-brand" />
				</NavLink>

				<ul className="navbar align-items-center">
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

				<NavLink to="/Search" className="ml-auto">
					<Butt>
						Search
					</Butt>
				</NavLink>

				<NavLink exact to="/" className="nav-link ml-5" activeClassName="nav-active">
						Burger
				</NavLink>
					
			</Navs>
		);
	}
}





