import React from 'react';

const Title = ({title, description}) => {
  return (
    <div className='text-center'>
        <h1 className='text-6xl sm:text-4xl font-medium'>{title}</h1>
        <p className='max-sm max-w-2xl mt-4 text-slate-500 text-center'>{description}</p>
    </div>
  );
};

export default Title;