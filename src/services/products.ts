import apiService from "services/apiService";

async function index(): Promise<string[]>
{
	await apiService.get("https://pma.apc");
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
