import { motion, AnimatePresence } from 'framer-motion';

export default function TodoStats({ todos }) {
  const remaining = todos.filter(todo => !todo.completed).length;

  return (
    <div className="text-center text-gray-600 mt-8 mb-6 border-b h-8 border-gray-300 text-md">
      Осталось выполнить:{' '}
      <AnimatePresence mode="wait">
        <motion.span
          key={remaining}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.25 }}
          className="inline-block w-6"
        >
          {remaining}
        </motion.span>
      </AnimatePresence>{' '}
      из{' '}
      <AnimatePresence mode="wait">
        <motion.span
          key={todos.length}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.25 }}
          className="inline-block w-6"
        >
          {todos.length}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}