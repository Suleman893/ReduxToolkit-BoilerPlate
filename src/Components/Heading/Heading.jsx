import React from "react";
import PropTypes from "prop-types";
import { H1, H2, H3, H4, H5, H6, H7 } from "./Heading.styles";

const propTypes = {
	children: PropTypes.node,
	level: PropTypes.number,
};

function Heading({ level, children, ...rest }) {
	switch (level) {
		case 1:
			return <H1 {...rest}>{children}</H1>;
		case 2:
			return <H2 {...rest}>{children}</H2>;
		case 3:
			return <H3 {...rest}>{children}</H3>;
		case 4:
			return <H4 {...rest}>{children}</H4>;
		case 5:
			return <H5 {...rest}>{children}</H5>;
		case 6:
			return <H6 {...rest}>{children}</H6>;
		default:
			return <H7 {...rest}>{children}</H7>;
	}
}

Heading.propTypes = propTypes;

export default Heading;
