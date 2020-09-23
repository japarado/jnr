import apiService from "services/apiService";

async function index(): Promise<string[]>
{
	const res = await apiService.get("http://localhost:8000/posts");
	console.log(res);
	return [];
}

async function searchByTerm(searchTerm: string): Promise<string[]>
{
	console.log(`Searching for ${searchTerm}`);
	await apiService.get("https://pma.apc", {
		params: {searchTerm}
	});
	return [];
}

export {index, searchByTerm};
