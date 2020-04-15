import styled from 'styled-components';

export const Navs = styled.nav`
	background: var(--bground);
	.nav-link {
		font-size: 			.85rem;
		color: 				var(--navGray);
		transition:    		all 0.8s ease-in-out;
		font-weight: 		600;
		padding:       		0.2rem 0.5rem;
  		border-radius: 		2rem;
  		text-decoration: 	none !important;
	}
	.nav-link:hover{
		color: var(--navHover);
	}
	.nav-active { 
  		background-color: 	var(--purple);
  		border-radius: 		2rem;
		padding:       		0.2rem 0.5rem !important;
		margin:        		0.2rem 0.5rem 0.2rem 0.5 !important;
		font-weight: 		500;
		border:        		0.2rem solid var(--purple) !important;
		color: 				var(--cleanWhite);
		text-decoration: 	none !important;
	}
`;