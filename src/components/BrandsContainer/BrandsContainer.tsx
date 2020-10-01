import React, {useState, useEffect} from "react";

import "./BrandsContainer.scss";

import PanasonicImg from "assets/img/brand_logos/panasonic.png";

import {index as brandIndex} from "services/brands";

import {Link} from "react-router-dom";

import Brand from "components/Brand/Brand";


type Brand = {
	id?: number;
	slug: string;
	imgUrl: string;
}

const mockBrands: Brand[] = [
	{
		slug: "panasonic",
		imgUrl: PanasonicImg
	},
	{
		slug: "panasonic",
		imgUrl: PanasonicImg
	},
	{
		slug: "panasonic",
		imgUrl: PanasonicImg
	},
	{
		slug: "panasonic",
		imgUrl: PanasonicImg
	},
	{
		slug: "panasonic",
		imgUrl: PanasonicImg
	},
	{
		slug: "panasonic",
		imgUrl: PanasonicImg
	},
	{
		slug: "panasonic",
		imgUrl: PanasonicImg
	},
	{
		slug: "panasonic",
		imgUrl: PanasonicImg
	},
	{
		slug: "panasonic",
		imgUrl: PanasonicImg
	},
	{
		slug: "panasonic",
		imgUrl: PanasonicImg
	},
	{
		slug: "panasonic",
		imgUrl: PanasonicImg
	},
	{
		slug: "panasonic",
		imgUrl: PanasonicImg
	},
	{
		slug: "panasonic",
		imgUrl: PanasonicImg
	},
	{
		slug: "panasonic",
		imgUrl: PanasonicImg
	},
	{
		slug: "panasonic",
		imgUrl: PanasonicImg
	},
];

mockBrands.forEach((brand: Brand, idx: number) => brand.id = idx);

const BrandsContainer = (): React.ReactElement => 
{
	const [brands, setBrands] = useState<Brand[]>();

	useEffect(() => 
	{
		async function fetchBrands() 
		{
			await brandIndex();
			setBrands([]);
		}
		fetchBrands();
	}, []);

	return(
		<div className="BrandsContainer">
			{
				mockBrands.map((brand: Brand) => (
					<Link
						to={`/search?brand=${brand.slug}`}
						key={brand.id}
						className="BrandsContainer__brand">
						<Brand imgUrl={brand.imgUrl}/>
					</Link>
				))
			}
		</div>
	);
};

export default BrandsContainer;
