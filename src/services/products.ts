import apiService from "services/apiService";

export type Product = {
	id: number;
	name: string;
	brand: string;
	price: string;
	currency?: string;
	desc?: string;
}

export type ProductQuery = {
	brand?: string;
	category?: string;
	sortby?: string;
}

async function index(): Promise<Product[]>
{
	await apiService.get("http://localhost:8000/posts?query=PRODUCTS");
	return [];
}

async function search(query: ProductQuery): Promise<Product[]>
{
	await apiService.get("http://localhost:8000/posts", {params: query});
	return [];
}

export {index, search};
