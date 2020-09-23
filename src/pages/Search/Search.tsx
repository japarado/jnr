import React from "react";

import "./Search.scss";

import ProductSearchBar from "components/ProductSearchBar/ProductSearchBar";
import Products from "components/Products/Products";

const Search = (): React.ReactElement => 
{ 
	return(
		<div className="Search">
			<div className="Search__section">
				<ProductSearchBar/>
			</div>

			<div className="Search__section">
				<Products/>
			</div>
		</div>
	);
};

export default Search;
