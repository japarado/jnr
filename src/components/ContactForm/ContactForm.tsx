import React from "react";

import "./ContactForm.scss";

import TextInput from "components/FormElements/TextInput/TextInput";
import TextArea from "components/FormElements/TextArea/TextArea";

const ContactForm = (): React.ReactElement =>( 
	<form className="ContactForm">
		<div className="ContactForm__form-group">
			<TextInput name="name" placeholder="Name"/>
		</div>

		<div className="ContactForm__form-group">
			<TextInput name="contact-number" placeholder="Contact Number"/>
		</div>

		<div className="ContactForm__form-group">
			<TextInput name="email" type="email" placeholder="Email"/>
		</div>

		<div className="ContactForm__form-group" placeholder="Message">
			<TextArea name="message" placeholder="Message"/>
		</div>
	</form>
);


export default ContactForm;
