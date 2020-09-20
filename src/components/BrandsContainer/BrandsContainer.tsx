import React from "react";

import "./BrandsContainer.scss";

import PanasonicImg from "assets/img/brand_logos/panasonic.png";

import Brand from "components/Brand/Brand";

import {Link} from "react-router-dom";

console.log(typeof PanasonicImg);

type Brand = {
	id?: number;
	url: string;
	imgUrl: string;
}

const brands: Brand[] = [
	{
		url: "",
		imgUrl: PanasonicImg
	},
	{
		url: "",
		imgUrl: PanasonicImg
	},
	{
		url: "",
		imgUrl: PanasonicImg
	},
	/* { */
	/* 	url: "", */
	/* 	imgUrl: PanasonicImg */
	/* }, */
	/* { */
	/* 	url: "", */
	/* 	imgUrl: PanasonicImg */
	/* }, */
	/* { */
	/* 	url: "", */
	/* 	imgUrl: PanasonicImg */
	/* }, */
	/* { */
	/* 	url: "", */
	/* 	imgUrl: PanasonicImg */
	/* }, */
	/* { */
	/* 	url: "", */
	/* 	imgUrl: PanasonicImg */
	/* }, */
	/* { */
	/* 	url: "", */
	/* 	imgUrl: PanasonicImg */
	/* }, */
	/* { */
	/* 	url: "", */
	/* 	imgUrl: PanasonicImg */
	/* }, */
	/* { */
	/* 	url: "", */
	/* 	imgUrl: PanasonicImg */
	/* }, */
	/* { */
	/* 	url: "", */
	/* 	imgUrl: PanasonicImg */
	/* }, */
	/* { */
	/* 	url: "", */
	/* 	imgUrl: PanasonicImg */
	/* }, */
	/* { */
	/* 	url: "", */
	/* 	imgUrl: PanasonicImg */
	/* }, */
	/* { */
	/* 	url: "", */
	/* 	imgUrl: PanasonicImg */
	/* }, */
];

brands.forEach((brand: Brand, idx: number) => brand.id = idx);

const BrandsContainer = (): React.ReactElement => 
{
	return(
		<div className="BrandsContainer">
			{
				brands.map((brand: Brand) => (
					<Link to={brand.url} key={brand.id} className="BrandsContainer__brand">
						<Brand imgUrl={brand.imgUrl}/>
					</Link>
				))
			}
		</div>
	);
};

export default BrandsContainer;
