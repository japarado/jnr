import React from "react";

import "./CategoryLinks.scss";
import CategoryLink from "components/CategoryLink/CategoryLink";

/* import ACImage from "../../assets/img/categories/aircon.png"; */
/* import TVImage from "../../assets/img/categories/tv.png"; */
/* import CookingImage from "../../assets/img/categories/cooking.png"; */
/* import ApplianceImage from "../../assets/img/categories/home_appliances.png"; */
/* import MobileImage from "../../assets/img/categories/mobiles_gadgets.png"; */
/* import BusinessImage from "../../assets/img/categories/business_machine.png"; */

const links = [
	{
		text: "Air Conditioners",
		id: 1,
		slug: "air-conditioners"
	},
	{
		text: "Television",
		id: 2,
		slug: "television"
	},
	{
		text: "Cooking",
		id: 3,
		slug: "cooking"
	},
	{
		text: "Home Appliances",
		id: 4,
		slug: "home-appliances"
	},
	{
		text: "Home Entertainment",
		id: 5,
		slug: "home-entertainment"
	},
	{
		text: "Mobile and Gadgets",
		id: 6,
		slug: "mobile-and-gadgets"
	},
	{
		text: "Monitors",
		id: 7,
		slug: "monitors"
	},
	{
		text: "Small Appliances",
		id: 8,
		slug: "small-appliances"
	},
	{
		text: "Others",
		id: 9,
		slug: "others"
	},
];


type Link = {
	text: string;
	id: number;
	slug: string;
};

const CategoryLinks = (): React.ReactElement => 
{
	return(
		<ul className="CategoryLinks">
			{links.map((link: Link) => <Link id={link.id} text={link.text} key={link.id} slug={link.slug}/>)}
		</ul>
	);
};

const Link = (props: Link): React.ReactElement => (
	<li className="CategoryLinks__link">
		<CategoryLink text={props.text} id={props.id} key={props.id} slug={props.slug}/>
	</li>
);

export default CategoryLinks;
