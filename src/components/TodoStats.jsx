export default function TodoStats({ todos }) {
  const remaining = todos.filter(todo => !todo.completed).length;
  
  return (
    <div className="text-center text-gray-600 mt-8 mb-6">
      Осталось выполнить: {remaining} из {todos.length}
    </div>
  );
}