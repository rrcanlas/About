import React, { Component } from 'react';
import { Foos } from '../styles/Foos';
import FollowIcon           from '../components/Follow_Icon';

export default class Footer extends Component {
	
	

	render() {
	    return (
	
		<Foos>
		
			<div>
				<div className="icon ">
          			<FollowIcon />
        		</div>
				<div className="copyright">copyright &copy; <span className="year">2020</span> Portfolio | all rights reserved</div>
  			</div>
		
		</Foos>
	);
}
}