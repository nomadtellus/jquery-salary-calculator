$(document).ready(readyNow)

let employees = []

function readyNow(){
    console.log( 'ready now' );
    $('#submitButton').on('click', addEmployee)
}

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


//Add an employee
function addEmployee(){
    new Employee(``)
}
