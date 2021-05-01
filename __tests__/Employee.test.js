test ('creates employee based on inquierer input', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

module.export = Employee