import React, {useState, useEffect} from "react";

import "./Search.scss";

import {useLocation, useHistory} from "react-router-dom";
import qs from "query-string";

import {search as productSearch} from "services/products";
import {Choice, ProductQuery} from "types";

import ProductSearchBar from "components/ProductSearchBar/ProductSearchBar";
import Products from "components/Products/Products";

const Search = (): React.ReactElement => 
{ 
	const [brand, setBrand] = useState<Choice>();
	const [category, setCategory] = useState<Choice>();
	const [sortBy, setSortBy] = useState<Choice>();
	const [productQuery, setProductQuery] = useState<ProductQuery>();

	const history = useHistory();
	const location = useLocation();

	useEffect(() =>
	{
		async function searchProducts(query: ProductQuery): Promise<void>
		{
			await productSearch(query);
		}

		function createQuery(): ProductQuery
		{
			const productQuery: ProductQuery = {};
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
			setProductQuery(productQuery);
			return productQuery;
		}

		function adjustQuery(productQuery: ProductQuery): void
		{
			const currentQuery = qs.parse(location.search);
			const combinedQuery = {...currentQuery, ...productQuery};
			history.push({search: qs.stringify(combinedQuery)});
		}

		const productQuery = createQuery();

		adjustQuery(productQuery);
		searchProducts(productQuery);
	}, [brand, category, sortBy]);

	return(
		<div className="Search">
			<div className="Search__search-bar">
				<ProductSearchBar 
					brand={brand}
					category={category}
					sortBy={sortBy}
					handleUpdateBrand={setBrand}
					handleUpdateCategory={setCategory}
					handleUpdateSortBy={setSortBy}
				/>
			</div>

			<div className="Search__products">
				<Products/>
			</div>
		</div>
	);
};

export default Search;
