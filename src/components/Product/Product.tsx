import React from "react";

import "./Product.scss";

import Button from "components/Button/Button";

type Props = {
	id: number | string;
	name: string;
	brand: string;
	desc?: string;
	price?: number;
}

const Product = ():  React.ReactElement => (
	<div className="Product">
		<img className="Product__img" src="" alt="" />
		<h3 className="Product__name"></h3>
		<p className="Product__price"></p>
		<Button className="Product__button"/>
	</div>
);

export default Product;
