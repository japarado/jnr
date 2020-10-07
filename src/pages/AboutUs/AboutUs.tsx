import React from "react";
import Hero from "components/Hero/Hero";

const AboutUs = (): React.ReactElement => (
	<main className="AboutUs">

		<div className="AboutUs__hero">
			<Hero
				imgUrl="https://picsum.photos/1920/1080"
				heroText="About Us"/>
		</div>

		<div className="AboutUs__story">
			MR. JUAN T. BELO, J&R Appliance Center’s founder, has maintained extensive retail and wholesale appliance operations that span over forty (40) years. Throughout this period, he has developed, nurtured and strongly maintains a loyal and special relationship with all J&R Customers. This he achieved by consistently offering the highest quality appliance products at the best value. Also, personal customer service played an integral in the company’s growth. Establishing the first J&R Store One at Quintin Paredes Street, in the heart of bustling Chinatown, Binondo, Manila in 1971, he quickly gained the respect of the business community and local residents of the area. In order to better serve the public, J&R Store Two opened at Imus, Cavite in 1995.

J&R’s Vision has always been to establish a bond with the customers, while continually aspiring to achieve its objective its objective of having the best level of customer-friendly, retail appliance store operations. The emphasis shall be on delivering Superior Customer Service wherein a vibrant shopping atmosphere is created by utilizing strong, visual merchandising facilities. All these, while maintaining the founder’s tradition of offering quality goods at the best value remains to be the Company Goal.
		</div>

		<div className="AboutUs__showcase">
		</div>
	</main>
);

export default AboutUs;
