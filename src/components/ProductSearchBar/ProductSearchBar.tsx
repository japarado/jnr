import React, {useState, useEffect} from "react";

import "./ProductSearchBar.scss";

import Select from "react-select";

type Choice = {
	label?: string;
	value?: string;
}

const ProductSearchBar = (): React.ReactElement => 
{
	const [brand, setBrand] = useState({});
	const [category, setCategory] = useState({});
	const [sortBy, setSortBy] = useState({});

	const brands: Choice[] = [];
	const categories: Choice[] = [];
	const sortBys: Choice[] = [];

	useEffect(() => 
	{
		async function search(): Promise<Choice[]> 
		{
			return [];
		}
	});

	return(
		<div className="ProductSearchBar">
			<div className="ProductSearchBar__pair">
				<p className="ProductSearchBar__label">Brand</p>
				<Select className="ProductSearchBar__select" options={brands}/>
			</div>
			<div className="ProductSearchBar__pair">
				<p className="ProductSearchBar__label">Category</p>
				<Select className="ProductSearchBar__select" options={categories}/>
			</div>
			<div className="ProductSearchBar__pair">
				<p className="ProductSearchBar__label">Sort By</p>
				<Select className="ProductSearchBar__select" options={sortBys}/>
			</div>
		</div>
	);
};
 
export default ProductSearchBar;
