// Write your solution in this file!
const  employee = {
    name: "sam",
    streetAddress: "11 Broadway street",
};

function updateEmployeeWithKeyAndValue(employee, key, value ) {
   const newEmployee = {
    ...employee,
    [key]: value,
   };
   return employee, newEmployee;
   
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const myEmployee = { ...employee };
    delete myEmployee[key];
    return myEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
