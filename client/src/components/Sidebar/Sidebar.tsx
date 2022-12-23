import React from 'react';
import { BookOpen, Home, MenuCollapse, MenuOpen } from '../../Icons';

const Sidebar = () => {
  return (
    <div className="w-72 py-8 px-3 bg-[#EDF2F7] flex flex-col gap-6">
      <MenuOpen />
      <Home />
      <BookOpen />
    </div>
  );
};

export default Sidebar;
