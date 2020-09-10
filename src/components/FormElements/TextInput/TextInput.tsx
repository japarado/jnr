import React, {useState} from "react";

import "./TextInput.scss";

type Props = {
	name?: string;
	id?: string;
	placeholder?: string;
	value?: string;
	changeHandler?: Function;
	classes?: string;
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const TextInput = (props: Props): React.ReactElement => 
{
	const [value, setValue] = useState("");
	const handleChange = (e: InputEvent): void => 
	{
		if(props.changeHandler)
		{
			props.changeHandler(e);
		}
		else 
		{
			setValue(e.target.value);
		}
	};

	return(
		<input className={`TextInput ${props.classes}`}
			value={props.value ? props.value : value} 
			name={props.name ? props.name : ""}
			id={props.id ? props.id : ""}
			onChange={handleChange}
		/>
	);
};

export default TextInput;
