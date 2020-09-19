import React from "react";

type Props = {
	text: string;
	classNames?: string;
}

const SectionHeader = ({text, classNames}: Props): React.ReactElement => (
	<p className={`u-center-text u-m-bottom t-section-header ${classNames}`}>{text}</p>
);

export default SectionHeader;
