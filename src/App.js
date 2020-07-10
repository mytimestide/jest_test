import React from 'react';
import TodoList from './containers/TodoList'
function App() {
  return (
    <div className="App" data-test="container" title="times">
      <TodoList />
    </div>
  );
}

export default App;
