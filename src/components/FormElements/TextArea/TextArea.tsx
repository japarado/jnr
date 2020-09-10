import React, {useState} from "react";

import "./TextArea.scss";

type Props = {
	name?: string;
	id?: string;
	placeholder?: string;
	value?: string;
	changeHandler?: Function;
	classes?: string;
}

type InputEvent = React.ChangeEvent<HTMLTextAreaElement>;

const TextArea = (props: Props): React.ReactElement => 
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
		<textarea 
			name={props.name}
			id={props.id}
			placeholder={props.placeholder}
			className={`TextArea ${props.classes}`}
			onChange={handleChange}
		>
			{props.value ? props.value : value}
		</textarea>
	);
};

export default TextArea;
