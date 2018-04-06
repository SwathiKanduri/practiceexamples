import React from 'react';

import {addElem, clear,equals} from '../actions/actions'
import Calculator from '../components/Calcualtor'
import {connect} from 'react-redux'
import store from '../store'
import Reducer from '../reducers/reducer'


class CalcLogic extends React.Component{
    render(){
        value=this.props.value;
        return(
            <div>

                {
                    this.props.btns.map((item,index) =>{
                        if(item == "clear"){
                            return(
                                <Calculator clear={()=>{ this.props.clear() }} key={key} item={item}  value={value}/>
                            )       
                          } else if(item == "="){
                            return(
                                <Calculator  equals={()=>{ this.props.equals(value) }} key={key} item={item}  value={value} />
                            )
                          } else {
                            return(
                                <Calculator  addElem={()=>{ this.props.addElem(item) }} key={key} item={item}  value={value} />
                            )
                          }   
                    } )
                }
                  
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        value: state.value,
         btns: state.btns
      }
  };
  
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



  export default connect(mapStateToProps,mapDispatchToProps)(CalcLogic); 