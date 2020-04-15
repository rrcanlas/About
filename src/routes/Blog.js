import React, { Component } from 'react';
import { Butt } from '../styles/Butt';
import { Head3 } from '../styles/Head3';
import { Head4 } from '../styles/Head4';

export default class Blog extends Component {
	render() {
		return (
			<section>
			  <div className="project-img"></div>	        
		        <div className="container">
		          <div className="row">
		            <div className="col-10 mx-auto col-md-8 mt-4">
		              <Head3 className="text-center text-capitalize">Blog</Head3> 
		              <Head4 className="text-center text-capitalize"> I have something special coming up. Please check back soon</Head4>                  
		            </div>
		          </div>
		        </div>
		    </section>
		);
	}
}