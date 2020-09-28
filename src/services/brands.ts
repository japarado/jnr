type Brand = {
	id: number;
	name: string;
}

async function index(): Promise<Brand[]> 
{
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