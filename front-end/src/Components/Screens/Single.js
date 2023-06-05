import React from 'react'
import Header from "../Parts/Header"
import Footer from "../Parts/Footer"
import PostDesc from '../Parts/PostDesc'
import Comment from '../Parts/Comment'

const Single = () => {
  return (
    <>
    <Header/>
    <section class="blog-section">
			<div class="container">
      <PostDesc/>
      <Comment/>
      </div>
    </section> 
    <Footer/>
    </>
  );
};

export default Single;