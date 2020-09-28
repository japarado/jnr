import React, {useState, useEffect} from "react";

import "./Search.scss";

import {useLocation, useHistory} from "react-router-dom";
import qs from "query-string";

import {search as productSearch} from "services/products";

import ProductSearchBar from "components/ProductSearchBar/ProductSearchBar";
import Products from "components/Products/Products";


type Choice = {
	label: string;
	value: string;
}

type Query = {
	brand?: string;
	category?: string;
	sortby?: string;
}

const Search = (): React.ReactElement => 
{ 
	const [brand, setBrand] = useState<Choice>();
	const [category, setCategory] = useState<Choice>();
	const [sortBy, setSortBy] = useState<Choice>();

	const history = useHistory();
	const location = useLocation();

	function createQuery(): Query
	{
		const productQuery: Query = {};
		if(brand) 
		{
			productQuery.brand = brand.value;
		}
		if(category) 
		{
			productQuery.category = category.value;
		}
		if(sortBy) 
		{
			productQuery.sortby = sortBy.value;
		}

		return productQuery;
	}

	async function searchProducts(query: Query)
	{
		const res = await productSearch(query);
	}

	useEffect(() =>
	{
		const productQuery = createQuery();
		const currentQuery = qs.parse(location.search);
		const combinedQuery = {...currentQuery, ...productQuery};
		history.push({search: qs.stringify(combinedQuery)});

		searchProducts(productQuery);
	}, [brand, category, sortBy]);

	return(
		<div className="Search">
			<div className="Search__section">
				<ProductSearchBar 
					brand={brand}
					category={category}
					sortBy={sortBy}
					handleUpdateBrand={setBrand}
					handleUpdateCategory={setCategory}
					handleUpdateSortBy={setSortBy}
				/>
			</div>

			<div className="Search__section">
				<Products/>
			</div>
		</div>
	);
};

export default Search;
