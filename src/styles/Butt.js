import styled from 'styled-components';

export const Butt = styled.button`
	font-size:     .85rem;
	background:    var(--navHover);
	text-transform:capitalize;  
	border:        0.2rem solid var(--navHover);
	color:         var(--cleanWhite) !important;
	border-radius: 2rem;
	cursor:        pointer;
	padding:       0.2rem 0.5rem;
	margin:        0.2rem 0.5rem 0.2rem 0;
	transition:    all 0.8s ease-in-out;
	font-weight:   600;
&:hover{
	background:    var(--cleanWhite);
	color: var(--darkGray) !important;
	border: 0.2rem solid var(--navHover);
}
&:focus {
	outline: none;
}
`;	