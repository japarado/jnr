import React from "react";

import "./Brands.scss";

import Hero from "components/Hero/Hero";

const Brands = (): React.ReactElement => (
	<main className="Brands">
		<div className="Brands__section">
			<Hero heroText="Brands" imgUrl="https://picsum.photos/1920/1080"/>
		</div>
	</main>
);

export default Brands;
