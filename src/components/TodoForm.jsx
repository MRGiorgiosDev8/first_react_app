import { useState } from 'react';
import { motion } from 'framer-motion';
import toDoIcon from '../assets/images/to_do.svg';

export default function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(inputValue);
    setInputValue('');
  };

  return (
    <>
      <h1 className="h1-font text-center mt-[6vh] mb-3 flex justify-center items-center shadow-md border border-gray-200 rounded-md">
        Todo
        <motion.img 
          src={toDoIcon}
          alt="todo icon" 
          className="w-16 h-16 opacity-80 mb-4" 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 19,
            delay: 0.2 
          }}
        />
        List
      </h1>
      
      <div className="border border-gray-300 shadow-md rounded-lg p-4 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="flex mb-0">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Добавить новую задачу..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button 
            type="submit"
            className="px-4 custom-button shadow-md py-2 transition-all ease-out duration-200 bg-[#84f688] ml-3 text-[#686868] font-medium rounded-lg hover:bg-[#84e187] hover:text-white hover:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Добавить
          </button>
        </form>
      </div>
    </>
  );
}
