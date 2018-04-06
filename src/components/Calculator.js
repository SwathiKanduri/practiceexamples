import React from 'react';
import {connect} from 'react-redux'
// import {bindActionsCreator, bindActionCreators} from 'redux'




const Calculator= (props) => {
    
        return(
         <div className="container text-center" > <br/>
              <div className="col-md-3 col-md-offset-4" style={{backgroundColor:'lightGrey' }} > 
                <div className="row" > Calculator </div> <br/>
                <div className="row text-center" >
                 <input type="text" value={props.value} /> </div>  <br/>
                <div className="row" > 
                <button className="btn btn-small btn-primary col-md-3"  onClick={props.clear} > clear </button>
                <button className="btn btn-small btn-primary col-md-3"  onClick={props.equals}> = </button>
                <button className="btn btn-small btn-default col-md-3"  onClick={()=>{props.addElem}}> 0 </button>
                <button className="btn btn-small btn-info col-md-3"   onClick={props.addElem} > / </button>
                </div>
                <div className="row "> 
                <button className="btn btn-small btn-default col-md-3"  onClick={props.addElem} > 7 </button>
                <button className="btn btn-small btn-default col-md-3"  onClick={props.addElem} > 8 </button>
                <button className="btn btn-small btn-default col-md-3"  onClick={props.addElem} > 9 </button>
                <button className="btn btn-small btn-info col-md-3"  onClick={props.addElem}> * </button>
                </div>
                <div className="row" > 
                <button className="btn btn-small btn-default col-md-3"  onClick={props.addElem} > 4 </button>
                <button className="btn btn-small btn-default col-md-3"  onClick={props.addElem} > 5 </button>
                <button className="btn btn-small btn-default col-md-3"  onClick={props.addElem} > 6 </button>
                <button className="btn btn-small btn-info col-md-3"  onClick={props.addElem}> + </button>
                </div>
                <div className="row" > 
                <button className="btn btn-small btn-default col-md-3"   onClick={props.addElem} > 1 </button>
                <button className="btn btn-small btn-default col-md-3"  onClick={props.addElem} > 2 </button>
                <button className="btn btn-small btn-default col-md-3"  onClick={props.addElem}> 3 </button>
                <button className="btn btn-small btn-info col-md-3"  onClick={props.addElem}> - </button>
        </div>  
            </div>

        </div>
        );  
};


/* function mapDispatchToProps(dispatch){
  return bindActionCreators({addElem, equals, clear},dispatch);
  
}  */



 export default Calculator;


// export default connect(() => {return {} } , mapDispatchToProps)(Calculator);