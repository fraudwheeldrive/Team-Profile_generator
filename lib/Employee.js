// restructure to class

// employee needs
// 1. name
// 2. email
// 3. id
// 4. office number
// 5. role


class Employee {
    constructor(name, email , id, officeNumber, role) {
        this.name=name;

        this.email=email;
        this.id=id;
        this.officeNumber=officeNumber;
        this.role=role
    }
}



module.exports = Employee;