import React, {useState, useEffect} from "react";

import "./Search.scss";

import {useLocation, useHistory} from "react-router-dom";

import ProductSearchBar from "components/ProductSearchBar/ProductSearchBar";
import Products from "components/Products/Products";


type Choice = {
	label: string;
	value: string;
}

const Search = (): React.ReactElement => 
{ 
	const [brand, setBrand] = useState<Choice>();
	const [category, setCategory] = useState<Choice>();
	const [sortBy, setSortBy] = useState<Choice>();

	useEffect(() =>
	{
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
