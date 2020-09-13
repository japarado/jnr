import React from "react";

type Props = {
	text?: string;
	clickHandler?: Function;
}

const Button = (props: Props): React.ReactElement => (
	<button className="Button">Click M</button>
);
