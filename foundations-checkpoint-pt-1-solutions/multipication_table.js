const multiplicationTable = (rows, columns) => {
  const timesTable = [];

  for (let i = 1; i <= rows; i++) {
    const row = [];
    for (let j = 1; j <= columns; j++) {      
      row.push(i * j);
    }
    timesTable.push(row);
  }

  return timesTable;
};