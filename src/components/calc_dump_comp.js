import React from 'react';
import {connect} from 'react-redux'
import {bindActionsCreator, bindActionCreators} from 'redux'
import {addElem,clear,equals} from '../actions/actions'




class Calculator extends React.Component {
    
    render(){
        return(
         <div className="container text-center" > <br/>
              <div className="col-md-3 col-md-offset-4" style={{backgroundColor:'lightGrey' }} > 
                <div className="row" > Calculator </div> <br/>
                <div className="row text-center" >
                 <input type="text" value={this.props.value} /> </div>  <br/>
                <div className="row" > 
                <button className="btn btn-small btn-primary col-md-3"  key={this.props.key} onClick={()=>{this.props.clear}} > clear </button>
                <button className="btn btn-small btn-primary col-md-3"  key={this.props.key} onClick={()=>{this.props.equals}}> = </button>
                <button className="btn btn-small btn-default col-md-3" key={this.props.key} key={this.props.key} onClick={()=>{this.props.addElem(this.props.item)}}> 0 </button>
                <button className="btn btn-small btn-info col-md-3"  key={this.props.key} onClick={()=>{this.props.addElem(this.props.item)}} > / </button>
                </div>
                <div className="row "> 
                <button className="btn btn-small btn-default col-md-3"  key={this.props.key} onClick={()=>{this.props.addElem(this.props.item)}} > 7 </button>
                <button className="btn btn-small btn-default col-md-3"  key={this.props.key} onClick={()=>{this.props.addElem(this.props.item)}} > 8 </button>
                <button className="btn btn-small btn-default col-md-3"  key={this.props.key} onClick={()=>{this.props.addElem(this.props.item)}} > 9 </button>
                <button className="btn btn-small btn-info col-md-3"  key={this.props.key} onClick={()=>{this.props.addElem(this.props.item)}} > * </button>
                </div>
                <div className="row" > 
                <button className="btn btn-small btn-default col-md-3"  key={this.props.key} onClick={()=>{this.props.addElem(this.props.item)}} > 4 </button>
                <button className="btn btn-small btn-default col-md-3"  key={this.props.key} onClick={()=>{this.props.addElem(this.props.item)}} > 5 </button>
                <button className="btn btn-small btn-default col-md-3"  key={this.props.key} onClick={()=>{this.props.addElem(this.props.item)}} > 6 </button>
                <button className="btn btn-small btn-info col-md-3"  key={this.props.key} onClick={()=>{this.props.addElem(this.props.item)}} > + </button>
                </div>
                <div className="row" > 
                <button className="btn btn-small btn-default col-md-3"  key={this.props.key} onClick={()=>{this.props.addElem(this.props.item)}} > 1 </button>
                <button className="btn btn-small btn-default col-md-3"  key={this.props.key} onClick={()=>{this.props.addElem(this.props.item)}} > 2 </button>
                <button className="btn btn-small btn-default col-md-3"  key={this.props.key} onClick={()=>{this.props.addElem(this.props.item)}}> 3 </button>
                <button className="btn btn-small btn-info col-md-3"  key={this.props.key} onClick={()=>{this.props.addElem(this.props.item)}} > - </button>
        </div>  
            </div>

        </div>
        );  
      }
}


/* function mapDispatchToProps(dispatch){
  return bindActionCreators({addElem, equals, clear},dispatch);

}  */


const mapDispatchToProps = (dispatch) => {
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
}; 


// export default Calculator;


 export default connect(() => {return {}; } , mapDispatchToProps)(Calculator);