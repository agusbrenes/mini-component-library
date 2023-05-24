/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZE_VARIANT_STYLES = {
	small: {
		"--border-radius": "4px",
		"--spacing": 0,
		"--height": "8px",
	},
	medium: {
		"--border-radius": "4px",
		"--spacing": 0,
		"--height": "12px",
	},
	large: {
		"--border-radius": "8px",
		"--spacing": "0.25rem",
		"--height": "16px",
	},
};

const ProgressBar = ({ value, size }) => {
	const variantStyle = SIZE_VARIANT_STYLES[size];
	const labelId = "progressBar";

	return (
		<Wrapper role="progressbar" aria-valuenow={value} style={variantStyle}>
			<VisuallyHidden id={labelId}>{value}% complete</VisuallyHidden>
			<Background />
			<BarContainer>
				<Bar value={value} aria-labelledby={labelId} />
			</BarContainer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	height: var(--height);
	isolation: isolate;
`;

const Background = styled.div`
	position: absolute;
	box-sizing: content-box;
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	border-radius: var(--border-radius);
	padding: var(--spacing);
	width: 100%;
	height: 100%;
	background-color: ${COLORS.transparentGray15};
`;

const BarContainer = styled.div`
	position: absolute;
	overflow: clip;
	border-radius: 4px;
	margin: var(--spacing);
	width: 100%;
	height: 100%;
`;

const Bar = styled.div`
	background-color: ${COLORS.primary};
	width: ${(props) => `${props.value}%`};
	height: inherit;
`;

export default ProgressBar;
