import React from "react";

type Props = {
	name: string;
	brand: string;
	desc?: string;
}

const Product = ():  React.ReactElement => (
	<h1>I am a product</h1>
);

export default Product;
