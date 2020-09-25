type Brand = {
	id: number;
	name: string;
}

async function index(): Promise<Brand[]> 
{
	return [
		{
			id: 1,
			name: "Panasonic",
		},
		{
			id: 2,
			name: "Colin",
		}
	];
}

export {index};
