import apiService, {PRIMARY_ENDPOINT} from "services/apiService";

type ContactForm = {
	name: string;
	contactNumber: string | number;
	email: string;
	message: string;
}

async function submit(contactInfo: ContactForm): Promise<boolean> 
{
	const res = await apiService.get(`${PRIMARY_ENDPOINT}/posts`, {params: contactInfo});
	return true;
}

export {submit};
