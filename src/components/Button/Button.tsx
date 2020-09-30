import React from "react";

import "./Button.scss";

type ButtonProps = React.HTMLProps<HTMLButtonElement>;

type CustomProps = {
	text?: string;
	clickHandler?: Function;
}

type Props = ButtonProps & CustomProps;

type ClickEvent = React.MouseEvent<HTMLButtonElement>;

const Button = (props: Props): React.ReactElement => 
{
	const handleClick = (): void => props.clickHandler ? props.clickHandler() : (): void => 
	{};
	return(
		<button
			className={`Button ${props.className}`}
			onClick={handleClick}>{props.children}</button>
	);
};

export default Button;
