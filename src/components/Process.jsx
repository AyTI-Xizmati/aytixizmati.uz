import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Maslahat',
      description: 'Sizning ehtiyojlaringizni o\'rganamiz va eng yaxshi yechimlarni taklif qilamiz.'
    },
    {
      id: 2,
      number: '02',
      title: 'Rejalashtirish',
      description: 'Loyiha strukturasini ishlab chiqamiz va dizayn prototipi tayyorlaymiz.'
    },
    {
      id: 3,
      number: '03',
      title: 'Ishlab chiqish',
      description: 'Zamonaviy texnologiyalar yordamida saytingizni professional darajada yaratamiz.'
    },
    {
      id: 4,
      number: '04',
      title: 'Testlash va Ishga tushirish',
      description: 'Saytni sinab ko\'ramiz va internetga joylaymiz. Sizga ishlatish bo\'yicha o\'rgatamiz.'
    }
  ];

  return (
    <section className="process" id="jarayon">
      <div className="container">
        <h2 className="section-title">Ish Jarayoni</h2>
        <p className="section-subtitle">
          Loyihangizni qanday amalga oshiramiz
        </p>
        
        <div className="process-timeline">
          {steps.map(step => (
            <div key={step.id} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
