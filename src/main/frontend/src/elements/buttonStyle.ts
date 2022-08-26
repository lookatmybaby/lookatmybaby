import styled from "styled-components";


export const Btn = styled.button<{ 
	width?: number; 
	fontSize?: number;
	
	}>`
	width: ${props => props.width}px;
	font-size: ${props => props.fontSize}px;
  font-weight: 500;
	padding: 4px 0;
	color: #fff;
	background-color: #f4800b;
	border: 1px solid #f4800b;
  border-radius: 5px;
  cursor: pointer;
	box-sizing: border-box;
	
	font-family: Pretendard;
`;

export const CtEnabled = styled(Btn)`
	&:hover {
		background: #e77707;
		border: 1px solid #e77707;
	}
`;

export const CtDisabled = styled(Btn)`
	color: #f4800b;
	background-color: #fff;
	
	&:hover {
		background: #ffebd7;
	}
	`;

export const SaveDisabled = styled(Btn)`
	background-color: #ffc387;
	padding: 8px 0;
	border: 0px;
`;