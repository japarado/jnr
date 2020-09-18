import React from "react";

import "./CategoryLink.scss";

import {NavLink} from "react-router-dom";

type Props = {
	id: number;
	text: string;
	slug: string;
}

const CategoryLink = (props: Props): React.ReactElement => (
	<NavLink to={`/products/${props.slug}`} className="CategoryLink" activeClassName="CategoryLink--active">
		{props.text}
	</NavLink>
);

export default CategoryLink; 
