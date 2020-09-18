import React  from "react";

import "./ProductCategory.scss";

import {Link} from "react-router-dom";

type Props = {
	imgUrl: string;
	text: string;
	id: number | string;
	slug: string;
}

const ProductCategory = (props: Props): React.ReactElement => (
	<Link className="u-unstyled-list" to={`/products/${props.slug}`}>
		<div className="ProductCategory">
			<img className="ProductCategory__image" src={props.imgUrl} alt={props.text} />
			<p className="ProductCategory__text">{props.text}</p>
			<div className="ProductCategory__footer">View More</div>
		</div>
	</Link>
);

export default ProductCategory;
