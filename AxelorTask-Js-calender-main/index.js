var date = new Date();
var YearNow = date.getFullYear();
var DayNow = date.getDate();
console.log(DayNow);

var MonthNow = date.getMonth();

const inputdate = document.getElementById("dateIp");
const table = document.getElementById("table");

const setCurrentDate = () => {
  inputdate.value =
    date.getFullYear().toString() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, 0);
};
const Render = (selectedDate) => {
  var selectedMonth = selectedDate.substring(
    selectedDate.length - 2,
    selectedDate.length - 0
  );
  //extracting year and month from selected date
  var selectedYear = selectedDate.substring(0, 4);
  var dayCount = new Date(selectedYear, selectedMonth, 0).getDate();

  //Calculating No of Days in this Month
  var day = new Date(selectedYear + "-" + selectedMonth + "-01").getDay();
  var tempDay = new Date(selectedYear + "-" + selectedMonth + "-01").getDay();

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
      // console.log(day);
    } else {
      if (k <= dayCount) {
        cell1.innerHTML = k;

        if (
          k === DayNow &&
          Number(selectedMonth) === Number(MonthNow + 1) &&
          Number(selectedYear) === Number(YearNow)
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
