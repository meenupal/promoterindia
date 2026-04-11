import React from 'react';

const Callnow = () => {
  return (
    <a href="tel:+918868857038">
      <button
        style={{
          backgroundColor: '#0070f3',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        📞 Call Now
      </button>
    </a>
  );
};

export default Callnow;
