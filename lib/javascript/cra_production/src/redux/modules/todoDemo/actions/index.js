import {
  TODO_DEMO_LOAD_TODOS,
  TODO_DEMO_TOGGLE_DONE,
  TODO_DEMO_ADD_TODO,
  TODO_DEMO_REMOVE_TODO
} from './types';

export function unconnectedLoadTodos(todos) {
  return { type: TODO_DEMO_LOAD_TODOS, payload: todos };
}

export function unconnectedToggleDone(ixToBeToggled) {
  return { type: TODO_DEMO_TOGGLE_DONE, payload: ixToBeToggled };
}

export function unconnectedAddTodo(todo) {
  return { type: TODO_DEMO_ADD_TODO, payload: todo };
}

export function unconnectedRemoveTodo(ixToBeRemoved) {
  return { type: TODO_DEMO_REMOVE_TODO, payload: ixToBeRemoved };
}
