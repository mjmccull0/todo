import React from 'react';
import { TodoProvider } from './TodoContext';
import ToDo from 'ToDo';

const App = () => (
  <TodoProvider>
    <ToDo />
  </TodoProvider>
)

export default App;
