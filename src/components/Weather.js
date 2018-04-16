import React from 'react'
import { getweather } from '../actions/actions';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Weather extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="container" > 
        <h3> weather report ! </h3>
        <div className="row" > 
          <input type="text" placeholder="enter city name" ref="input_city" />
          <button onClick={()=> {this.props.getweather(this.refs.input_city.value)} } > Get weather </button>
        </div>
        <div className="row" > 
            Temparature is: {this.props.temp}
        </div>
       
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({getweather},dispatch);
  }

export default connect(() => {return {}; } , mapDispatchToProps)(Weather);

