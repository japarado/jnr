import React from "react";

import "./Products.scss";

import {useParams} from "react-router-dom";

import Hero from "components/Hero/Hero";

/* import ACImage from "../../assets/img/categories/aircon.png"; */
/* import TVImage from "../../assets/img/categories/tv.png"; */
/* import CookingImage from "../../assets/img/categories/cooking.png"; */
/* import ApplianceImage from "../../assets/img/categories/home_appliances.png"; */
/* import MobileImage from "../../assets/img/categories/mobiles_gadgets.png"; */
/* import BusinessImage from "../../assets/img/categories/business_machine.png"; */
import CategoryLinks from "components/CategoryLinks/CategoryLinks";
import ProductCategories from "components/ProductCategories/ProductCategories";

type SlugPath = {slug: string};

const Products = (): React.ReactElement => 
{
	const {slug}: SlugPath = useParams();
	console.log(slug);

	return (
		<main className="Products">
			<div className="Products__section">
				<Hero imgUrl="https://picsum.photos/1920/1080" heroText="Product Categories"/>
			</div>
			
			<div className="Products__section">
				<CategoryLinks/>
			</div>

			<div className="Products__section">
				<ProductCategories/>
			</div>
		</main>
	);
};

export default Products;
