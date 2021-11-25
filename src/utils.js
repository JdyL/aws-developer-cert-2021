export const getIndexes = ({ answers, choices }) => {
  const indexes = [];
  choices.forEach((choice) => {
    if (answers.includes(choice)) return indexes.push(choice);
  });
  return indexes;
};
