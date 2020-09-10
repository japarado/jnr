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

const ProductCategories = (): React.ReactElement => (
	<div className="ProductCategories">
		<h1 className="ProductCategories__header t-section-header u-center-text u-m-bottom-3">Product Categories</h1>

		<div className="ProductCategories__categories">
			{sampleData.map((category) => (
				<div className="ProductCategories__category" key={category.id}>
					<ProductCategory imgUrl={category.imgUrl} text={category.text} id={category.id}/>
				</div>
			))
			}
		</div>
	</div>
);


export default ProductCategories;
