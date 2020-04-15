
import React, { Component }      from 'react';
import ScrollUpButton            from 'react-scroll-up-button';
import { HashLink as Link }      from 'react-router-hash-link';
import Title                     from '../components/Title';
import FollowIcon                from '../components/Follow_Icon';
import { Head5 }                 from '../styles/Head5';
import { Butt  }                 from '../styles/Butt';
import { uiData }                from '../data/UIData';

export default class Graphic_Design extends Component {
  
  state = {
    uiDatas: uiData
  };

  render() {
    return (
      
      <section className="about"> 
        
        <div className="how-portfolio">
            <div className="white-color">
              <Title title="Graphic Design" />
                <div>
            </div>
              <Head5>  
                <div className="white-color pad-bot">
                  Captures attention with beautiful, high-impact visuals. 
                  Creates image manipulation effects and graphic design 
                  work for web, desktop, and mobile.
                </div>
              </Head5>
              
            </div>  
              <div id="up" className="portfolio-center-nav">
                {this.state.uiDatas.map((item, index) => {
                  return (
                  <article key={index} className="portfolio-nav">
                    <span className="icon-portfolio ">{item.icon}</span>
                    <h6 className="icon-portfolio ">{item.title}</h6>
                     <p className="p-ui">{item.info}</p>
                    <iframe className="nav-link" 
                      src={item.youTube}>
                    </iframe>
                    <p className="p-ui">{item.language}</p>
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