import React from 'react';
import {connect} from 'react-redux'
import {bindActionsCreator, bindActionCreators} from 'redux'
import {addElem,clear,equals} from '../actions/actions'


const Calculator=(props) => {

     return(
        <div className="container text-center" > <br/>
                {
                props.item == "clear"? <button className="btn btn-small btn-default col-md-3" key={props.key}
                onClick={()=> {props.clear()}} > {props.item} </button> : props.item == "="?<button className="btn btn-small btn-default col-md-3" key={props.key}
                onClick={()=> {props.equals(props.value)}} > {props.item} </button>:<button className="btn btn-small btn-default col-md-3" key={props.key}
                onClick={()=> {props.addElem(props.item)}} > {props.item} </button>
                }
        </div>
        
        );  

};




 function mapDispatchToProps(dispatch){
  return bindActionCreators({addElem, equals, clear},dispatch);

}  


/* const mapDispatchToProps = (dispatch) => {
    return{
      addElem: (text) =>{
            dispatch(addElem(text));
      },
        clear: () =>{
          dispatch(clear());
      } ,
      equals: (value) =>{
          dispatch(equals(value));
      } 
  };
};        */


// export default Calculator;


 export default connect(() => {return {}; } , mapDispatchToProps)(Calculator);