const Engineer = require('../lib/Engineer');
test ( 'create a Engineer object',() => {
    const engineer = new Engineer ('Jack', 44, 'jack@aim.com', 'Jackuser');
    expect(engineer.github).toEqual(expect.any(String));
   
});