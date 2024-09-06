// src/routes/AppRoutes.js

import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import WithHeaderFooter from "../layouts/WithHeaderFooter";
import { Banner2 } from "../Components/Banner2/Banner";
import { Banner } from "../Components/Banner/Banner";
import {NavBar2} from "../Components/NavBar2/NavBar";
import { Introduce } from "../Components/Introduce/Introduce";
import { Destination } from "../Components/Destination/Destination";
import { Portiforlio } from "../Components/Portfolio/Portiforlio";
import { Promotion } from "../Components/Promotion/Promotion";
import { Reviews } from "../Components/Reviews/Reviews";
import { Questions } from "../Components/Questions/Questions";
import { Subscribe } from "../Components/Subscribe/Subscribe";
import NotFound from "../pages/NotFound/NotFound";
import Destinations from "../pages/Destinations/Destinations";
import { listDestinations } from "../pages/Destinations/dataDestinations";
import LoginComponent from "../pages/LoginPage/LoginPage";

// Wrapper component for paginated destinations
const PaginatedDestinations = () => {
    const itemsPerPage = 12;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(listDestinations.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(listDestinations.length / itemsPerPage));
    }, [itemOffset]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % listDestinations.length;
        setItemOffset(newOffset);
    };

    return (
        <Destinations
            currentItems={currentItems}
            onPageChange={handlePageClick}
            pageCount={pageCount}
        />
    );
};

const AppRoutes = () => (
    <Routes>
        <Route element={<WithHeaderFooter />}>
            <Route
                path="/"
                element={
                    <>
                        <Banner2 />
                        <Introduce />
                        <Destination />
                        <Portiforlio />
                        <Promotion />
                        {/* <Reviews /> */}
                        <Questions />
                        <Subscribe />
                    </>
                }
            />
            <Route
                path="/destinations"
                element={
                    <>
                        {/* <NavBar2 /> */}
                        <Banner />
                        <PaginatedDestinations />
                    </>
                }
            />
        </Route>
        <Route path="/login" element={
            <>
            <LoginComponent onSubmit={function(){console.log("submit")}} />
            </>
            } />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default AppRoutes;
