// Manager object needs
// 1. name
// 2. email
// 3. id
// 4.officeNum
// 5. role (getrole)


const Manager = require('../lib/Manager');

test('create a Manager object', () => {
const manager = new Manager('Andrew' , 'adcore89@gmail.com' , 9000 , 8657309 , 'Intern');

expect(manager.name).toEqual(expect.any(String));
expect(manager.email).toEqual(expect.stringContaining('@'));
expect(manager.id).toEqual(expect.any(Number));
expect(manager.officeNum).toEqual(expect.any(Number));
expect(manager.role).toEqual(expect.any(String));
});


module.exports = Manager