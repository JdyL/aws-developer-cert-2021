export const getIndexes = ({ answers, choices }) => {
  const indexes = [];
  choices.forEach((choice) => {
    if (answers.includes(choice)) return indexes.push(choice);
  });
  return indexes;
};

export const formatTime = (seconds) => {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  if (seconds >= 60 && seconds / 60 < 60) {
    return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  }
  const hours = Math.floor(seconds / 60 / 60);
  const minute = Math.floor(seconds / 60 - hours * 60);
  return `${hours}h ${minute}m ${seconds % 60}s`;
};

export const formatChoiceLetter = (string, index) => {
  const letters = ["A.", "B.", "C.", "D."];
  const hasOption = letters.find((letter) => {
    return string.substring(0, 2) === letter;
  });

  if (hasOption) {
    return `${letters?.[index] + " " || ""}${string.substring(2)}`;
  }
  return string;
};
