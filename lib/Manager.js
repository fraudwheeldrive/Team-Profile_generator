// Manager object needs
// 1. name
// 2. email
// 3. id
// 4.officeNum
// 5. role (getrole)





class Manager {
    constructor(name, email , id, officeNum, role) {
        this.name=name;

        this.email=email;
        this.id=id;
        this.officeNum=officeNum;
        this.role=role;
    }
};


module.exports = Manager