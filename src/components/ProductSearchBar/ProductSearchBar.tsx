import React, {useState, useEffect} from "react";

import "./ProductSearchBar.scss";

import {index as brandIndex} from "services/brands";
import {index as categoryIndex} from "services/categories";
import {index as sortByIndex} from "services/sortBys";

import Select, {ValueType} from "react-select";

type Choice = {
	label: string;
	value: string;
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
			if(props.brand) 
			{
				const brand = brands.find((brand) => brand.value === props.brand?.value);
				props.handleUpdateBrand(brand);
			}
			else {
				props.handleUpdateBrand(brands[0])
			}
		}

		async function fetchCategories(): Promise<void>
		{
			const response = await categoryIndex();
			const categories = response.map((category) => 
			{
				return {label: category.name, value: category.name};
			});
			setCategories(categories);
			props.handleUpdateCategory(categories[0]);
		}

		async function fetchSortBys(): Promise<void>
		{
			const response = await sortByIndex();
			const sortBys = response.map((sortBy) => 
			{
				return {label: sortBy.name, value: sortBy.name};
			});
			setSortBys(sortBys);
			props.handleUpdateSortBy(sortBys[0]);
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
				<Select className="ProductSearchBar__select" placeholder="Brand" options={brands} value={props.brand} onChange={changeBrand}/>
			</div>
			<div className="ProductSearchBar__pair">
				<p className="ProductSearchBar__label">Category</p>
				<Select className="ProductSearchBar__select" placeholder="Category" options={categories} value={props.category} onChange={changeCategory}/>
			</div>
			<div className="ProductSearchBar__pair">
				<p className="ProductSearchBar__label">Sort By</p>
				<Select className="ProductSearchBar__select" placeholder="Sort By" options={sortBys} value={props.sortBy} onChange={changeSortBy}/>
			</div>
		</div>
	);
};

export default ProductSearchBar;
