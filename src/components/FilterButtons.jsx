import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function FilterButtons({ 
  filter = 'all', 
  setFilter = () => {}, 
  filters = [
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Завершенные' }
  ] 
}) {
  const buttonRefs = useRef([]);

  useEffect(() => {
    if (!buttonRefs.current || !filters) return;

    try {
      buttonRefs.current.forEach((btn, index) => {
        if (!btn) return;
        
        const isActive = filters[index]?.value === filter;
        
        anime({
          targets: btn,
          backgroundColor: isActive ? '#84e187' : '#e5e7eb',
          color: isActive ? '#fff' : '#686868',
          scale: isActive ? [0.95, 1] : 1,
          duration: 100,
          easing: 'easeOutQuad'
        });
      });
    } catch (error) {
      console.error('Animation error:', error);
    }
  }, [filter, filters]);

  if (!filters || !Array.isArray(filters)) {
    return <div className="text-red-500">Ошибка</div>;
  }

  return (
    <div className="flex justify-center border border-gray-300 shadow-md p-6 rounded-lg mt-6 space-x-6 mb-6">
      {filters.map((f, index) => (
        <button
          key={f.value}
          ref={el => buttonRefs.current[index] = el}
          onClick={() => setFilter(f.value)}
          className={`px-4 py-2 rounded-md font-medium shadow-md transition-colors`}
          style={{
            backgroundColor: filter === f.value ? '#84e187' : '#e5e7eb',
            color: filter === f.value ? '#fff' : '#686868'
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}