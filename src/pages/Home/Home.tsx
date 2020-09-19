import React from "react";

import "./Home.scss";

import Hero from "components/Hero/Hero";
import ProductCategories from "components/ProductCategories/ProductCategories";
import ContactUs from "components/ContactUs/ContactUs";
import SectionHeader from "components/SectionHeader/SectionHeader";

const Home = (): React.ReactElement => (
	<main className="Home">
		<div className="Home__section">
			<Hero imgUrl="https://picsum.photos/1920/1080" heroText="J&R Appliances"/>
		</div>

		<div className="Home__section">
			<SectionHeader text="Product Categories"/>
			<ProductCategories/>
		</div>

		<div className="Home__section">
			<SectionHeader text="Contact Us" classNames="u-m-bottom-3"/>
			<ContactUs/>
		</div>
	</main>
);

export default Home;
