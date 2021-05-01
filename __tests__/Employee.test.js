const employeeInfo = require ('../lib/Employee.js');

test ('checks if 10 is equal to 10', () => {
    expect(employeeInfo(10,10)). toBe(true);
});