import React from 'react';
import logo from '../../assets/imgs/logo.png';
import unigate from '../../assets/imgs/unigate.png';
import avatar from '../../assets/imgs/avatar.png';

const Header = () => {
  return (
    <div className="h-24 flex justify-between items-center bg-main py-[10px] pl-10 pr-5 z-10">
      <img src={logo} alt="fpt logo" className="h-[60px]" />
      <div className="flex gap-10 items-center">
        <div className="flex gap-[10px] max-h-8 py-[5px] px-[15px] rounded-[30px] bg-[#0B2136] text-[#fff] items-center justify-center text-xs ">
          {' '}
          <img
            src={unigate}
            alt="unigate"
            className="object-cover w-full h-5"
          />
          uniGate
        </div>
        <div className="flex gap-2">
          <div className="rounded-full border border-solid border-[#fff] h-11 w-11 overflow-hidden">
            <img alt="avatar" src={avatar} className="h-full" />
          </div>
          <div className="h-full flex flex-col justify-between items-start text-[#fff] text-base">
            <h1 className="font-bold">Warrior Tran</h1>
            <button className="outline-none border-none hover:underline">
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
