import React, {useState, useEffect} from "react";

import "./ContactForm.scss";

import {submit} from "services/contactForm";

import TextInput from "components/FormElements/TextInput/TextInput";
import TextArea from "components/FormElements/TextArea/TextArea";
import Button from "components/Button/Button";

const ContactForm = (): React.ReactElement => 
{ 
	const [name, setName] = useState("Justin Parado");
	const [contactNumber, setContactNumber] = useState("09122061571");
	const [email, setEmail] = useState("justin.parado.personal@gmail.com");
	const [message, setMessage] = useState("This is a nice message. Your website has a lot of room for improvement");

	useEffect(() => 
	{
		/* console.table({name, contactNumber, email, message}); */
	}, [name, contactNumber, email, message]);

	function clearForm() 
	{
		setName("");
		setContactNumber("");
		setEmail("");
		setMessage("");
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> 
	{
		e.preventDefault();
		await submit({name, contactNumber, email, message});
		clearForm();
	}


	return(
		<form
			className="ContactForm"
			onSubmit={handleSubmit}>
			<div className="ContactForm__form-group">
				<TextInput
					name="name"
					placeholder="Name"
					value={name}
					changeHandler={setName}/>
			</div>

			<div className="ContactForm__form-group">
				<TextInput
					name="contact-number"
					placeholder="Contact Number"
					value={contactNumber}
					changeHandler={setContactNumber}/>
			</div>

			<div className="ContactForm__form-group">
				<TextInput
					name="email"
					type="email"
					placeholder="Email"
					value={email}
					changeHandler={setEmail}/>
			</div>

			<div
				className="ContactForm__form-group"
				placeholder="Message">
				<TextArea
					name="message"
					placeholder="Message"
					value={message}
					changeHandler={setMessage}/>
			</div>

			<div className="ContactForm__button">
				<Button>Submit</Button>
			</div>
		</form>
	);
};


export default ContactForm;
