import React from "react";

import "./Navbar.scss";

import {NavLink} from "react-router-dom";

import NavbarLogo from "../../assets/img/site_logos/transparent_logo.png";
import SearchField from "components/Navbar/SearchField/SearchField";

const Navbar = (): React.ReactElement => (
	<div className="Navbar">
		<img className="Navbar__logo" src={NavbarLogo} alt="JNR Logo" />

		<ul className="Navbar__links">
			<li className="Navbar__item">
				<NavLink exact to="/" className="Navbar__link" activeClassName="Navbar__link--active">Home</NavLink>
			</li>
			<li className="Navbar__item">
				<NavLink to="/about-us" className="Navbar__link" activeClassName="Navbar__link--active">About Us</NavLink>
			</li>
			<li className="Navbar__item">
				<NavLink to="/products/" className="Navbar__link" activeClassName="Navbar__link--active">Products</NavLink>
			</li>
			<li className="Navbar__item">
				<NavLink to="/brands" className="Navbar__link" activeClassName="Navbar__link--active">Brands</NavLink>
			</li>
			<li className="Navbar__item">
				<NavLink to="/search" className="Navbar__link" activeClassName="Navbar__link--active">Search</NavLink>
			</li>
		</ul>

		<SearchField/>
	</div>
);

export default Navbar;
