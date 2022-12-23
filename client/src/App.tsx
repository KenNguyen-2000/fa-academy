import React from 'react';
import './App.css';
import {
  Login,
  Home,
  ForgotPassword,
  ResetCode,
  ResetPassword,
  UserList,
} from './pages';
import { Routes, Route } from 'react-router';
import { RouteInterface } from './interface';
import { Footer, Header, Sidebar } from './components';

function App(): JSX.Element {
  const publicRoutes: RouteInterface[] = [
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

  const privateRoutes: RouteInterface[] = [
    {
      path: '/user-list',
      component: <UserList />,
    },
  ];

  const LayoutedPage = ({ component }: any) => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex">
          <Sidebar />
          <div className="flex-grow">{component}</div>
        </div>
        <Footer />
      </div>
    );
  };

  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<LayoutedPage component={route.component} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
