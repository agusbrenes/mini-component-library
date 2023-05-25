/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZE_VARIANT_STYLES = {
	small: {
		"--border-radius": "4px",
		"--padding": 0,
		"--height": "8px",
	},
	medium: {
		"--border-radius": "4px",
		"--padding": 0,
		"--height": "12px",
	},
	large: {
		"--border-radius": "8px",
		"--padding": "4px",
		"--height": "16px",
	},
};

const ProgressBar = ({ value, size }) => {
	const variantStyle = SIZE_VARIANT_STYLES[size];

	if (!variantStyle) {
		throw new Error(`Invalid size passed to ProgressBar: ${size}`);
	}

	return (
		<Wrapper
			role="progressbar"
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={value}
			style={variantStyle}
		>
			<VisuallyHidden>{value}%</VisuallyHidden>
			<BarContainer>
				<Bar value={value} />
			</BarContainer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	border-radius: var(--border-radius);
	padding: var(--padding);
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	background-color: ${COLORS.transparentGray15};
`;

const BarContainer = styled.div`
	overflow: clip;
	border-radius: 4px;
`;

const Bar = styled.div`
	background-color: ${COLORS.primary};
	width: ${(props) => `${props.value}%`};
	height: var(--height);
`;

export default ProgressBar;
