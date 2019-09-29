const Swoo = {
    name: 'swoo',
    age: 29,
    gender: 'male'
}

const resolvers = {
    Query: {
        person: () => Swoo
    }
}

export default resolvers