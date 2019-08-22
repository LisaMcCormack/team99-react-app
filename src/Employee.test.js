
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from "@testing-library/react";
import Employee from './Employee'


it('should render a person', () => {
  const employee =
        {
             "firstName": "Chris",
             "lastName": "James",
             "role": "Gaffa"
         }

  // Test Id is data-testid which can be put of any element with a string value
  const { getByTestId } = render(<Employee data={employee}/>)

  expect(getByTestId('employee-name')).toBeInTheDocument()
  expect(getByTestId('employee-role')).toBeInTheDocument()



});
