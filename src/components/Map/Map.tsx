import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
	width: "100%",
	height: "100%"
};

const center = {
	lat: -3.745,
	lng: -38.523
};

type Coordinates = {
	lat: number;
	lng: number;
}

type Props = {
	coordinates?: Coordinates;
}

const Map = (props: Props): React.ReactElement =>
{
	const apiKey = process.env.REACT_APP_MAPS_API_KEY ? process.env.REACT_APP_MAPS_API_KEY : "";
	return (
		<LoadScript googleMapsApiKey={apiKey}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}/>
		</LoadScript>
	);
};

export default React.memo(Map);
