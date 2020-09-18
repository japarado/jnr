import React from "react";

import "./HeroText.scss";

enum Theme {
	Light = "HeroText--light",
	Dark = "HeroText--dark"
}

type Props = {
	text: string;
	theme?: Theme;
}

function determineTheme(theme: Theme | undefined): string
{
	let className = "";
	switch(theme) 
	{
	case Theme.Light:
		className = Theme.Light;
		break;
	case Theme.Dark:
		className = Theme.Dark;
		break;
	default: 
		className = Theme.Light;
	}
	return className;
}

const HeroText = (props: Props): React.ReactElement => 
{ 
	const className = determineTheme(props.theme)
	return(
		<p className={`HeroText ${className}`}>{props.text}</p>
	);
};

export default HeroText;
export {Theme};
