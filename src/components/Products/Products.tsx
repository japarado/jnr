import React, {useState, useEffect} from "react";

import classes from "./Products.module.scss";

import {search as productSearch} from "services/products";
import {ProductQuery, Product as ProductType} from "types";

import Product from "components/Product/Product";

type Props = {
	query?: ProductQuery;
}

const Products = (props: Props): React.ReactElement => 
{ 
	const [products, setProducts] = useState<ProductType[]>();

	useEffect(() => 
	{
		async function fetchProducts(): Promise<void>
		{
			const res = await productSearch(props.query);
			setProducts(res);
		}

		fetchProducts();
	}, [props.query]);

	return(
		<div className={classes.Products}>
			{products?.map((product) => <Product {...product}/>)}
		</div>
	);
};

export 	default Products;
