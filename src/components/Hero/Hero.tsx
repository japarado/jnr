import React from "react";

import "./Hero.scss"

type Props = {
	imgUrl: string;
	heroText: string;
}

const Hero = ({imgUrl, heroText}: Props): React.ReactElement => (
	<>
		<div className="Hero">
			<img className="Hero__image" src={imgUrl} alt="Hero" />
		</div>
	</>
);

export default Hero;
