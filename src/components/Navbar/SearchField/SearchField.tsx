import React, {useState} from "react";

import "./SearchField.scss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

import {index} from "services/productCategories";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const SearchField = (): React.ReactElement => 
{ 
	const [value, setValue] = useState("");
	const handleChange = (e: InputEvent): void => setValue(e.target.value);

	return(
		<div className="SearchField">
			<FontAwesomeIcon icon={faSearch} className="SearchField__icon"/>
			<input type="text" className="SearchField__input" value={value} onChange={handleChange}/>
		</div>
	);
};


export default SearchField;
