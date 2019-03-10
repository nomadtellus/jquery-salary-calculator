$(document).ready(readyNow)

let employees = []

function readyNow(){
    console.log( 'ready now' );
    $('#submitButton').on('click', addEmployee)
    $('#deleteButton').on('click', deleteEmployee)
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
    displayEmployees();
    totalCost();
}//end addEmployee

//delete the employee from the array
function deleteEmployee(){
    let employeeData = $(this).data();

    }
}

//display employees on the dom
function displayEmployees(){
    let el= $('#table')
    el.empty();
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

//total up all salaries and display the total cost
function totalCost(){
    let total= $('#totalCost')
    let sum = 0
    total.empty();

    for (let i=0; i<employees.length; i++) 
    //add up salaries
    sum = sum + Number(employees[i].annualSalary)/12;
    
    //red text if over 20,000
    if (sum > 20000){
        $('#totalCost').css('color', 'red')
        total.append(Math.round(sum));
    }
    else {
        return total.append(Math.round(sum));
    }
}//end totalCost