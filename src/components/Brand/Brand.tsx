import React from "react";

import "./Brand.scss";

type Props = {
	imgUrl: string;
	altText?: string;
	containerClasses?: string;
	imageClasses?: string;
}

const Brand = (props: Props): React.ReactElement => (
	<div className={`Brand ${props.containerClasses ? props.containerClasses : ""}`}>
		<img className={`Brand__image ${props.imageClasses ? props.imageClasses : ""}`} src={props.imgUrl} alt={props.altText} />
	</div>
);

export default Brand;
