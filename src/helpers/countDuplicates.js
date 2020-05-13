const countDuplicates = (id, array) => {
  var countOcurrences = array.filter((element) => {
    return element.id === id;
  });
  return countOcurrences.length;
};

export { countDuplicates };
