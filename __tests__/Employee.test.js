

const Employee = require('../lib/Employee');

test('create a employee object', () => {
const employee = new Employee('Andrew' , 'adcore89@gmail.com' , '9000' , '8675309' , 'cool dude');

expect(employee.name).toBe("Andrew");
expect(employee.email).toBe("adcore89@gmail.com");
expect(employee.id).toBe("9000");
expect(employee.officeNumber).toBe("8675309");
expect(employee.role).toBe("cool dude");

})



module.export = Employee;