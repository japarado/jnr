import apiService, {PRIMARY_ENDPOINT} from "services/apiService";

type Category = {
	id: number;
	name: string;
}

async function index(): Promise<Category[]> 
{
	await apiService.get(`${PRIMARY_ENDPOINT}/posts?query=CATEGORIES`);
	return [
		{
			id: 1,
			name: "All",
		},
		{
			id: 2,
			name: "Air Conditioning",
		},
		{
			id: 3,
			name: "Ceiling Fan",
		}
	];
}

export {index};
