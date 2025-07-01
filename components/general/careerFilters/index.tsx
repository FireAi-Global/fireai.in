import React from 'react';

interface CareerFilterBarProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const CareerFilterBar: React.FC<CareerFilterBarProps> = ({ activeFilter, setActiveFilter }) => {
  const filters = ['View all', 'Tech', 'AI', 'Design', 'Management', 'Sales & Marketing'];

  return (
    <div className="mb-8">
      {/* Scrollable filter bar on all devices */}
      <div className="flex space-x-2 md:space-x-4 overflow-x-auto md:overflow-visible mb-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full min-w-[162px] w-fit border cursor-pointer md:px-4 px-3 md:py-2 py-2 ${activeFilter === filter
                ? 'bg-[#141644] text-white border-[#141644]'
                : 'border-[#0915A01F] hover-shadow-md hover:scale-105 transition-all duration-300'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CareerFilterBar;
