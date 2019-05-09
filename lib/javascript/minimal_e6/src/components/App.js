import React from 'react';

import Todo from './Todo';
import NewTodoInput from './NewTodoInput';

import { defaultDueDate } from '../lib';

class App extends React.Component {
  constructor(props) {
    super(props);

    const todos = [
      'Do laundry', 'Pick up mail', 'Buy groceries', 'Fix broken lightbulb', 'Attend spinning class'
    ].map((todo, ix) => ({
      key: ['todo-key-', ix].join(''),
      title: todo,
      dateDue: defaultDueDate(),
      dateFinished: null,
      done: false
    }));

    this.state = { todos, newTodo: '' };
  }

  listItemOnClickHandler = (ixToBeChanged, event) => {
    event.preventDefault();

    // apiToggleTodo();

    this.setState(prevState => ({
      ...prevState,
      todos: prevState.todos.map(({ done, dateFinished, ...todo }, ix) => {
        const newDone = ixToBeChanged === ix ? !done : done;
        const newDateFinished = ixToBeChanged === ix ? new Date() : dateFinished;

        return { ...todo, done: newDone, dateFinished: newDateFinished };
      })
    }));
  }

  addTodoHandler = (event) => {
    event.preventDefault();
    const { newTodo } = this.state;

    if (!newTodo) return;

    // apiAddTodo();

    this.setState(prevState => ({
      todos: prevState.todos.concat([{
        title: newTodo,
        key: ['todo-key-', prevState.todos.length].join(''),
        dateDue: defaultDueDate()
      }]),

      newTodo: ''
    }));
  }

  newTodoTextChangeHandler = (event) => {
    event.preventDefault();
    const { value } = event.target;

    if (!value) return;

    this.setState({ newTodo: value });
  }

  render() {
    return (
      <main>
        <h3>Minimal E6</h3>
        <NewTodoInput
          addTodoHandler={this.addTodoHandler}
          newTodoTextChangeHandler={this.newTodoTextChangeHandler}
          newTodo={this.state.newTodo}
        />
        <Todo
          todos={this.state.todos}
          listItemOnClickHandler={this.listItemOnClickHandler}
        />
      </main>
    );
  }
}

export default App;
