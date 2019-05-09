import React from 'react';
import PropTypes from 'prop-types';

import { dateFormatter } from '../lib';

const Todo = ({
  todos,
  toggleDoneHandler,
  removeItemHandler
}) => {
  const dateFields = ['dateDue', 'dateFinished'];

  return (
    <table>
      <thead>
        <tr>
          <th>Mark as done</th>
          <th>To do</th>
          <th>Date due</th>
          <th>Date done</th>
          <th>Remove</th>
        </tr>
      </thead>

      <tbody>
        {
          todos.map(({ key, done, ...todo }, ix) => (
            <tr
              key={key}
              className={done ? 'strikeout' : ''}
            >
              <td title="Click to mark as done">
                <button type="button" onClick={(event) => { toggleDoneHandler(ix, event); }}>
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
                <button type="button" onClick={(event) => { removeItemHandler(ix, event); }}>x</button>
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
