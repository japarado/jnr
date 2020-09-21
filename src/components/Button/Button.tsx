import React from "react";

import "./Button.scss";

type Props = {
	text?: string;
	clickHandler?: Function;
}

type ClickEvent = React.MouseEvent<HTMLButtonElement>;

const Button = (props: Props): React.ReactElement => 
{
	const handleClick = (e: ClickEvent) => props.clickHandler ? props.clickHandler() : (): void => 
	{};
	const text = props.text ? props.text : "Click Me";
	return(
		<button className="Button" onClick={handleClick}>{text}</button>
	);
};

export default Button;
