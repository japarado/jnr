import apiService from "services/apiService";

type ContactForm = {
	name: string;
	contactNumber: string | number;
	email: string;
	message: string;
}

async function submit(contactInfo: ContactForm): Promise<boolean> 
{
	const res = await apiService.get("http://localhost:8000/posts", {params: contactInfo});
	return true;
}

export {submit};
