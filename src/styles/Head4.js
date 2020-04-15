import styled from 'styled-components';

export const Head4 = styled.h4`
	margin:        3rem 0 3rem 0;	
	font-size: 2.25em;
	color: var(--lightGray);
	font-weight: 200;
	position: relative;
	line-height: 1.5;
	@media (max-width: 768px) {
	    flex-direction: column;
	    font-size: 1.2em;
	    position: relative;
	    color: #fff;
	@media screen and (min-width:230px) {
    	color: var(--navGray);
  }
`;