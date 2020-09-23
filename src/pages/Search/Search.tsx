import React from "react";
import ProductSearchBar from "components/ProductSearchBar/ProductSearchBar";

const Search = (): React.ReactElement => 
{ 
	return(
		<div className="Search">
			<div className="Search__section">
				<ProductSearchBar/>
			</div>
		</div>
	);
};

export default Search;
