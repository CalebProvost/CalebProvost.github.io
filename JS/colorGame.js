/**************************************************************************/
/* Initialize variables to be used for game                               */
/**************************************************************************/
const easyDifficulty = document.getElementById("easyDifficulty");
const mediumDifficulty = document.getElementById("mediumDifficulty");
const hardDifficulty = document.getElementById("hardDifficulty");
const customDifficulty = document.getElementById("customDifficulty");
const customButton = document.getElementById("customButton");

/**************************************************************************/
/* Upon 'click' of difficulty option, create a table with a random color  */
/* EASY OPTION: 5x5                                                       */
/**************************************************************************/
easyDifficulty.addEventListener('click', () => {function addRow() {
    // Get a reference to the table
    var tableRef = document.getElementById('autoTable');

      //delete rows before displaying new difficulty
    for(var i = tableRef.rows.length - 1; i > -1; i--)
    {
      tableRef.deleteRow(i);
    }
    
    for(var k=0;k<5;k++){
      // Insert a row in the table at row index 0
      var newRow = tableRef.insertRow(-1);
      newRow.className = k;

      // Insert a cell in the row at index 0
      for(var j =0; j<5;j++){
        var newCell = newRow.insertCell(j);
        newCell.className = j;
      }
    }
  }
  
  //inner function variables


    function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

    addRow();
    $('#autoTable').each(function () {
        $(this).css('background-color', getRandomColor());
      });
});


/**************************************************************************/
/* MEDIUM OPTION: 10x10                                                   */
/**************************************************************************/
mediumDifficulty.addEventListener('click', () => {function addRow() {
  // Get a reference to the table
  var tableRef = document.getElementById('autoTable');

    //delete rows before displaying new difficulty
  for(var i = tableRef.rows.length - 1; i > -1; i--)
  {
    tableRef.deleteRow(i);
  }
  for(var k=0;k<10;k++){
    // Insert a row in the table at row index 0
    var newRow = tableRef.insertRow(-1);
    newRow.className = k;

    // Insert a cell in the row at index 0
    for(var j =0; j<10;j++){
    var newCell = newRow.insertCell(j);
    newCell.className = j;
  }
 }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }

  addRow();
  $('#autoTable').each(function () {
      $(this).css('background-color', getRandomColor());
    });
});


/**************************************************************************/
/* HARD OPTION: 15x15                                                     */
/**************************************************************************/
hardDifficulty.addEventListener('click', () => {function addRow() {
  // Get a reference to the table
  var tableRef = document.getElementById('autoTable');

  //delete rows before displaying new difficulty
  for(var i = tableRef.rows.length - 1; i > -1; i--)
  {
    tableRef.deleteRow(i);
  }
  for(var k=0;k<15;k++){
    // Insert a row in the table at row index 0
    var newRow = tableRef.insertRow(-1);
    newRow.className = k;

    // Insert a cell in the row at index 0
    for(var j =0; j<15;j++){
    var newCell = newRow.insertCell(j);
    newCell.className = j;
  }
 }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }

  addRow();
  $('#autoTable').each(function () {
      $(this).css('background-color', getRandomColor());
    });
});

/**************************************************************************/
/* CUSTOM OPTION: Input is read from text field and activated on 'click'  */
/**************************************************************************/
customButton.addEventListener('click', () => {function addRow() {
  // Get a reference to the table
  var tableRef = document.getElementById('autoTable');

  //delete rows before displaying new difficulty
  for(var i = tableRef.rows.length - 1; i > -1; i--)
  {
    tableRef.deleteRow(i);
  }
  for(var k=0;k<customDifficulty.value;k++){
    // Insert a row in the table at row index 0
    var newRow = tableRef.insertRow(-1);
    newRow.className = k;

    // Insert a cell in the row at index 0
    for(var j =0; j<customDifficulty.value;j++){
    var newCell = newRow.insertCell(j);
    newCell.className = j;
  }
 }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }

  addRow();
  $('#autoTable').each(function () {
      $(this).css('background-color', getRandomColor());
    });
});

/**************************************************************************/
/* Each successful click on the randomized cell increments score and      */
/* continues the loop. Wrong cell selected breaks loop and give feedback  */
/**************************************************************************/

//Initialize variables for determining randomized cell
const score = document.querySelector("span.score");
score.textContent = 0;

//Randomized cell has an attributed % difference to the rest

//Randomized cell's % difference is proportional to the difficulty and current score
//(higher score, smaller % difference)

//Loop triggering randomized color of table, keeps count of score, and 