

// employee object needs
// 1. name
// 2. email
// 3. id
// 4. role (getrole)


const Employee = require('../lib/Employee');

test('create a employee object', () => {
const employee = new Employee('Andrew' , 'adcore89@gmail.com' , 9000 , 'employee');

expect(employee.name).toBe("Andrew");
expect(employee.email).toEqual(expect.stringContaining('@'));
expect(employee.id).toEqual(expect.any(Number));
expect(employee.role).toEqual(expect.any(String));
});




module.export = Employee;