import React from 'react';

import {increment, decrement} from '../actions/actions'
import Counter from '../components/counter'
import {connect} from 'react-redux'
import store from '../store'
import Reducer from '../reducers/reducer'


class CounterLogic extends React.Component{
    render(){
        return(
            <div>
            <Counter value={store.getState()} onIncrement={() => this.props.increment()} onDecrement={() => this.props.decrement()} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
      return {
        increment: (number) => {
              dispatch(increment(number));
          },
          decrement: (number) => {
            dispatch(decrement(number));
        } 
    };
  };



  export default connect(mapStateToProps,mapDispatchToProps)(CounterLogic); 