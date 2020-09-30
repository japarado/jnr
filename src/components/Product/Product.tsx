import React from "react";

import "./Product.scss";

import {Product as ProductType} from "types";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

import Button from "components/Button/Button";

type Props = ProductType;

const Product = (props: Props):  React.ReactElement => (
	<div className="Product">
		<img
			className="Product__img"
			src={props.image}
			alt={props.name} />
		<p className="Product__brand">{props.brand}</p>
		<h3 className="Product__name">{props.name}</h3>
		<p className="Product__price">{props.currency} {props.price}</p>
		<Button className="Product__button">
			View More
			<FontAwesomeIcon
				icon={faChevronRight}
				className="Product__chevron"/>
		</Button>
	</div>
);

export default Product;
