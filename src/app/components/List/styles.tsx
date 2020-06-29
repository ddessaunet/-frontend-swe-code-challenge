import styled from 'styled-components';

export const CountriesItems = styled.ul`
  list-style: none;
  padding: 0px;
`;

export const CountryItem = styled.li`
  margin: 15px 0;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
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
  flex-grow: 1;
  text-align: end;
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

export const CountryItemSummary = styled.div`
  display: flex;
`;

export const CountryItemDetails = styled.div``;

export const CountryItemRow = styled.div`
  height: 30px;
  padding: 5px;
`;
export const CountryDetailsLabel = styled.label`
  font-weight: bold;
  margin: 10px;
`;
