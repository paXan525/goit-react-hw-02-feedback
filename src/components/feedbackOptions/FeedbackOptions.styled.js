import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li``;

export const Button = styled.button`
  width: 200px;
  padding: 10px;

  font-weight: 700;
  font-size: 24px;
  text-align: center;
  text-transform: capitalize;
  color: #510707;

  background-color: #a7ebff;
  border: none;
  border-radius: 5px;

  cursor: pointer;

  :hover {
    background-color: #77acdd;
  }
`;
