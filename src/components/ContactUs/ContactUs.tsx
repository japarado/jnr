import React from "react";

import "./ContactUs.scss";

import Map from "components/Map/Map";
import ContactForm from "components/ContactForm/ContactForm";

const ContactUs = (): React.ReactElement => (
	<div className="ContactUs">
		<h1 className="ContactUs__header t-section-header u-center-text u-m-bottom-3">Contact Us</h1>

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
