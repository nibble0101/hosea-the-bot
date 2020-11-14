function createColumns(array, columnCount) {
  if (columnCount > array.length) {
    throw new Error("column count can't be greater than array length");
  }
  const length = array.length,
    itemsPerColumn = Math.ceil(length / columnCount),
    columns = [];
  for (let column = 1; column <= columnCount; column++) {
    let fro = (column - 1) * itemsPerColumn;
    let to = column * itemsPerColumn - 1;
    if (to >= length) {
      to = length - 1;
    }
    columns.push({ fro, to });
  }
  return columns;
}

module.exports = createColumns;
