export default function FilterButtons({ filter, setFilter }) {
  const filters = [
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Завершенные' }
  ];

  return (
    <div className="flex justify-center border border-gray-300 shadow-md p-6 rounded-lg mt-6 space-x-6 mb-6">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          className={`px-4 py-2 rounded-md custom-buttons ${filter === f.value 
            ? 'bg-[#84e187] text-white font-medium' 
            : 'bg-gray-200 text-[#686868] font-medium hover:bg-gray-300'}`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}