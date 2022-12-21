import React, { useState } from 'react';
import LoginHeader from '../LoginHeader';
import { Footer } from '../../../components';
import '../Login.styles.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { VisibilityOff } from '../../../Icons';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showpassword, setShowPassword] = useState('');

  const navigate = useNavigate();

  return (
    <div className=" w-full h-screen flex flex-col overflow-hidden">
      <LoginHeader />
      <div className="login__body w-full h-full flex-grow flex flex-col items-center justify-center  relative">
        <div className=" bg-[#fff] w-[614px] py-[50px] px-5 flex flex-col items-center gap-[50px]">
          <div className="w-full flex flex-col gap-[25px] items-center">
            <h1 className="tracking-[0.2em] font-bold text-4xl text-center">
              Enter Reset Password
            </h1>
            <p className="text-base">We sent the reset code to your email</p>
          </div>
          <div className="w-[429px] p-5 flex flex-col gap-[10px]">
            <div className="bg-[#F1F1F1] rounded-[10px] p-5 w-full flex justify-between">
              <input
                type={`${showpassword === 'password' ? 'text' : 'password'}`}
                placeholder="Password"
                className="bg-box outline-none w-3/4 text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <VisibilityOff
                fill="#000"
                className="cursor-pointer"
                onClick={() => setShowPassword('password')}
              />
            </div>
            <div className="bg-[#F1F1F1] rounded-[10px] p-5 w-full flex justify-between">
              <input
                type={`${
                  showpassword === 'confirmPassword' ? 'text' : 'password'
                }`}
                placeholder="Confirm Password"
                className="bg-box outline-none w-3/4 text-sm"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <VisibilityOff
                fill="#000"
                className="cursor-pointer"
                onClick={() => setShowPassword('confirmPassword')}
              />
            </div>
            <NavLink
              to={'/login'}
              className="italic self-end text-un-modified text-sm no-underline mb-[10px]"
            >
              Back to login?
            </NavLink>
            <button
              id="sign-in__btn"
              className="bg-main w-full flex items-center justify-center p-5 font-bold rounded-[10px] text-[#fff] text-base"
              disabled={
                password === '' ||
                confirmPassword === '' ||
                password !== confirmPassword
              }
              onClick={() => navigate('/reset-password')}
            >
              Send Code
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
