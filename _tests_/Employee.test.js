const Employee = require('../lib/Employee');
test ( 'create a employee object',() => {
    const employee = new Employee ('Jahneo', 50, 'jahneo@aim.com');
    expect(employee.name).toBeEqual(expect.any(String));
    expect(employee.ide).toBeEqual(expect.any(Number));
    expect(employee.email).toBeEqual(expect.any(String));

})