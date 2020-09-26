type Category = {
	id: number;
	name: string;
}

async function index(): Promise<Category[]> 
{
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
