import React from 'react';
import { LayoutedList } from '../../components';

const UserList = () => {
  return (
    <div className="h-full w-full flex flex-col gap-8">
      <div className="bg-main w-full py-4 px-8 border-t border-solid border-[#fff] flex items-center tracking-wide text-2xl text-[#fff] ">
        User List
      </div>
      <LayoutedList />
    </div>
  );
};

export default UserList;
