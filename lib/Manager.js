// Manager object needs
// 1. name
// 2. email
// 3. id
// 4.officeNum
// 5. role (getrole)



const Employee =require('./Employee')

class Manager extends Employee {
    constructor(name, email , id, officeNum, role) {
        super(name,email,id,role)
        this.officeNum = officeNum
    }
    
    officeNum() {
        return this.officeNum
    }

        
};


module.exports = Manager