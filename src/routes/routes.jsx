import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import WithHeaderFooter from '../layouts/WithHeaderFooter';
import {Banner2} from '../Components/Banner2/Banner'
import { Introduce } from '../Components/Introduce/Introduce';
import { Destination } from '../Components/Destination/Destination';
import { Portiforlio } from '../Components/Portfolio/Portiforlio';
import { Promotion } from '../Components/Promotion/Promotion';
import { Reviews } from '../Components/Reviews/Reviews';
import { Questions } from '../Components/Questions/Questions';
import { Subscribe } from '../Components/Subscribe/Subscribe';
import NotFound from '../pages/NotFound/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route element={<WithHeaderFooter />}>
      <Route path="/" element={
        <>
          <Banner2 />
          <Introduce />
          <Destination />
          <Portiforlio />
          <Promotion />
          <Reviews />
          <Questions />
          <Subscribe />
        </>
      } />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
