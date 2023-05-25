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
		"--padding": "0.25rem",
		"--height": "24px",
	},
};

const ProgressBar = ({ value, size }) => {
	const variantStyle = SIZE_VARIANT_STYLES[size];
	const labelId = "progressBar";

	return (
		<Wrapper
			role="progressbar"
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={value}
			style={variantStyle}
		>
			<VisuallyHidden id={labelId}>{value}%</VisuallyHidden>
			<BarContainer>
				<Bar value={value} aria-labelledby={labelId} />
			</BarContainer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	border-radius: var(--border-radius);
	padding: var(--padding);
	width: 100%;
	height: var(--height);
	background-color: ${COLORS.transparentGray15};
`;

const BarContainer = styled.div`
	overflow: clip;
	border-radius: 4px;
	width: 100%;
	height: 100%;
`;

const Bar = styled.div`
	background-color: ${COLORS.primary};
	width: ${(props) => `${props.value}%`};
	height: inherit;
`;

export default ProgressBar;
