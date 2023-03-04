import styled from 'styled-components';

// Стили контейнера для списка контактов
export const ContactListContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  margin: 20px auto;
  width: 400px;
  & td {
    padding: 10px;
  }
  & td:first-child {
    font-weight: bold;
  }
  & button {
    padding: 5px 10px;
    background-color: #a8dc;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 200ms ease-in-out, background-color 200ms ease-in;
  }
  & button:hover {
    background-color: #4b9d;
    transform: scale(1.05);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & input {
    margin-left: 10px;
  }
  & .name {
    margin-left: 25px;
  }
  & button {
    padding: 5px 10px;
    background-color: #a8de;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 200ms ease-in-out, background-color 200ms ease-in;
  }
  & button:hover {
    background-color: #4b9d;
    transform: scale(1.05);
  }
`;

export const ContactItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;
