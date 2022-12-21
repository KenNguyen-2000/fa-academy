import React from 'react';
import './Login.styles.scss';

import logo from '../../assets/imgs/logo.png';
import unigate from '../../assets/imgs/unigate.png';

const LoginHeader = () => {
  return (
    <div className="login_header absolute top-0 right-0 left-0 flex justify-between bg-main py-[10px] pl-10 pr-5 z-10">
      <img src={logo} alt="fpt logo" />
      <div className="flex gap-[10px] py-[5px] px-[15px] rounded-[30px] bg-[#0B2136] text-[#fff] items-center justify-center text-xs ">
        {' '}
        <img src={unigate} alt="unigate" className="object-cover w-full h-5" />
        uniGate
      </div>
    </div>
  );
};

export default LoginHeader;
