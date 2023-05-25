import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZE_VARIANT_STYLES = {
	small: {
		"--padding": "4px 0 4px 1.5rem",
		"--icon-size": "1rem",
		"--font-size": "0.875rem",
		"--border-thickness": "1px",
	},
	large: {
		"--padding": "8px 0 8px 2.25rem",
		"--icon-size": "1.3125rem",
		"--font-size": "1.125rem",
		"--border-thickness": "2px",
	},
};

const IconInput = ({ label, icon, width = 250, size, placeholder, ...delegated }) => {
	const variantStyle = SIZE_VARIANT_STYLES[size];

	if (!variantStyle) {
		throw new Error(`Invalid size passed to IconInput: ${size}`);
	}

	return (
		<Wrapper style={variantStyle}>
			<VisuallyHidden>{label}</VisuallyHidden>
			<Input placeholder={placeholder} width={width} {...delegated} />
			<IconWrapper id={icon} />
		</Wrapper>
	);
};

const Wrapper = styled.label`
	position: relative;
	width: fit-content;
	color: ${COLORS.gray700};

	&:hover {
		color: ${COLORS.black};
	}
`;

const Input = styled.input`
	outline-offset: 2px;
	border: solid ${COLORS.black};
	border-width: 0 0 var(--border-thickness);
	padding: var(--padding);
	width: ${(props) => `${props.width}px`};
	font-size: var(--font-size);
	font-weight: 700;
	color: inherit;

	&::placeholder {
		font-weight: 400;
		color: ${COLORS.gray500};
	}
`;

const IconWrapper = styled(Icon)`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	pointer-events: none;

	& > svg {
		width: var(--icon-size);
		height: var(--icon-size);
		stroke-width: var(--border-thickness);
	}
`;

export default IconInput;
