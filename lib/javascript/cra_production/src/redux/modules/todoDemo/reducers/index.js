import {
  TODO_DEMO_TOGGLE_DONE,
  TODO_DEMO_ADD_TODO,
  TODO_DEMO_REMOVE_TODO
} from '../actions/types';

const defaultDueDate = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
};

const getDateFinished = ({ doChange, isDone, dateFinished }) => {
  if (!doChange) return dateFinished;

  if (isDone) return new Date();

  return '';
};

const initialTodos = [
  'Do laundry', 'Pick up mail', 'Buy groceries', 'Fix broken lightbulb', 'Attend spinning class'
].map((todo, ix) => ({
  key: ['todo-key-', ix].join(''),
  title: todo,
  dateDue: defaultDueDate(),
  dateFinished: null,
  done: false
}));

export default function reducer(state = { todos: initialTodos, newTodo: '' }, action) {
  const { type, payload } = action;

  switch (type) {
    case TODO_DEMO_TOGGLE_DONE: {
      const ixToBeToggled = payload;
      return {
        ...state,
        todos: state.todos.map(({ done, dateFinished, ...todo }, ix) => {
          const newDone = ixToBeToggled === ix ? !done : done;
          const newDateFinished = getDateFinished({
            doChange: ixToBeToggled === ix, isDone: newDone, dateFinished
          });

          return { ...todo, done: newDone, dateFinished: newDateFinished };
        })
      };
    }

    case TODO_DEMO_ADD_TODO: {
      const todo = payload;
      if (!todo.toString().trim()) return state;
      const { todos } = state;

      return {
        ...state,
        todos: todos.concat([{
          title: todo,
          key: ['todo-key-', todos.length].join(''),
          dateDue: defaultDueDate()
        }])
      };
    }

    case TODO_DEMO_REMOVE_TODO: {
      const ixToBeRemoved = payload;
      return {
        ...state,
        todos: state.todos.filter((todo, ix) => ixToBeRemoved !== ix)
      };
    }

    default:
      return state;
  }
}
