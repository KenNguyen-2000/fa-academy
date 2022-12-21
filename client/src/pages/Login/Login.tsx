import React, { useState } from 'react';
import './Login.styles.scss';

import { VisibilityOff } from '../../Icons';
import { Footer } from '../../components';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showpassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    // const res = await fetch(`${process.env.REACT_APP_DOMAIN}/auth/login`, {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify({
    //     fullName: 'Nguyen Thanh Kien',
    //     email,
    //     password,
    //   }),
    // });

    const res = await fetch(
      `${process.env.REACT_APP_DOMAIN}/user/role/639eb3a1226951c261a1ba53`,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          role: 'role',
        }),
      }
    );
    const { status, data, message } = await res.json();
    if (status === 200) {
      console.log(message);
      document.cookie = `accessToken=${data.accessToken}`;
      navigate('/');
    }
  };

  return (
    <div className="login__wrapper w-full h-screen  flex flex-col overflow-hidden">
      {/* <LoginHeader /> */}

      <div className="login__body w-full flex-grow">
        <div className="login__form absolute top-44 right-14 flex flex-col items-center gap-[50px] px-5 py-[50px] bg-[#fff]">
          <div className="flex flex-col gap-[25px] items-center">
            <h1 className="tracking-[0.2em] font-bold text-4xl max-w-[515px] whitespace-normal text-center">
              FPT Fresh Academy Training Management
            </h1>
            <p className="text-base">
              If you don’t have the account, please contact{' '}
              <a className="underline text-blue-main">FA.HCM@fsoft.com.vn</a>
            </p>
          </div>

          <div className="flex flex-col gap-5 w-96">
            <div className="bg-[#F1F1F1] rounded-[10px] p-5 w-full">
              <input
                type="text"
                placeholder="Enter Email"
                className="bg-box outline-none w-3/4 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="bg-[#F1F1F1] rounded-[10px] p-5 w-full flex justify-between">
              <input
                type={`${showpassword ? 'text' : 'password'}`}
                placeholder="Password"
                className="bg-box outline-none w-3/4 text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <VisibilityOff
                fill="#000"
                className="cursor-pointer"
                onClick={() => setShowPassword(!showpassword)}
              />
            </div>
            <NavLink
              to={'/forgot-password'}
              className="italic self-end text-un-modified text-sm no-underline"
            >
              Forgot password?
            </NavLink>
            <button
              id="sign-in__btn"
              className="bg-main w-full flex items-center justify-center p-5 font-bold rounded-[10px] text-[#fff] text-base"
              disabled={email === '' && password === ''}
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
