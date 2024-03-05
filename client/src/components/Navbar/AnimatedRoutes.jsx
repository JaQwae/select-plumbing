import React, { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
const Home = lazy(() => import('../Pages/Home/Home'));
const About = lazy(() => import('../Pages/About/About'));
const Services = lazy(() => import('../Pages/Services/Services'));
const Gallery = lazy(() => import('../Pages/Gallery/Gallery'));
const Blog = lazy(() => import('../Pages/Blog/Blog'));
const News = lazy(() => import('../Pages/News/News'));
const Promotions = lazy(() => import('../Pages/Promotions/Promotions'));
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