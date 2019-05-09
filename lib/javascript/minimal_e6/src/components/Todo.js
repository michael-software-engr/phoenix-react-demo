import React from 'react';
import PropTypes from 'prop-types';

import { dateFormatter } from '../lib';

const Todo = ({
  todos,
  listItemOnClickHandler
}) => {
  const dateFields = ['dateDue', 'dateFinished'];

  return (
    <table>
      <tbody>
        {
          todos.map(({ key, done, ...todo }, ix) => (
            <tr
              key={key}
              onClick={(event) => { listItemOnClickHandler(ix, event); }}
              className={done ? 'strikeout' : ''}
            >
              <td>{ix + 1}</td>
              {
                ['title'].concat(dateFields).map((field) => {
                  const value = todo[field];
                  const text = dateFields.includes(field) ? dateFormatter(value) : value;

                  return <td key={field}>{text}</td>;
                })
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  listItemOnClickHandler: PropTypes.func.isRequired
};

export default Todo;
