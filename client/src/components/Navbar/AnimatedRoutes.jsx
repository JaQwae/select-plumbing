import React, { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
const Home = lazy(() => import('../../pages/Home/Home'));
const About = lazy(() => import('../../pages/About/About'));
const Services = lazy(() => import('../../pages/Services/Services'));
const Gallery = lazy(() => import('../../pages/Gallery/Gallery'));
const Blog = lazy(() => import('../../pages/Blog/Blog'));
const News = lazy(() => import('../../pages/News/News'));
const Promotions = lazy(() => import('../../pages/Promotions/Promotions'));
// import { AnimatePresence } from "framer-motion";

export function AnimatedRoutes() {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/news" element={<News />} />
                <Route path="/promotions" element={<Promotions />} />
            </Routes>
        </Suspense>
    )
}