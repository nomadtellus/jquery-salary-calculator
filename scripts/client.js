$(document).ready(readyNow)

let employees = []

function readyNow(){
    console.log( 'ready now' );
    $('#submitButton').on('click', addEmployee)
}

//add an employee to the employees array
function addEmployee(){
    let newEmployee = {
        firstName: $( '#firstName' ).val(),
        lastName: $( '#lastName' ).val(),
        employeeID: $( '#employeeID' ).val(),
        jobTitle: $( '#jobTitle' ).val(),
        annualSalary: $( '#annualSalary' ).val(),
        delete: ''
    }//end newEmployee
    employees.push( newEmployee );
    //empty input
    $( '#firstName' ).val(''),
    $( '#lastName' ).val(''),
    $( '#employeeID' ).val(''),
    $( '#jobTitle' ).val(''),
    $( '#annualSalary' ).val(''),
    console.log( 'employees', employees)
    // displayEmployees();
}//end addEmployee

//display employees on the dom
function displayEmployees(){
    let el= $('#table')
    //for loop through array
    for (let employee of employees)
    //create a table row, and then a <td> for each in table
    el.append( `<tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.employeeID}</td>
    <td>${employee.jobTitle}</td>
    <td>${employee.annualSalary}</td>
    </tr>`)
    //end for loop
}//end displayEmployees
