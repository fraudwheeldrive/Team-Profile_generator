// restructure to class

// employee object needs
// 1. name
// 2. email
// 3. id
// 4. role (getrole)


class Employee {
    constructor(name, email , id, role) {
        this.name=name;
        this.email=email;
        this.id=id;
        this.role=role
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole () {
        return this.role;
    }
}


module.exports = Employee;