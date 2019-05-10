import {
  TODO_DEMO_LOAD_TODOS,
  TODO_DEMO_TOGGLE_DONE,
  TODO_DEMO_ADD_TODO,
  TODO_DEMO_REMOVE_TODO
} from '../actions/types';

const buildKey = id => ['todo-key-', id].join('');

export default function reducer(state = { todos: [], newTodo: '' }, action) {
  const { type, payload } = action;

  switch (type) {
    case TODO_DEMO_LOAD_TODOS: {
      const todos = payload;
      return {
        ...state,
        todos: todos.map(({
          id, dateDue, dateDone, ...todo
        }) => ({
          ...todo,
          id,
          key: buildKey(id),
          dateDue: new Date(dateDue),
          dateDone: dateDone && new Date(dateDone)
        }))
      };
    }

    case TODO_DEMO_TOGGLE_DONE: {
      const updatedTodo = payload;

      return {
        ...state,
        todos: state.todos.map(({ id, ...todo }) => (
          updatedTodo.id === id ? updatedTodo : { ...todo, id }
        ))
      };
    }

    case TODO_DEMO_ADD_TODO: {
      const todo = payload;
      if (!todo.toString().trim()) return state;

      if (Object.entries(todo).length === 0 && todo.constructor === Object) return state;

      return {
        ...state,
        todos: state.todos.concat([{
          ...todo,
          key: buildKey(todo.id)
        }])
      };
    }

    case TODO_DEMO_REMOVE_TODO: {
      const idToBeRemoved = payload;
      return {
        ...state,
        todos: state.todos.filter(({ id }) => idToBeRemoved !== id)
      };
    }

    default:
      return state;
  }
}
