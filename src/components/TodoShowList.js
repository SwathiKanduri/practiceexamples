import React from 'react'
import {connect} from 'react-redux'
import Task from './TodoTask'

 class TodoShowList extends React.Component{
    render(){
        return(
            <table> 
                <tbody> 
                    {this.props.tasks.map((task,index) => <Task key={index} id={index} task={task} /> ) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return{
        tasks:state
    }
}


export default connect(mapStateToProps)(TodoShowList);