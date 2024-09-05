import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Footer } from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const WithHeaderFooter = () => (
  <>
    {/* <Navbar /> */}
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default WithHeaderFooter;
