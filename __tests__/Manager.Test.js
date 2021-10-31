const Manager = require('../lib/Manager');

test("testing Manager properties", () => {
    const manager = new Manager("brock",4, "email", 100);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));

});