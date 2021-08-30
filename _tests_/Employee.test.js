const Employee = require('../lib/Employee');
test ( 'create a employee object',() => {
    const employee = new Employee ('Jahneo', 50, 'jahneo@aim.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});