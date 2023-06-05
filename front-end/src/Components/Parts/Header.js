import React from 'react'
import Navbar from '../Parts/Navbar'

const Header = () => {
  return (
        <header className="clearfix header-style5">
			<div className="logo-place">
				<div className="container">
					<div className="inner-logo-place">
						<a className="navbar-brand" href="/">
							BLOG APP
						</a>
					</div>
				</div>
			</div>
			<Navbar/>
		</header>
  );
};

export default Header;
