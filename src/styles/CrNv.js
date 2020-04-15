import styled from 'styled-components';

export const CrNv = styled.nav`	
	.nav-link {
		font-size: .85rem;
		color: var(--cleanWhite);
		transition:    all 0.8s ease-in-out;
		font-weight: 600;
		padding:       0.2rem 1rem !important;
  		border-radius: 2rem;
  		text-align: center !important;
  		margin:        0.2rem 0.5rem 0.5rem 0;
	}
	.nav-link:hover{
		color: var(--navHover);
	}
	.nav-active { 
  		background-color: var(--purple);
  		border-radius: 2rem;
		padding:       0.2rem 0.5rem;
		margin:        0.2rem 0.5rem 0.5rem 0;
		font-weight: 500;
		border:        0.4rem solid var(--purple);
		color: var(--cleanWhite);
	}
`;