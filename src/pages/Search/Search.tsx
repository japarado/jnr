import React, {useState, useEffect} from "react";

import "./Search.scss";

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
