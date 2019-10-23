import React from 'react';

import TodoListItem from './todo-list-item';

class TodoList extends React.Component {
  render(){
    return (
      <ul>
        <li>
          <TodoListItem label="Drink Coffee" />
        </li>
        <li>
          <TodoListItem label="Build React App"
            important />
        </li>
      </ul>
    );
  }
};

export default TodoList;
