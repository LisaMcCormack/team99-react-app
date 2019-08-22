import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from "@testing-library/react";
import Team from './Team'


it('should render a team', () => {
  const data = [
    {
    "firstName": "Chris",
    "lastName": "James",
    "role": "Gaffa"
    },
    {
    "firstName": "Osh",
    "lastName": "Slomczynski",
    "role": "Polish ambassador"
    },
    {
    "firstName": "Lisa",
    "lastName": "McCormack",
    "role": "Nut milk enthusiast"
    },
    {
    "firstName": "Riya",
    "lastName": "Dattani",
    "role": "Creative accountant"
    },
    {
    "firstName": "Rick",
    "lastName": "Clegg",
    "role": "Town crier"
    }
]
const dataProvider = (setter) => {
  setter(data);
}


  // Test Id is data-testid which can be put of any element with a string value
  const { getByTestId } = render(<Team dataProvider={dataProvider}/>)

  expect(getByTestId('Chris')).toBeInTheDocument()
  expect(getByTestId('Osh')).toBeInTheDocument()
  expect(getByTestId('Lisa')).toBeInTheDocument()
  expect(getByTestId('Riya')).toBeInTheDocument()
  expect(getByTestId('Rick')).toBeInTheDocument()




});
