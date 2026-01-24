import React, { useEffect, useState } from 'react';
import './ClickSpark.css';

const ClickSpark = () => {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const spark = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setSparks(prev => [...prev, spark]);

      // Remove spark after animation
      setTimeout(() => {
        setSparks(prev => prev.filter(s => s.id !== spark.id));
      }, 600);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {sparks.map(spark => (
        <div
          key={spark.id}
          className="click-spark"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="spark-particle"
              style={{
                '--angle': `${i * 45}deg`,
              }}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default ClickSpark;
