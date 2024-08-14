"use strict";

class TableTemplate {

  static fillCell(cell, dict) {
    const templateProcessor = new Cs142TemplateProcessor(cell.innerHTML);
    const str = templateProcessor.fillIn(dict);
    cell.innerHTML = str;
    return str;
  }

  static fillIn(id, dict, colName) {
    let colNum = -1;
    const table = document.getElementById(id);
    const rows = table.rows;
    const header = rows[0];
    const headerCells = header.cells;
    // console.log(headerCells);

    // format the header
    for (let i = 0; i < headerCells.length; i++) {
      const str = TableTemplate.fillCell(headerCells[i], dict);
      if (str === colName) {
        colNum = i;
      }
    }

    for (let row = 1; row < rows.length; row++) {
      const currentRow = rows[row];
      if (colName === undefined) {
        // all columns need to be formatted
        for (let i = 0; i < currentRow.cells.length; i++) {
          TableTemplate.fillCell(currentRow.cells[i], dict);
        }
      } else if (colNum !== -1) {
        // format the column with name "colName"
        TableTemplate.fillCell(currentRow.cells[colNum], dict);
      }
    }

    // make the table visible
    table.setAttribute("style", "visibility:visible");
  }



}

