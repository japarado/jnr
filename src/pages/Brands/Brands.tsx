import React from "react";

import "./Brands.scss";

import Hero from "components/Hero/Hero";
import BrandsContainer from "components/BrandsContainer/BrandsContainer";

const Brands = (): React.ReactElement => (
	<main className="Brands">

		<div className="Brands__hero">
			<Hero
				heroText="Brands"
				imgUrl="https://picsum.photos/1920/1080"/>
		</div>

		<div className="Brands__brands">
			<BrandsContainer/>
		</div>
	</main>
);

export default Brands;
