import React from 'react';

const SideBar = ({phoneNumber}) => {
  return (
    <div className='fixed left-0 top-0 bg-slate-800 w-1/5 h-screen overflow-y-auto'>
      <h3 className='p-4 text-2xl text-center bg-slate-700 border-b-2 border-slate-700'>Все чаты</h3>
      <div className='p-4 text-2xl cursor-pointer border-b-2 border-slate-500 w-5/6 ml-auto'>{phoneNumber}</div>
    </div>
  );
};

export default SideBar;