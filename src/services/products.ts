import apiService, {PRIMARY_ENDPOINT} from "services/apiService";

export type Product = {
	id: number;
	name: string;
	brand: string;
	price: string;
	currency?: string;
	desc?: string;
	image?: string;
}

export type ProductQuery = {
	brand?: string;
	category?: string;
	sortby?: string;
}

async function index(): Promise<Product[]>
{
	await apiService.get(`${PRIMARY_ENDPOINT}/posts?query=PRODUCTS`);
	return [];
}

async function search(query?: ProductQuery): Promise<Product[]>
{
	// await apiService.get(`${PRIMARY_ENDPOINT}/posts`, {params: query});
	await apiService.get(`${PRIMARY_ENDPOINT}/posts`, {params: query});
	const products: Product[] = [
		{
			id: 1,
			name: "Washing Machine Inverter",
			brand: "Panasonic",
			price: "30,000",
			currency: "PHP",
			desc: "This is a nice product. Please buy more of these",
			image: "https://picsum.photos/400/300"
		},
		{
			id: 2,
			name: "Washing Machine Inverter",
			brand: "Panasonic",
			price: "30,000",
			currency: "PHP",
			desc: "This is a nice product. Please buy more of these",
			image: "https://picsum.photos/400/300"
		},
		{
			id: 3,
			name: "Washing Machine Inverter",
			brand: "Panasonic",
			price: "30,000",
			currency: "PHP",
			desc: "This is a nice product. Please buy more of these",
			image: "https://picsum.photos/400/300"
		},
	];
	return products;
}

export {index, search};
