import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/footer";
import Header from "./component/header";
import About from "./about";
import Blog from "./blog";
import Contact from "./contact";
import Gallery from "./gallery";
import Main from "./main";
import Delivery from "./delivery";
import FAQ from "./faq";
import Help from "./help";
import MoreAboutUs from "./moreAbout";
import BlogPage1 from "./blog-page1";
import BlogPage2 from "./blog-page2";
import BlogPage3 from "./blog-page3";

import "../css/style.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-page1" element={<BlogPage1 />} />
        <Route path="/blog-page2" element={<BlogPage2 />} />
        <Route path="/blog-page3" element={<BlogPage3 />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/help" element={<Help />} />
        <Route path="/moreAbout" element={<MoreAboutUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
