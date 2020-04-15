import React, { Component }      from 'react';
import { Head5_Center }          from '../styles/Head5_Center';
import Title                     from '../components/Title';
import FollowIcon                from '../components/Follow_Icon';


export default class Programming extends Component {

  render() {
    return (
      
      <section className="about"> 
        
        <div className="how-portfolio">
          
            <Title title="Programming" /><div>
          
            <Head5_Center>
              <div className="white-color">
                <div className="dark-gray-color">
                  Builds Windows Applications, Web Applications Using Visual Studio.
                </div>
              </div>
            </Head5_Center>
            
          </div>  

        </div>
        
      </section>
    );
  }

}