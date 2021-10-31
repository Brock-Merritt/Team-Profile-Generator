const Engineer = require('../lib/Engineer');

test("testing engineer properties", () => {
    const engineer = new Engineer("brock",4, "email", "Brock-Merritt");


    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});