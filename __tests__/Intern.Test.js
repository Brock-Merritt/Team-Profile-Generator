const Intern = require('../lib/Intern');



test("testing intern properties", () => {
    const intern = new Intern("brock",4, "email", "coastal");
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String))
});