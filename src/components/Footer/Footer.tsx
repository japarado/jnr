import React from "react";

import "./Footer.scss";

import Logo from "../../assets/img/site_logos/transparent_logo.png";
import FacebookIcon from "../../assets/img/site_logos/facebook.png";
import GmailIcon from "../../assets/img/site_logos/gmail.png";
import InstagramIcon from "../../assets/img/site_logos/instagram.png";

const Footer = (): React.ReactElement => (
	<footer className="Footer">

		<img className="Footer__logo" src={Logo} alt="JNR Logo"></img>

		<div className="Footer__icons">
			<img className="Footer__icon" src={FacebookIcon} alt="Facebook" />
			<img className="Footer__icon" src={GmailIcon} alt="Gmail" />
			<img className="Footer__icon" src={InstagramIcon} alt="Instagram" />
		</div>

		<p className="Footer__copyright">
			&copy; 2019 J&R Appliances. All Rights Reserved.
		</p>
	</footer>
);

export default Footer;
