"use strict";


class DatePicker {
  constructor(id, callback) {
    this.id = id;
    this.callback = callback;
    this.container = document.getElementById(this.id);
  }

  render(date) {
    const table = document.createElement("table");
    // table.
    this.container.appendChild(table);
    const top = this.getTopBar(date);
    table.appendChild(top);

    const header = DatePicker.getHeader();
    table.appendChild(header);

    this.generateCalender(table, date);
  }

  getTopBar(date) {
    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const top = document.createElement("tr");
    const month = monthList[date.getMonth()];
    const year = date.getFullYear();
    const middle = top.insertCell(-1);
    middle.innerHTML = month + " " + year;
    middle.setAttribute("colspan", "5");
    middle.setAttribute("class", "topDate");

    const changeMonth = (value) => {
      const newDate = new Date(year, date.getMonth() + value);
      this.container.firstChild.remove();
      this.render(newDate);
    };


    const leftArrow = top.insertCell(0);
    leftArrow.setAttribute("class", "arrow");
    leftArrow.innerText = "<";
    leftArrow.addEventListener("click", () => changeMonth(-1));

    const rightArrow = top.insertCell(-1);
    rightArrow.setAttribute("class", "arrow");
    rightArrow.innerText = ">";
    rightArrow.addEventListener("click", () => changeMonth(1));
    return top;
  }

  static getHeader() {
    const header = document.createElement("tr");
    const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    daysInWeek.forEach((day) => {
      const newCell = header.insertCell(-1);
      newCell.innerHTML = day;
    });
    return header;
  }

  generateCalender(table, date) {
    let currentRow = document.createElement("tr");
    table.appendChild(currentRow);

    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDayInMonth = new Date(year, month, 1);
    let count = 0;

    // append days in previous month if necessary
    for (let i = 0; i < firstDayInMonth.getDay(); i++) {
      const currentDate = new Date(year, month, 1 - (firstDayInMonth.getDay() - i));
      const newCell = DatePicker.createDay(currentRow, currentDate.getDate());
      newCell.setAttribute("class", "dimmed");
      count++;
    }

    // append days in the current month
    const numDaysInMonth = new Date(year, month+1, 0).getDate();
    for (let i = 1; i <= numDaysInMonth; i++) {
      const newCell = DatePicker.createDay(currentRow, i);
      newCell.setAttribute("class", "active");
      newCell.addEventListener("click", () => this.callback(this.id, DatePicker.formatDate(new Date(year, month, newCell.innerText))));
      count++;
      if (count % 7 === 0) {
        currentRow = document.createElement("tr");
        table.appendChild(currentRow);
      }
    }

    // append days in the next month if necessary
    const lastDayInMonth = new Date(year, month + 1, 0);
    for (let i = lastDayInMonth.getDay() + 1; i <= 6; i++) {
      const currentDate = new Date(year, month + 1, i-lastDayInMonth.getDay());
      const newCell = DatePicker.createDay(currentRow, currentDate.getDate());
      newCell.setAttribute("class", "dimmed");
      count++;
    }

  }

  static createDay(tableRow, day) {
    const newCell = tableRow.insertCell(-1);
    newCell.innerHTML = day;
    return newCell;
  }

  static formatDate(date) {
    return {
      month: date.getMonth() + 1,
      day: date.getDate(),
      year: date.getFullYear()
    };
  }

}



// var datePicker = new DatePicker("div1", function (id, fixedDate) {
//   console.log("DatePicker with id", id,
//       "selected date:", fixedDate.month + "/" + fixedDate.day + "/" + fixedDate.year);
// });
// datePicker.render(new Date("July 4, 1776"));
