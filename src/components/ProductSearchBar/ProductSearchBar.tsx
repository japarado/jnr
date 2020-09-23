import React, {useState, useEffect} from "react";

import "./ProductSearchBar.scss";

import Select, {ValueType, ActionMeta} from "react-select";

type Choice = {
	label: string;
	value: string;
}

type OnChange = (value: ValueType<Choice>, actionMeta: ActionMeta<Choice>) => void;

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
			const brands = [
				{
					label: "Condura",
					value: "condura",
				},
				{
					label: "Colin",
					value: "colin",
				}
			];
			setBrands(brands);
		}

		async function fetchCategories(): Promise<void>
		{
			const categories = [
				{
					label: "Air Conditioning",
					value: "air-conditioning",
				},
				{
					label: "Ceiling Fan",
					value: "ceiling-fan",
				}
			];
			setCategories(categories);
		}

		async function fetchSortBys(): Promise<void>
		{
			const sortBys = [
				{
					label: "Best Sellers",
					value: "best-sellers",
				},
				{
					label: "New Arrivals",
					value: "new-arrivals",
				}
			];
			setSortBys(sortBys);
		}

		fetchBrands();
		fetchCategories();
		fetchSortBys();

	}, []);

	const changeBrand = (value: ValueType<Choice>, actionMeta: ActionMeta<Choice>): void => props.handleUpdateBrand(value);
	const changeCategory = (value: ValueType<Choice>, actionMeta: ActionMeta<Choice>): void => props.handleUpdateCategory(value);
	const changeSortBy = (value: ValueType<Choice>, actionMeta: ActionMeta<Choice>): void => props.handleUpdateSortBy(value);

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
				<Select className="ProductSearchBar__select" placeholder="Sort By" options={sortBys} value={props.category} onChange={changeSortBy}/>
			</div>
		</div>
	);
};
 
export default ProductSearchBar;
