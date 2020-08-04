export const people = [
  {
    id: 0,
    name: "Gunil",
    age: 26,
    gender: "male",
  },
  {
    id: 1,
    name: "Melanie",
    age: 24,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
