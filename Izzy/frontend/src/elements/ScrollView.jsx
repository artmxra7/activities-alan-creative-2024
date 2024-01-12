import React from 'react';

const ScrollView = ({ data, formattedNumber }) => {
  const scrollViewContainerStyle = {
    width: '100%',
    maxWidth: '400px',
    height: '320px',
    overflowX: 'auto', 
    // border: '1px solid #ccc',
    whiteSpace: 'nowrap', 
  };

  return (
    <div style={scrollViewContainerStyle}>
      {data.map((item, index) => (
        <div className="bg-gray-400 p-2 rounded-xl items-center" key={index} style={{ display: 'inline-block', marginRight: '10px', width: '180px', height: '95%' }}>
          <img src="../No-image-found.jpg" className="my-auto border border-gray-500 rounded-lg m-2 shadow-md mb-2 mt-1" style={{ width: '150px', height: '150px' }} alt={`item-${index}`} />
          <p className="m-2 text-white font-semibold">{item.name}</p>
          <p className="m-2 text-white text-end">{formattedNumber(item.price)}</p>
        </div>
      ))}
    </div>
  );
};

export default ScrollView;
