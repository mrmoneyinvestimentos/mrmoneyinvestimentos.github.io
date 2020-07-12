import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <>
      <main className="text-gray-900">{children}</main>
    </>
  );
};

export default Layout;
