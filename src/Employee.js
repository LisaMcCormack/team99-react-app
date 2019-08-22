import React from 'react';



const Employee = ({ data: { firstName, lastName, role } }) => {

  return (
    <>
      <p data-testid="employee-name"> Name: {firstName} {lastName}</p>
      <p data-testid="employee-role">Job: {role}</p>
    </>

  );
}

export default Employee;
