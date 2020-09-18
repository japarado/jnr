import React from "react";

import "./Products.scss";

import {useParams, Route} from "react-router-dom";

import Hero from "components/Hero/Hero";

import ACImage from "../../assets/img/categories/aircon.png";
import TVImage from "../../assets/img/categories/tv.png";
import CookingImage from "../../assets/img/categories/cooking.png";
import ApplianceImage from "../../assets/img/categories/home_appliances.png";
import MobileImage from "../../assets/img/categories/mobiles_gadgets.png";
import BusinessImage from "../../assets/img/categories/business_machine.png";
import CategoryLink from "components/CategoryLink/CategoryLink";
import CategoryLinks from "components/CategoryLinks/CategoryLinks";

type SlugPath = {slug: string};

const sampleData = [
	{
		imgUrl: ACImage,
		text: "Air Conditioners",
		id: 1
	},
	{
		imgUrl: TVImage,
		text: "Television",
		id: 2
	},
	{
		imgUrl: CookingImage,
		text: "Cooking",
		id: 3
	},
	{
		imgUrl: ApplianceImage,
		text: "Home Appliances",
		id: 4
	},
	{
		imgUrl: MobileImage,
		text: "Mobile Gadgets",
		id: 5
	},
	{
		imgUrl: BusinessImage,
		text: "Business Machines",
		id: 6
	},
	{
		imgUrl: BusinessImage,
		text: "Business Machines",
		id: 7
	},
	{
		imgUrl: BusinessImage,
		text: "Business Machines",
		id: 8
	},
	{
		imgUrl: BusinessImage,
		text: "Business Machines",
		id: 9
	}
];

const Products = (): React.ReactElement => 
{
	const {slug}: SlugPath = useParams();
	console.log(slug)

	return (
		<main className="Products">
			<div className="Products__section">
				<Hero imgUrl="https://picsum.photos/1920/1080" heroText="Product Categories"/>
			</div>
			
			<div className="Products__section">
				<CategoryLinks/>
			</div>
		</main>
	);
};

export default Products;
