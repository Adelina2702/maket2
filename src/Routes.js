import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import About from './components/About/About';
import BlockOfWatches from './components/BlockOfWatches/BlockOfWatches';
import BlockOne from './components/BlockOne/BlockOne';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import OurBrands from './components/OurBrands/OurBrands';
import WatchesBlock from './components/WatchesBlock/WatchesBlock';

const  MyRoutes = () => {
    return (
        <>
        <BrowserRouter>
                <Header />
                <BlockOne />
                <WatchesBlock />
                <BlockOfWatches />
                <OurBrands />
                <About />
                <Footer />
        </BrowserRouter>
        </>
    );
};

export default MyRoutes;