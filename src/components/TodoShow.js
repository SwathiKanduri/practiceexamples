import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {addTask} from '../actions/actionsTodo'


class TodoShow extends React.Component {
    render(){
        return(
            <div> 
                <input type="text" ref="uinput" placeholder="enter task here"  /> 
                <button onClick={()=> this.props.addTask(this.refs.uinput.value)} > add task </button>
                 
            </div>
        );
    }
    
}


function mapDispatchToProps(dispatch) {
return bindActionCreators({addTask},dispatch);
}



export default connect(()=>{ return {};},mapDispatchToProps)(TodoShow); 