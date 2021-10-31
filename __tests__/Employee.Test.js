const { TestWatcher } = require('@jest/core');
const Employee = require('../lib/Employee');

test("testing employee properties", () => {
    const employee = new Employee("brock",4, "email");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});