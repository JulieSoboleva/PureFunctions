import getHealth from "../health";

const personList = [
    [{ name: 'Маг', health: 85 }, 'healthy'],
    [{ name: 'Лучник', health: 30 }, 'wounded'],
    [{ name: 'Воин', health: 10 }, 'critical'],
];

test.each(personList)('testing getHealth function using %s person', (person, expected) => {
    expect(getHealth(person)).toBe(expected);
});