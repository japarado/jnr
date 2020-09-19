import React, {useState, useEffect} from "react";

import "./SearchField.scss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

import {searchByTerm} from "services/products";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const SearchField = (): React.ReactElement => 
{ 
	const [value, setValue] = useState("");
	const handleChange = (e: InputEvent): void => setValue(e.target.value);

	useEffect(() => 
	{
		async function search(searchTerm: string): Promise<string[]> 
		{
			let response: string[] = [];
			try 
			{
				response = await searchByTerm(searchTerm);
			}
			catch(error) 
			{
				console.log(error);
			}
			return response;
		}
		search(value);
	}, [value]);

	return(
		<div className="SearchField">
			<FontAwesomeIcon icon={faSearch} className="SearchField__icon"/>
			<input type="text" className="SearchField__input" value={value} onChange={handleChange}/>
		</div>
	);
};


export default SearchField;
