// Intern object needs
// 1. name
// 2. email
// 3. id
// 4.School
// 5. role (getrole)



const Employee =require('./Employee');

class Intern extends Employee {
    constructor(name, email , id, school, role) {
        super(name,email,id,role)
        this.school = school
    }

    getSchool() {
        return this.school
    }
};
   


module.exports = Intern