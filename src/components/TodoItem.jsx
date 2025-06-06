export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`flex items-center border border-gray-200 justify-between p-3 mb-2 rounded-lg ${todo.completed ? 'bg-gray-100' : 'bg-white'} shadow`}>
      <span 
        onClick={() => onToggle(todo.id)}
        className={`flex-1 cursor-pointer ${todo.completed ? 'bg-green-300 rounded-md p-1' : 'text-gray-800'}`}
      >
        {todo.text}
      </span>
      <button 
        onClick={() => onDelete(todo.id)}
        className="ml-3 px-3 py-1 bg-red-500 border-none  text-white rounded hover:bg-red-600 focus:outline-none"
      >
        Удалить
      </button>
    </li>
  );
}