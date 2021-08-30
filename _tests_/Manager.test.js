const Manager = require('../lib/Manager');
test ( 'create a Manager object',() => {
    const manager = new Manager ('John', 35, 'john@aim.com', 4);
    expect(manager.officeNumber).toEqual(expect.any(Number));
   
});