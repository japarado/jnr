type Category = {
	id: number;
	name: string;
}

async function index(): Promise<Category[]> 
{
	return [
		{
			id: 1,
			name: "Air Conditioning",
		},
		{
			id: 2,
			name: "Ceiling Fan",
		}
	];
}

export {index};
