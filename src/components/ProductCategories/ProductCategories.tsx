import React from "react";

import "./ProductCategories.scss";
import ProductCategory from "components/ProductCategory/ProductCategory";

import ACImage from "../../assets/img/categories/aircon.png";
import TVImage from "../../assets/img/categories/tv.png";
import CookingImage from "../../assets/img/categories/cooking.png";
import ApplianceImage from "../../assets/img/categories/home_appliances.png";
import MobileImage from "../../assets/img/categories/mobiles_gadgets.png";
import BusinessImage from "../../assets/img/categories/business_machine.png";

const sampleData = [
	{
		imgUrl: ACImage,
		text: "Air Conditioners",
		id: 1,
		slug: "air-conditioners"
	},
	{
		imgUrl: TVImage,
		text: "Television",
		id: 2,
		slug: "television"
	},
	{
		imgUrl: CookingImage,
		text: "Cooking",
		id: 3,
		slug: "cooking"
	},
	{
		imgUrl: ApplianceImage,
		text: "Home Appliances",
		id: 4,
		slug: "home-appliances"
	},
	{
		imgUrl: MobileImage,
		text: "Home Entertainment",
		id: 5,
		slug: "home-entertainment"
	},
	{
		imgUrl: BusinessImage,
		text: "Mobile and Gadgets",
		id: 6,
		slug: "mobile-and-gadgets"
	},
	{
		imgUrl: BusinessImage,
		text: "Monitors",
		id: 7,
		slug: "monitors"
	},
	{
		imgUrl: BusinessImage,
		text: "Small Appliances",
		id: 8,
		slug: "small-appliances"
	},
	{
		imgUrl: BusinessImage,
		text: "Others",
		id: 9,
		slug: "others"
	},
];

const ProductCategories = (): React.ReactElement => (
	<div className="ProductCategories">
		<div className="ProductCategories__categories">
			{sampleData.map((category) => (
				<div className="ProductCategories__category" key={category.id}>
					<ProductCategory imgUrl={category.imgUrl} text={category.text} id={category.id} slug={category.slug}/>
				</div>
			))
			}
		</div>
	</div>
);


export default ProductCategories;
