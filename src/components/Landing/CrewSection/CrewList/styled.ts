import styled from 'styled-components';

export const ListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 100px);
	grid-template-rows: repeat(2, 100px);
	grid-gap: 10px;
	margin-top: 50px;
`;
