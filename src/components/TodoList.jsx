import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div className="border border-gray-300 rounded-lg mb-7 shadow-sm overflow-hidden">
      <ul className="divide-y divide-gray-100 pt-2">
        {todos.length > 0 ? (
          todos.map(todo => (
            <li key={todo.id} className="p-2">
              <TodoItem 
                todo={todo} 
                onToggle={onToggle} 
                onDelete={onDelete} 
              />
            </li>
          ))
        ) : (
          <li className="px-4 py-6 text-center text-gray-500">
            Нет задач для отображения
          </li>
        )}
      </ul>
    </div>
  );
}