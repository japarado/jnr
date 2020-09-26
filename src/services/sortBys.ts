type SortBy = {
	id: number;
	name: string;
}

async function index(): Promise<SortBy[]> 
{
	return [
		{
			id: 1,
			name: "All",
		},
		{
			id: 2,
			name: "Best Sellers",
		},
		{
			id: 3,
			name: "New Arrivals"
		}
	];
}

export {index};
