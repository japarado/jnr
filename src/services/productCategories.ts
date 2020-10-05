import apiService, {PRIMARY_ENDPOINT} from "./apiService";

async function index(): Promise<string[]>
{
	const body: string[] = [];
	try 
	{
		const response = await apiService.get(`${PRIMARY_ENDPOINT}/posts?query=PRODUCT_CATEGORIES`);
		console.log(response);
	}
	catch(e) 
	{
		console.log(e);
	}
	return body;
}

export {index};
