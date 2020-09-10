import React from "react";

import "./SearchField.scss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const SearchField = (): React.ReactElement => (
	<div className="SearchField">
		<FontAwesomeIcon icon={faSearch} className="SearchField__icon"/>
		<input type="text" className="SearchField__input"/>
	</div>
);


export default SearchField;
