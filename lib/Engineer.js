
// engineer object needs
// 1. name
// 2. email
// 3. id
// 4. github usernerma
// 5. role (getrole)



const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email , id, gitHub, role) {
        super(name, email, id, role)
        this.gitHub = gitHub
    }

    GetGithub() {
        return this.gitHub;
    }
};

module.exports = Engineer