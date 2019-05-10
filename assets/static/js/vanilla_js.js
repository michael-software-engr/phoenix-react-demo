/* global React, ReactDOM, createReactClass */

function ReactLoader() {
  var createElement = React.createElement;

  function dateFormatter(date) {
    if (!date) return '';

    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }

  function defaultDueDate() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
  }

  var TodoApp = createReactClass({
    getInitialState: function() {
      var todos = [
        'Do laundry', 'Pick up mail', 'Buy groceries', 'Fix broken lightbulb', 'Attend spinning class'
      ].map(function cb(todo, ix) {
        return {
          key: ['todo-key-', ix].join(''),
          title: todo,
          dateDue: defaultDueDate(),
          dateFinished: null,
          done: false
        };
      });

      return { todos: todos, newTodo: '' };
    },

    listItemOnClickHandler: function (ixToBeChanged, event) {
      event.preventDefault();

      // apiToggleTodo();

      this.setState(function (prevState) {
        var newState = prevState;

        newState.todos = prevState.todos.map(function (todo, ix) {
          if (ixToBeChanged == ix) {
            todo.done = !todo.done;
            todo.dateFinished = todo.done ? new Date() : '';
          }
          return todo;
        });

        return newState;
      });
    },

    addTodo: function(event) {
      event.preventDefault();
      var newTodo = this.state.newTodo;

      if (!newTodo) return;

      // apiAddTodo();

      this.setState(function (prevState) {
        var newState = prevState;
        var todos = newState.todos;
        newState.todos = todos.concat([{
          title: newTodo,
          key: ['todo-key-', todos.length].join(''),
          dateDue: defaultDueDate()
        }]);

        newState.newTodo = '';
        return newState;
      });
    },

    newTodoTextChangeHandler: function (event) {
      event.preventDefault();
      var value = event.target.value;

      if (!value) return;

      this.setState(function (prevState) {
        var newState = prevState;
        newState.newTodo = value;
        return newState;
      });
    },

    formElement: function () {
      return createElement(
        'form',
        { onSubmit: this.addTodo },
        createElement('input', {
          onChange: this.newTodoTextChangeHandler,
          type: 'text',
          value: this.state.newTodo,
          placeholder: 'Enter new todo (press "Enter" to submit)', size: 40
        }),
        createElement('input', {
          type: 'submit',
          style: { display: 'none' }
        })
      )
    },

    todoListComponent: function () {
      var dateFields = ['dateDue', 'dateFinished'];
      var thisComponent = this;

      var todoItemComponents = this.state.todos.map(function (todo, ix) {
        return createElement(
          'tr',
          {
            key: todo.key,
            onClick: function (event) {
              thisComponent.listItemOnClickHandler(ix, event);
            },
            className: todo.done ? 'strikeout' : ''
          },
          [createElement('td', { key: 'number' }, ix + 1)].concat(
            ['title'].concat(dateFields).map(function (field) {
              var text = dateFields.indexOf(field) == -1 ? todo[field] : dateFormatter(todo[field]);
              return createElement('td', { key: field }, text);
            })
          )
        );
      });

      return createElement(
        'table', null, createElement('tbody', null, todoItemComponents)
      );
    },

    render: function() {
      return createElement(
        'div', null,
        createElement('h3', null, 'Vanilla JS + React To Do'),
        this.formElement(),
        this.todoListComponent(),
        createElement('hr', null)
      );
    }
  });

  ReactDOM.render(
    createElement(TodoApp),
    document.getElementById('app')
  );
}

document.addEventListener('DOMContentLoaded', ReactLoader, false);
window.addEventListener('load', ReactLoader, false );
