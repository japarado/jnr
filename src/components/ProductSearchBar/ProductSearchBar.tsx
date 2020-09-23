import React from "react";

import "./ProductSearchBar.scss";

import Select from "react-select";

type Choice = {
	label: string;
	value: string;
}

type Props = {
	brands?: Choice[];
	categories?: Choice[];
	sortBys?: Choice[];
}

const ProductSearchBar = (props: Props): React.ReactElement => 
{
	return(
		<div className="ProductSearchBar">
			<div className="ProductSearchBar__pair">
				<p className="ProductSearchBar__label">Brand</p>
				<Select className="ProductSearchBar__select" placeholder="Brand" options={props.brands}/>
			</div>
			<div className="ProductSearchBar__pair">
				<p className="ProductSearchBar__label">Category</p>
				<Select className="ProductSearchBar__select" placeholder="Category" options={props.categories}/>
			</div>
			<div className="ProductSearchBar__pair">
				<p className="ProductSearchBar__label">Sort By</p>
				<Select className="ProductSearchBar__select" placeholder="Sort By" options={props.sortBys}/>
			</div>
		</div>
	);
};
 
export default ProductSearchBar;
