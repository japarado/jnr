import React, {useState, useEffect} from "react";

import "./Products.scss";

import {ProductQuery} from "types";

import Product from "components/Product/Product";


type Props = {
	query?: ProductQuery;
}

const Products = (): React.ReactElement => 
{ 
	return(
		<div className="Products">
			<Product/>
		</div>
	);
};

export 	default Products;
