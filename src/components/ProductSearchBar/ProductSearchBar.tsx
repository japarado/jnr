import React, {useState, useEffect} from "react";

import "./ProductSearchBar.scss";

import {index as brandIndex} from "services/brands";
import {index as categoryIndex} from "services/categories";
import {index as sortByIndex} from "services/sortBys";

import {useLocation} from "react-router-dom";
import qs from "query-string";

import {Choice} from "types";

import Select, {ValueType} from "react-select";

type Query = {
	brand?: string;
	category?: string;
	sortby?: string;
}

/* type OnChange = (value: ValueType<Choice>, actionMeta: ActionMeta<Choice>) => void; */

type Props = {
	brand?: Choice;
	category?: Choice;
	sortBy?: Choice;
	handleUpdateBrand: Function;
	handleUpdateCategory: Function;
	handleUpdateSortBy: Function;
}

const ProductSearchBar = (props: Props): React.ReactElement => 
{
	const [brands, setBrands] = useState<Choice[]>([]);
	const [categories, setCategories] = useState<Choice[]>([]);
	const [sortBys, setSortBys] = useState<Choice[]>([]);
	
	const location = useLocation();

	const query: Query = qs.parse(location.search);

	useEffect(() => 
	{
		async function fetchBrands(): Promise<void>
		{
			const response = await brandIndex();
			const brands = response.map((brand) => 
			{
				return {label: brand.name, value: brand.name};
			});
			setBrands(brands);
			const fromQuery = brands.find((brand) => brand.value.toLowerCase() === query.brand?.toLowerCase());
			fromQuery ? props.handleUpdateBrand(fromQuery) : props.handleUpdateBrand(brands[0]);
		}

		async function fetchCategories(): Promise<void>
		{
			const response = await categoryIndex();
			const categories = response.map((category) => 
			{
				return {label: category.name, value: category.name};
			});
			setCategories(categories);
			const fromQuery = categories.find((category) => category.value.toLowerCase() === query.category?.toLowerCase());
			fromQuery ? props.handleUpdateCategory(fromQuery) : props.handleUpdateCategory(categories[0]);
		}
		async function fetchSortBys(): Promise<void>
		{
			const response = await sortByIndex();
			const sortBys = response.map((sortBy) => 
			{
				return {label: sortBy.name, value: sortBy.name};
			});
			setSortBys(sortBys);
			const fromQuery = sortBys.find((sortBy) => sortBy.value.toLowerCase() === query.sortby?.toLowerCase());
			fromQuery ? props.handleUpdateSortBy(fromQuery) : props.handleUpdateSortBy(sortBys[0]);
		}
		fetchBrands();
		fetchCategories();
		fetchSortBys();
	}, []);

	const changeBrand = (value: ValueType<Choice>): void => props.handleUpdateBrand(value);
	const changeCategory = (value: ValueType<Choice>): void => props.handleUpdateCategory(value);
	const changeSortBy = (value: ValueType<Choice>): void => props.handleUpdateSortBy(value);

	return(
		<div className="ProductSearchBar">
			<div className="ProductSearchBar__pair">
				<p className="ProductSearchBar__label">Brand</p>
				<Select
					className="ProductSearchBar__select"
					placeholder="Brand"
					options={brands}
					value={props.brand}
					onChange={changeBrand}/>
			</div>
			<div className="ProductSearchBar__pair">
				<p className="ProductSearchBar__label">Category</p>
				<Select
					className="ProductSearchBar__select"
					placeholder="Category"
					options={categories}
					value={props.category}
					onChange={changeCategory}/>
			</div>
			<div className="ProductSearchBar__pair">
				<p className="ProductSearchBar__label">Sort By</p>
				<Select
					className="ProductSearchBar__select"
					placeholder="Sort By"
					options={sortBys}
					value={props.sortBy}
					onChange={changeSortBy}/>
			</div>
		</div>
	);
};

export default ProductSearchBar;
