const Intern = require('../lib/Intern');
test ( 'create a Intern object',() => {
    const intern = new Intern ('JaJane', 20, 'Jajane@aim.com', 'UWI');
    expect(intern.school).toEqual(expect.any(String));
   
});