type SimpleChoice = {
	label: string;
	value: string;
}

type AnyChoice = {
	[key: string]: unknown;
}

export type ProductQuery = {
	brand?: string;
	category?: string;
	sortby?: string;
}

export {Product, ProductQuery} from "services/products";

export type Choice = SimpleChoice & AnyChoice;
