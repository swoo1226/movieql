export const people = [
    {
        id: 0,
        name: 'swoo',
        age: 29,
        gender: 'male'
    },
    {
        id: 1,
        name: 'areum',
        age: 30,
        gender: 'female'
    },
    {
        id: 2,
        name: 'coooper',
        age: 26,
        gender: 'male'
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}