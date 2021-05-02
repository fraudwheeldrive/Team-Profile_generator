// engineer object needs
// 1. name
// 2. email
// 3. id
// 4. github usernerma
// 5. role (getrole)


const Engineer = require('../lib/Engineer');

test('create a Engineer object', () => {
const engineer = new Engineer('Andrew' , 'adcore89@gmail.com' , 9000 , 'employee' , 'engineer');

expect(engineer.name).toBe("Andrew");
expect(engineer.email).toEqual(expect.stringContaining('@'));
expect(engineer.id).toEqual(expect.any(Number));
expect(engineer.gitHub).toEqual(expect.any(String));
expect(engineer.role).toEqual(expect.any(String));
});




module.export = Engineer;