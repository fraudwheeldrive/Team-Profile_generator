// Intern object needs
// 1. name
// 2. email
// 3. id
// 4.School
// 5. role (getrole)


const Intern = require('../lib/Intern');

test('create a Intern object', () => {
const intern = new Intern('Andrew' , 'adcore89@gmail.com' , 9000 , 'Ryerson' , 'Intern');

expect(intern.name).toEqual(expect.any(String));
expect(intern.email).toEqual(expect.stringContaining('@'));
expect(intern.id).toEqual(expect.any(Number));
expect(intern.school).toEqual(expect.any(String));
expect(intern.role).toEqual(expect.any(String));
});


module.exports = Intern