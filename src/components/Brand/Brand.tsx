import React from 'react';

import "./Brand.scss";

import {Link} from 'react-router-dom';

type Props = {
	imgUrl: string;
	url: string;
}

const Brand = ({imgUrl, url}: Props): React.ReactElement => (
	<div>Brand</div>
)

export default Brand;
