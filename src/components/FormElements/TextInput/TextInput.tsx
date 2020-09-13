import React, {useState} from "react";

import "./TextInput.scss";

type Props = {
	name?: string;
	id?: string;
	placeholder?: string;
	value?: string;
	changeHandler?: Function;
	classes?: string;
	type?: string;
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const TextInput = (props: Props): React.ReactElement => 
{
	const [value, setValue] = useState("");
	const handleChange = (e: InputEvent): void => 
	{
		if(props.changeHandler)
		{
			props.changeHandler(e.target.value);
		}
		setValue(e.target.value);
	};

	return(
		<input 
			type={props.type}
			className={`TextInput ${props.classes}`}
			value={props.value ? props.value : value} 
			name={props.name ? props.name : ""}
			id={props.id}
			onChange={handleChange}
			placeholder={props.placeholder}
		/>
	);
};

export default TextInput;
