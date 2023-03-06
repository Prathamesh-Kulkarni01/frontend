var date = new Date();


const inputdate = document.getElementById("dateIp");
const table = document.getElementById("table");
onMonthSwapped = (increment) => {
  let value = increment ? 1 : -1;
  let selected = new Date(inputdate.value);
  if (!increment && selected.getMonth() === 0) {
    selected.setMonth(11);
    selected.setFullYear(selected.getFullYear() + value);
    swappDate(selected, 0, 0);
  } else if (increment && selected.getMonth() === 11) {
    selected.setMonth(0);
    selected.setFullYear(selected.getFullYear() + value);
    swappDate(selected, 0, 0);
  } else {
    swappDate(selected, value, 0);
  }
};
onYearSwapped = (increment) => {
  let selected = new Date(inputdate.value);
  const value = increment ? 1 : -1;
  swappDate(selected, 0, value);
  onDateChange();
};

const swappDate = (d, m, y) => {
  inputdate.value =
    (d.getFullYear() + y).toString() +
    "-" +
    (d.getMonth() + 1 + m).toString().padStart(2, 0);
  onDateChange();
};
const setCurrentDate = () => {
  inputdate.value =
    date.getFullYear().toString() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, 0);
};
const Render = (selectedDate) => {
  //extracting year and month from selected date
  var selected = new Date(selectedDate);
  var selectedMonth = selected.getMonth() + 1;
  var selectedYear = selected.getFullYear();
  var dayCount = new Date(selectedYear, selectedMonth, 0).getDate();

  //Calculating No of Days in this Month
  var day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
  console.log(new Date(selectedYear, selectedMonth - 1, 1));
  var tempDay = day;
  //K value for date
  var k = 1;
  //Looping to Add new cells
  for (let i = 0; i < dayCount + tempDay; i++) {
    if (i % 7 === 0) {
      //adding new row
      var row = table.insertRow();
    }
    //adding cell in row
    var cell1 = row.insertCell();
    if (Number(day) > 0) {
      cell1.innerHTML = " ";
      // console. (day);
    } else {
      if (k <= dayCount) {
        cell1.innerHTML = k;

        if (
          new Date(selectedYear, selectedMonth - 1, k).toLocaleDateString() ===
          new Date().toLocaleDateString()
        ) {
          cell1.style.background = "gray";
          cell1.style.color = "white";
        }
      } else {
        cell1.innerHTML = " ";
      }

      k++;
    }
    day--;
  }
};
const clearTable = () => {
  var rowCount = table.rows.length;
  for (var d = 1; d < rowCount; d++) {
    table.deleteRow(1);
  }
};

//setting current date
setCurrentDate();
//On First Render
Render(inputdate.value);
//On Date Change
function onDateChange() {
  clearTable();
  Render(inputdate.value);
}
