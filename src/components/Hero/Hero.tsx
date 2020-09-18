import React from "react";

import "./Hero.scss";
import HeroText from "components/HeroText/HeroText";

type Props = {
	imgUrl: string;
	heroText: string;
}

const Hero = (props: Props): React.ReactElement => (
	<>
		<div className="Hero">
			<div className="Hero__text">
				<HeroText text={props.heroText}/>
			</div>
			<img className="Hero__image" src={props.imgUrl} alt="Hero" />
		</div>
	</>
);

export default Hero;
