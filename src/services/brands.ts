import apiService, {PRIMARY_ENDPOINT} from "./apiService";

type Brand = {
	id: number;
	name: string;
}

async function index(): Promise<Brand[]> 
{
	await apiService.get(`${PRIMARY_ENDPOINT}/posts?query=BRANDS`);
	return [
		{
			id: 1,
			name: "All",
		},
		{
			id: 2,
			name: "Panasonic",
		},
		{
			id: 3,
			name: "Colin",
		}
	];
}

export {index};
