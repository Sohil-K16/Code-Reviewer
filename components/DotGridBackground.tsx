import React from 'react';

const DotGridBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-brand-bg">
        <div 
            className="absolute inset-0 h-full w-full"
            style={{
                backgroundImage: 'radial-gradient(circle at center, #374151 1px, transparent 1px)',
                backgroundSize: '20px 20px',
            }}
        />
    </div>
  );
};

export default DotGridBackground;
