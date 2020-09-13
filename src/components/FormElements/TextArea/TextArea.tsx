import React, {useState} from "react";

import "./TextArea.scss";

type Props = {
	name?: string;
	id?: string;
	placeholder?: string;
	value?: string;
	changeHandler?: Function;
	classes?: string;
	required?: boolean;
}

type InputEvent = React.ChangeEvent<HTMLTextAreaElement>;

const TextArea = (props: Props): React.ReactElement => 
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
		<textarea 
			name={props.name}
			id={props.id}
			placeholder={props.placeholder}
			className={`TextArea ${props.classes}`}
			onChange={handleChange}
			required={props.required}
		>
			{props.value ? props.value : value}
		</textarea>
	);
};

export default TextArea;
