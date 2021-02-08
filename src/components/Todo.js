/*- `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.*/
import React from 'react';

const Todo = (props) => {
    
    //console.log("Todo: ", props)

    return (
        <div onClick={props.taskDone} className={props.do.completed?"completed":"not-completed"}>
            {props.do.todo}
        </div>
    )
}

export default Todo;