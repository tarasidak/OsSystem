import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';


class App extends React.Component {
  render(){
    return (
      <div>
        <AppHeader />
        <SearchPanel />
        <TodoList />
      </div>
    );
  } 
};

ReactDOM.render(<App />,
  document.getElementById('root'));