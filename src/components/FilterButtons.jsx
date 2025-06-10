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

    buttonRefs.current.forEach((btn, index) => {
      if (!btn || !filters[index]) return;
      
      const isActive = filters[index].value === filter;
      
      anime({
        targets: btn,
        backgroundColor: isActive ? '#84e187' : '#e5e7eb',
        color: isActive ? '#fff' : '#686868',
        scale: isActive ? [0.95, 1] : 1,
        duration: 100,
        easing: 'easeOutQuad'
      });
    });
  }, [filter, filters]);

  const handleClick = (value, e) => {
    setFilter(value);
    
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    
    Object.assign(ripple.style, {
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      transform: 'scale(0)',
      pointerEvents: 'none',
    });
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    Object.assign(ripple.style, {
      width: `${size}px`,
      height: `${size}px`,
      left: `${e.clientX - rect.left - size/2}px`,
      top: `${e.clientY - rect.top - size/2}px`,
    });
    
    button.appendChild(ripple);
    
    anime({
      targets: ripple,
      opacity: [1, 0],
      scale: [0, 2],
      duration: 600,
      easing:'easeOutSine',
      complete: () => ripple.remove()
    });
  };

  if (!filters || !Array.isArray(filters)) {
    return <div className="text-red-500">Ошибка</div>;
  }

  return (
    <div className="flex justify-center border border-gray-300 shadow-md p-6 rounded-lg mt-6 space-x-6 mb-6">
      {filters.map((f, index) => (
        <button
          key={f.value}
          ref={el => buttonRefs.current[index] = el}
          onClick={(e) => handleClick(f.value, e)}
          className="px-4 py-2 custom-active-buttons rounded-md font-medium shadow-md transition-colors relative overflow-hidden"
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