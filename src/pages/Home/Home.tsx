import React from "react";

import "./Home.scss";

import Hero from "components/Hero/Hero";
import ProductCategories from "components/ProductCategories/ProductCategories";
import ContactUs from "components/ContactUs/ContactUs";

const Home = (): React.ReactElement => (
	<main className="Home">
		<div className="Home__section">
			<Hero imgUrl="https://picsum.photos/1920/1080" heroText="J&R Appliances"/>
		</div>

		<div className="Home__section">
			<ProductCategories/>
		</div>

		<div className="Home__section">
			<ContactUs/>
		</div>
	</main>
);

export default Home;
