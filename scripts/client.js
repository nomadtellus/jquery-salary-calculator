$(document).ready(readyNow)

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
    }//end addEmployee
}
//Add an employee
function addEmployee(){
    new Employee(``)
}
