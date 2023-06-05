import React from 'react'
import Postitem from '../Parts/Postitem'
import Pagination from '../Parts/Pagination'
import AdvertiseBox from '../Parts/AdvertiseBox'

const Posts = () => {
  return (
    <div className="col-lg-8">
		<div className="blog-box list-style">
        <Postitem/>
        <Postitem/>
        <Postitem/>
        <Postitem/>
        <AdvertiseBox/>
        <Postitem/>
        <Postitem/>
        <Pagination/>
        </div>
    </div>
  );
};

export default Posts;