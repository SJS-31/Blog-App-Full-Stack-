import React from 'react'
import Header from "../Parts/Header"
import Footer from "../Parts/Footer"
import Breadcrumb from '../Parts/Breadcrumb'
import Posts from '../Parts/Posts'
import Sidebar from '../Parts/Sidebar'

const Category = () => {
  return (
    <>
    <Header/>
    <Breadcrumb/>
    <section class="blog-section">
			<div class="container">
				<div class="row">
          <Posts/>
          <Sidebar/>
        </div>
			</div>
		</section>
    <Footer/>
    </>
  );
};

export default Category;