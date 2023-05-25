import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	return (
		<Wrapper>
			{displayedValue}
			<Icon id="chevron-down" />
			<Dropdown aria-label={label} value={value} onChange={onChange}>
				{children}
			</Dropdown>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 24px;
	border-radius: 8px;
	padding: 12px 16px;
	width: fit-content;
	background-color: ${COLORS.transparentGray15};
	color: ${COLORS.gray700};

	&:hover {
		color: ${COLORS.black};
	}
`;

const Dropdown = styled.select`
	position: absolute;
	top: 0;
	left: 0;
	cursor: pointer;
	appearance: none;
	border: none;
	border-radius: inherit;
	width: 100%;
	height: 100%;
	background: none;
	color: transparent;
`;

export default Select;
