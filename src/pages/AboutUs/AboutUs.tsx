import React from "react";
import Hero from "components/Hero/Hero";

const AboutUs = (): React.ReactElement => (
	<main className="AboutUs">

		<div className="AboutUs__section">
			<Hero imgUrl="https://picsum.photos/1920/1080" heroText="About Us"/>
		</div>
	</main>
);

export default AboutUs;
