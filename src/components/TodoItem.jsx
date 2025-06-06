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
        className="ml-3 px-3 py-1 bg-[#f66359] border-none font-normal  text-white rounded transition-all ease-out duration-200 hover:bg-[#e54d42] focus:outline-none"
      >
        Удалить
      </button>
    </li>
  );
}