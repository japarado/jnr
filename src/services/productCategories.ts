import apiService from "services/apiService";

async function index(): Promise<string[]>
{
	const body: string[] = [];
	try 
	{
		const response = await apiService.get("https://pma.apc");
		console.log(response);
	}
	catch(e) 
	{
		console.log(e);
	}
	return body;
}

async function getBySlug(slug: string) {
}

export {index};
