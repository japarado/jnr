import apiService from "services/apiService";

interface QueryParams {
	[key: string]: string;
}

type Product = {
	id: number;
	name: string;
	brand: string;
	price: string;
	currency?: string;
	desc?: string;
}

async function index(): Promise<Product[]>
{
	const res = await apiService.get("http://localhost:8000/posts");
	console.log(res);
	return [];
}

async function search(query: QueryParams): Promise<Product[]>
{
	const res = await apiService.get("http://localhost:8000/posts", {params: query});
	console.log(`Searching for: ${query}`);
	console.log(res);
	return [];
}

export {index, search};
