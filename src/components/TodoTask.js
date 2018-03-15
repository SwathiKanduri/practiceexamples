import React from 'react'
import {connect} from 'react-redux'
import {bindActionsCreator, bindActionCreators} from 'redux'
import {deleteTask} from '../actions/actionsTodo'

class Task extends React.Component{
    render(){
        return(
            <tr> 
                <td> 
                    {this.props.task}
                </td>
                <td> 
                    <button onClick={() => {this.props.deleteTask(this.props.id)}} > Delete task </button>
                </td>
            </tr>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask},dispatch);
}


export default connect(() => {return {} ; } , mapDispatchToProps)(Task);