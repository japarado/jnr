import React, {useState, useEffect} from "react";

import "./Search.scss";

import {useLocation, useHistory} from "react-router-dom";

import ProductSearchBar from "components/ProductSearchBar/ProductSearchBar";
import Products from "components/Products/Products";
import Button from "components/Button/Button";


type Choice = {
	label: string;
	value: string;
}

type ProductQuery = {
	brand?: string | null;
	category?: string | null;
	sortBy?: string | null;
}

const Search = (): React.ReactElement => 
{ 
	const [brand, setBrand] = useState<Choice>();
	const [category, setCategory] = useState<Choice>();
	const [sortBy, setSortBy] = useState<Choice>();

	const location = useLocation();
	const queryObject = new URLSearchParams(location.search);

	const history = useHistory();

	const productQuery: ProductQuery = {
		brand: queryObject.get("brand"),
		category: queryObject.get("category"),
		sortBy: queryObject.get("sortBy"),
	};

	useEffect(() =>
	{
		console.log({brand, category, sortBy});
	}, [brand, category, sortBy]);

	return(
		<div className="Search">
			<div className="Search__section">
				<ProductSearchBar 
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
