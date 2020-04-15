import React, { Component }      from 'react';
import { HashLink as Link }      from 'react-router-hash-link';
import ScrollUpButton            from 'react-scroll-up-button';
import { Butt  }                 from '../styles/Butt';
import { Head5 }                 from '../styles/Head5';
import Title                     from '../components/Title';
import FollowIcon                from '../components/Follow_Icon';
import { uxData }                from '../data/UXData';


export default class Front_End extends Component {
	
  state = {
    uxDatas: uxData
  };


  render() {
    return (
      
      <section id="up" className="about"> 
        
        <div className="how-portfolio">
          <div className="mar-top-title">
            <Title  title="Front-end" />
          </div>
            <Head5> 
          
                Equipped with the unique skills needed to build and 
                develop a variety of websites and applications. Constructing
                responsive websites using CSS, Flexbox and CSS Grid, develop 
                interactive websites and UI (User Interface) applications using 
                JavaScript and HTML, and connect a web application.
           
            </Head5>
            
             
              <div className="portfolio-center outer-portfolio">
                {this.state.uxDatas.map((item, index) => {
                  return (
                  <article key={index} className="portfolio">
                    <span className="icon-portfolio">{item.icon}</span>
                    <form className="nav-link">
                        <Butt className="btn-upper" type="submit">
                          <a className="fEnd-link" href={item.github} 
                            target="_blank" rel={item.rel}>  GITHUB
                          </a>
                        </Butt>
                        
                        <Butt className="btn-upper" type="submit">
                          <a className="fEnd-link" href={item.liveDemo} 
                            target="_blank" rel={item.rel}> LIVE DEMO
                         </a>
                         </Butt>
                      </form>
                    <h6 className="icon-portfolio">{item.title}</h6>
                    <p className="p-project">{item.info}</p>
                      
                    
                    <p className="icon-portfolio">{item.title2}</p>
                    <p className="p-ui">{item.languages}</p>
                  </article>
                  );
                })}
              </div>              
        </div>
        <ScrollUpButton />
      </section>
    
      
    );
  }

}