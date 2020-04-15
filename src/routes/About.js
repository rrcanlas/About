import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ScrollUpButton 		from 'react-scroll-up-button';

import { Butt  } 			from '../styles/Butt';
import { Head3 } 			from '../styles/Head3';
import { Head4 } 			from '../styles/Head4';

import Information 			from '../components/Information';

export default class About extends Component {
	render() {
		return (

		<section>
		  <div className="about-img"></div>	        
	        <div className="container">
	          <div className="row">
	            <div className="col-10 mx-auto col-md-8  mar-top-about">	             
	              <Head4 className="text-center mt-n5 h5-white-color"> 

	              Hi, I'm Rose, a passionate interface  <br /> 
	              and experience designer from the <br />
	              Philippines, now living in Renton, Washington. <br />
	              This is my personal website.
	              </Head4> 
	              <div className="btn-upper text-center">
	                <form>            
	                  <Butt className="btn-upper" type="submit"> 
	                  <Link className="fEnd-link" to="About#about">Learn more</Link>
	                  </Butt>
	                </form>       
	              </div>                      
	            </div>
	          </div>
	        </div>
	        <Information /> 
	        <ScrollUpButton />	         
	    </section>
	   
		);
	}
}