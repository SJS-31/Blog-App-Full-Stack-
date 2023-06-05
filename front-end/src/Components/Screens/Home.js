import React from 'react'
import Header from "../Parts/Header"
import Footer from "../Parts/Footer"
import FreshStories from "../Parts/FreshStories"
import Slider from "../Parts/Slider"
import TrendingPost from "../Parts/TrendingPost"

const Home = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <TrendingPost/>
    <FreshStories/>
    <Footer/>
    </>
  );
};

export default Home;