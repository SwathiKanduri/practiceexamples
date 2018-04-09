import React from 'react';

// import {addElem, clear,equals} from '../actions/actions'
import Calculator from '../components/Calculator'
import {connect} from 'react-redux'
import store from '../store'
// import Reducer from '../reducers/reducer'


class CalcLogic extends React.Component{

    
    render(){
      
        return(
            <div>
                <div className="row" > Calculator </div> <br/>
                <div className="row text-center" >
                 <input type="text" readOnly="readonly" value={this.props.value} /> 
                </div>  <br/>
                <div className="col-md-3 col-md-offset-4" style={{backgroundColor:'lightGrey' }} > 
                <div className="row "> 
                
                {
                    this.props.btns.map((item,key) =>{
                    return <Calculator key={key} item={item} value={this.props.value} />
                    })
                }
                </div>
                </div> 
            </div>
        );
    }
}

function mapStateToProps (state) {
    return{
        value: state.value,
         btns: state.btns
      }
  }
  
 /* const mapDispatchToProps = (dispatch) => {
      return {
        addElem: (text) => {
              dispatch(addElem(text));
          },
          clear: () => {
            dispatch(clear());
        } ,
        equals: (value) => {
            dispatch(equals(value));
        } 
    };
  };    */   



  export default connect(mapStateToProps)(CalcLogic); 