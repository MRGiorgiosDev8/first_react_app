import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import TodoStats from './components/TodoStats';

function App() {
  // Загрузка задач из localStorage при инициализации
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  const [filter, setFilter] = useState('all');

  // Сохранение задач в localStorage при их изменении
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text,
          completed: false
        }
      ]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center   text-gray-800">Задачи</h1>
      
      <TodoForm onAdd={addTodo} />
      
      <FilterButtons filter={filter} setFilter={setFilter} />
      
      <TodoList 
        todos={filteredTodos} 
        onToggle={toggleTodo} 
        onDelete={deleteTodo} 
      />
      
      {todos.length > 0 && <TodoStats todos={todos} />}
    </div>
  );
}

export default App;