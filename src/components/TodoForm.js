/*- `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
  - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
  - Once a todo is submitted, the Todo List should re-render and show the added todo.
*/
import React from 'react';

const Form = (props) => {

    return (
        <form>
            <input
                type="text"
                value={props.value}
                onChange={props.getInput}
            ></input>
            <button onClick={props.add} >Add Todo</button>
            <button onClick={props.clear} >Clear Completed</button>
        </form>
    )
    
}

export default Form;