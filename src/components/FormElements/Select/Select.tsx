import React, {useState} from "react";

import "./Select.scss";

type Choice = {
	label: string;
	value: string;
}

type Props = {
	name?: string;
	id?: string;
	values: Choice[];
	value: Choice;
}

const Select = (props: Props): React.ReactElement => 
{
	const [value, setValue] = useState({label: "", value: ""});

	return(
		<select id={props.id} className="Select" name={props.name} value={value.value}>
			{
				props.values.map((choice: Choice) =>
					(
						<option value={choice.value} key={choice.value}>{choice.label}</option>
					))
			}
		</select>
	);
};
