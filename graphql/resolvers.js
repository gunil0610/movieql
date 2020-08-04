const people = [
  {
    name: "Gunil",
    age: 26,
    gender: "male",
  },
  {
    name: "Melanie",
    age: 24,
    gender: "female",
  },
];

const resolvers = {
  Query: {
    people: () => people,
  },
};

export default resolvers;
