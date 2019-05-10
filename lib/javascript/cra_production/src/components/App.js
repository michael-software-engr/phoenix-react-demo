import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetch from 'cross-fetch';
import humps from 'humps';

import Todo from './Todo';
import NewTodoInput from './NewTodoInput';

import {
  unconnectedLoadTodos,
  unconnectedToggleDone,
  unconnectedAddTodo,
  unconnectedRemoveTodo
} from '../redux/modules/todoDemo/actions/index';

const defaultDueDate = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
};

const getDateDone = ({ isDone }) => {
  if (isDone) return (new Date()).toISOString();

  return null;
};
class App extends React.Component {
  static propTypes = {
    todoDemo: PropTypes.shape().isRequired,
    loadTodos: PropTypes.func.isRequired,
    toggleDone: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = { newTodo: '' };
  }

  componentDidMount() {
    fetch('/api/todos').then(response => response.json().then((json) => {
      this.props.loadTodos(humps.camelizeKeys(json).data);
    }));
  }

  toggleDoneHandler = (idToBeToggled, event) => {
    event.preventDefault();

    const todoToBeUpdated = this.props.todoDemo.todos.find(({ id }) => idToBeToggled === id);

    if (!todoToBeUpdated) throw Error(`Can't find id ${idToBeToggled}`);

    const newDone = !todoToBeUpdated.done;

    const updatedTodo = {
      ...todoToBeUpdated,
      done: newDone,
      dateDone: getDateDone({ isDone: newDone })
    };

    fetch(`/api/todos/${idToBeToggled}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(humps.decamelizeKeys({ id: idToBeToggled, todo: updatedTodo }))
    }).then(response => response.json().then(() => {
      // TODO: catch errors... if (json.errors)...
      this.props.toggleDone(updatedTodo);
    }));
  }

  removeItemHandler = (idToBeRemoved, event) => {
    event.preventDefault();
    fetch(`/api/todos/${idToBeRemoved}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      if (!response.ok && response.statusText !== 'No content') {
        console.error({ error: 'Unexpected response...', response });
        throw Error('...');
      }

      this.props.removeItem(idToBeRemoved);
    });
  }

  addTodoHandler = (event) => {
    event.preventDefault();

    const newTodo = { title: this.state.newTodo, dateDue: defaultDueDate().toISOString() };

    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(humps.decamelizeKeys({ todo: newTodo }))
    }).then(response => response.json().then((json) => {
      // TODO: catch errors... if (json.errors)...
      this.props.addTodo(humps.camelizeKeys(json.data));
      this.setState({ newTodo: '' });
    }));
  }

  newTodoTextChangeHandler = (event) => {
    event.preventDefault();
    const { value } = event.target;

    if (!value) return;

    this.setState({ newTodo: value });
  }

  render() {
    const { todos } = this.props.todoDemo;

    if (todos.length === 0) return <div>Loading...</div>;

    return (
      <main>
        <h3>C.R.A. Production</h3>
        <NewTodoInput
          addTodoHandler={this.addTodoHandler}
          newTodoTextChangeHandler={this.newTodoTextChangeHandler}
          newTodo={this.state.newTodo}
        />
        <Todo
          todos={this.props.todoDemo.todos}
          toggleDoneHandler={this.toggleDoneHandler}
          removeItemHandler={this.removeItemHandler}
        />
      </main>
    );
  }
}

const mapStateToProps = ({ todoDemo }) => ({ todoDemo });

export default connect(
  mapStateToProps,
  {
    loadTodos: unconnectedLoadTodos,
    toggleDone: unconnectedToggleDone,
    addTodo: unconnectedAddTodo,
    removeItem: unconnectedRemoveTodo
  }
)(App);
