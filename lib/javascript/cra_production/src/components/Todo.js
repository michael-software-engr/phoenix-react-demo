import React from 'react';
import PropTypes from 'prop-types';

const dateFormatter = (dateObjOrStr) => {
  if (!dateObjOrStr) return '';

  const date = typeof dateObjOrStr === 'string' ? new Date(dateObjOrStr) : dateObjOrStr;

  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

const Todo = ({
  todos,
  toggleDoneHandler,
  removeItemHandler
}) => {
  const dateFields = ['dateDue', 'dateDone'];

  return (
    <table>
      <thead>
        <tr>
          <th>Toggle</th>
          <th>To do</th>
          <th>Due</th>
          <th>Done</th>
          <th>Remove</th>
        </tr>
      </thead>

      <tbody>
        {
          todos.map(({
            id, key, done, ...todo
          }, ix) => (
            <tr
              key={key}
              className={done ? 'strikeout' : ''}
            >
              <td title="Click to mark as done">
                <button type="button" onClick={(event) => { toggleDoneHandler(id, event); }}>
                  {ix + 1}
                </button>
              </td>
              {
                ['title'].concat(dateFields).map((field) => {
                  const value = todo[field];
                  const text = dateFields.includes(field) ? dateFormatter(value) : value;

                  return <td key={field}>{text}</td>;
                })
              }
              <td>
                <button type="button" onClick={(event) => { removeItemHandler(id, event); }}>x</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  toggleDoneHandler: PropTypes.func.isRequired,
  removeItemHandler: PropTypes.func.isRequired
};

export default Todo;
