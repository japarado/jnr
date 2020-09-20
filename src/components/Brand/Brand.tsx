import React from "react";

import "./Brand.scss";

type Props = {
	imgUrl: string;
	altText?: string;
	classNames?: string;
}

const Brand = ({imgUrl, altText, classNames}: Props): React.ReactElement => (
	<div className={`Brand ${classNames}`}>
		<img className="Brand__image" src={imgUrl} alt={altText} />
	</div>
);

export default Brand;
