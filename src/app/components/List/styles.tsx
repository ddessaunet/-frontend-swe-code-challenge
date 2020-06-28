import styled from 'styled-components';

export const CountriesItems = styled.ul`
  list-style: none;
  padding: 0px;
`;

export const CountryItem = styled.li`
  margin: 15px 0;
  border: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const CountryNameContainer = styled.div`
  display: flex;
`;

export const CountryNumber = styled.div`
  background-color: lightgrey;
  color: #fff;
  width: 25px;
  padding: 10px;
  text-align: center;
`;

export const CountryText = styled.div`
  padding: 10px;
`;

const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const CountryButton = styled(Button)`
  color: #2679d9;
  :disabled {
    color: #8c98a6;
    font-style: italic;
    color: #8c98a6;
    cursor: not-allowed;
  }
`;
