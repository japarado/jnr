import React, {useState, useEffect} from "react";

import "./ContactForm.scss";

import TextInput from "components/FormElements/TextInput/TextInput";
import TextArea from "components/FormElements/TextArea/TextArea";
import Button from "components/Button/Button";

const ContactForm = (): React.ReactElement => 
{ 
	const [name, setName] = useState("");
	const [contactNumber, setContactNumber] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => 
	{
		/* console.table({name, contactNumber, email, message}); */
	}, [name, contactNumber, email, message]);

	return(
		<form className="ContactForm">
			<div className="ContactForm__form-group">
				<TextInput name="name" placeholder="Name" changeHandler={setName}/>
			</div>

			<div className="ContactForm__form-group">
				<TextInput name="contact-number" placeholder="Contact Number" changeHandler={setContactNumber}/>
			</div>

			<div className="ContactForm__form-group">
				<TextInput name="email" type="email" placeholder="Email" changeHandler={setEmail}/>
			</div>

			<div className="ContactForm__form-group" placeholder="Message">
				<TextArea name="message" placeholder="Message" changeHandler={setMessage}/>
			</div>

			<div className="ContactForm__button">
				<Button text="Submit"/>
			</div>
		</form>
	);
};


export default ContactForm;
