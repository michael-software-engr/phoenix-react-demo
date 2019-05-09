import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Todo from './Todo';
import NewTodoInput from './NewTodoInput';

import {
  unconnectedToggleDone,
  unconnectedAddTodo,
  unconnectedRemoveTodo
} from '../redux/modules/todoDemo/actions/index';

class App extends React.Component {
  static propTypes = {
    todoDemo: PropTypes.shape().isRequired,
    toggleDone: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = { newTodo: '' };
  }

  toggleDoneHandler = (ixToBeToggled, event) => {
    event.preventDefault();
    // apiToggleTodo();
    this.props.toggleDone(ixToBeToggled);
  }

  removeItemHandler = (ixToBeRemoved, event) => {
    event.preventDefault();
    // apiRemoveItem();
    this.props.removeItem(ixToBeRemoved);
  }

  addTodoHandler = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.newTodo);
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
    toggleDone: unconnectedToggleDone,
    addTodo: unconnectedAddTodo,
    removeItem: unconnectedRemoveTodo
  }
)(App);
