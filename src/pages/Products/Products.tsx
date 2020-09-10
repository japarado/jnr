import React from "react";

import "./Products.scss";

import {useParams} from "react-router-dom";

type IdPath = {id: string};

const Products = (): React.ReactElement => 
{
	const params: IdPath = useParams();

	return (
		<h1>{params.id ? params.id : "No Params"}</h1>
	);
};

export default Products;
