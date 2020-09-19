import React from "react";

import "./ContactUs.scss";

import Map from "components/Map/Map";
import ContactForm from "components/ContactForm/ContactForm";

const ContactUs = (): React.ReactElement => (
	<div className="ContactUs">
		<div className="ContactUs__contact">

			<div className="ContactUs__map u-m-bottom-3">
				<Map/>
			</div>

			<div className="ContactUs__form">
				<ContactForm/>
			</div>
		</div>
	</div>
);

export default ContactUs;
