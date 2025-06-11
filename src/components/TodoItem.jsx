export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`flex items-center border border-gray-200 justify-between p-3 mb-2 rounded-lg ${todo.completed ? 'bg-gray-100' : 'bg-white'} shadow`}>
      <span 
        onClick={() => onToggle(todo.id)}
        className={`flex-1 cursor-pointer transition-all ease-in-out duration-200 text-[#686868] ${todo.completed ? 'bg-[#a0f394] rounded-lg p-1 border-2 border-[white]' : 'text-[#686868'}`}
      >
        {todo.text}
      </span>
      <button 
        onClick={() => onDelete(todo.id)}
        className="ml-3 px-3 py-1 bg-[#f66359] custom-delete-button border-none font-normal shadow-md  text-white rounded-md transition-all ease-out duration-300 hover:bg-[#e54d42] hover:scale-95 focus:outline-none"
      >
        Удалить
      </button>
    </li>
  );
}