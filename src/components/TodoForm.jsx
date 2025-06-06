import { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(inputValue);
    setInputValue('');
  };

  return (
    <>
      <h1 className="h1-font  text-center mt-[8vh] mb-6">
        Todo List
      </h1>
      
      <div className="border border-gray-300 shadow-md rounded-lg p-4 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="flex mb-0">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Добавить новую задачу..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button 
            type="submit"
            className="px-4 custom-button py-2 transition-all ease-out duration-200 bg-[#84f688] ml-3 text-[#686868] font-medium rounded-lg hover:bg-[#84e187] hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Добавить
          </button>
        </form>
      </div>
    </>
  );
}