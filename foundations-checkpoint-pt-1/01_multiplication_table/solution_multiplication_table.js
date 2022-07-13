/* eslint-disable no-unused-vars */
<<<<<<< HEAD
//Solution 1 refactored
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
//Solution 1
/* const multiplicationTable = (row, column) => {
=======
// Nice!
const multiplicationTable = (row, column) => {
>>>>>>> a7bbe33326c5d4b4cff98d43181bff85e1715604
  let table = [];
  let rowContent = [];
  //Addrow content
  for (let i = 1; i <= column; i++) {
    rowContent.push(i);
  }
  //Add each row to table
  for (let j = 1; j <= row; j++) {
    table.push(rowContent.map((element) => element * j));
  }

  return table;
}; */
