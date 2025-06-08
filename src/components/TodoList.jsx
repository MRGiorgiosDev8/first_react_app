import { motion } from 'framer-motion';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.8,
        delay: 0.7
      }}
      className="border border-gray-300 rounded-lg mb-7 shadow-sm overflow-hidden"
    >
      <ul className="divide-y divide-gray-100 pt-2">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.3
              }}
              className="p-2"
            >
              <TodoItem
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            </motion.li>
          ))
        ) : (
          <motion.li
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 80
            }}
            className="px-4 py-6 text-center text-gray-500"
          >
            Нет задач для отображения
          </motion.li>
        )}
      </ul>
    </motion.div>
  );
}