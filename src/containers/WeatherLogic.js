import React from 'react';

import Weather from '../components/Weather'
import {connect} from 'react-redux'
import store from '../store'


class WeatherLogic extends React.Component{

  
    render(){
        
        return(
            <div>
             <Weather temp={this.props.weather.temparature}  />

            </div>
        );
    }
}

function mapStateToProps (state) {
    return{
        weather
      }
  }
  
  
  export default connect(mapStateToProps)(WeatherLogic); 