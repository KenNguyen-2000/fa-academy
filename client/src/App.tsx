import React from 'react';
import './App.css';
import { Login, Home, ForgotPassword, ResetCode, ResetPassword } from './pages';
import { Routes, Route } from 'react-router';
import { RouteInterface } from './interface';

function App(): JSX.Element {
  const publicRoute: RouteInterface[] = [
    {
      path: '/login',
      component: <Login />,
    },
    {
      path: 'forgot-password',
      component: <ForgotPassword />,
    },
    {
      path: 'reset-code',
      component: <ResetCode />,
    },
    {
      path: 'reset-password',
      component: <ResetPassword />,
    },
    {
      path: '/',
      component: <Home />,
    },
  ];

  return (
    <div className="App">
      <Routes>
        {publicRoute.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
