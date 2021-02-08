import React from 'react';
/*- `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
  - All of your application data will be stored here on `<App />`.
  - All of your `handler` functions should live here on `<App />`.
*/
import Form from './components/TodoForm';
import TodoList from './components/TodoList';

const toDos = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: '',
      completed: false,
    }
  }

  getInput = (evt) => {
    this.setState({
        todo: evt.target.value,
    })
  };

  add = (evt) => {
    evt.preventDefault();
    toDos.push(this.state)
    this.setState({
      todo: '',
      completed: false,
    })
  };

  clear = (evt) => {
    evt.preventDefault()
    let clean = toDos.filter(elem => {
      return elem.completed === false;
    })
    console.log(clean)
  };

  taskDone =(evt) => {
    const newToDo = toDos.map(task => {
      if(task.todo === evt.target.textContent){
        console.log(task)
        return {
          ...task,
          completed: !task.completed
        }
      } else {
        return task;
      }
      toDos = newToDo;
    })
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <p>Learn setState()</p>
        <p>Style my Todo List</p>
        <Form add={this.add} clear={this.clear} getInput={this.getInput} />
        <TodoList todos={toDos} taskDone={this.taskDone} />
      </div>
    );
  }
}

export default App;
