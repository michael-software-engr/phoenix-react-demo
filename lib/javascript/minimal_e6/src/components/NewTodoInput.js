import React from 'react';
import PropTypes from 'prop-types';

const NewTodoInput = ({ addTodoHandler, newTodoTextChangeHandler, newTodo }) => (
  <form onSubmit={addTodoHandler}>
    <input
      type="text"
      onChange={newTodoTextChangeHandler}
      value={newTodo}
      placeholder={'Enter new todo (press "Enter" to submit)'}
      size={40}
    />

    <input type="submit" style={{ display: 'none' }} />
  </form>
);

NewTodoInput.propTypes = {
  addTodoHandler: PropTypes.func.isRequired,
  newTodoTextChangeHandler: PropTypes.func.isRequired,
  newTodo: PropTypes.string
};

NewTodoInput.defaultProps = {
  newTodo: ''
};

export default NewTodoInput;
