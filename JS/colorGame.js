const easyDifficulty = document.getElementById("easyDifficulty");
const mediumDifficulty = document.getElementById("mediumDifficulty");
const hardDifficulty = document.getElementById("hardDifficulty");
const customDifficulty = document.getElementById("customDifficulty");
const customButton = document.getElementById("customButton");

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

    // Insert a cell in the row at index 0
    for(var j =0; j<5;j++){
      var newCell = newRow.insertCell(j);
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

    // Insert a cell in the row at index 0
    for(var j =0; j<10;j++){
    var newCell = newRow.insertCell(j);
  }
 }
}

var stringToColour = function(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
addRow();
$('#autoTable td').each(function () {
    $(this).css('background-color', stringToColour(makeid()));
});});


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

    // Insert a cell in the row at index 0
    for(var j =0; j<15;j++){
    var newCell = newRow.insertCell(j);
  }
 }
}

var stringToColour = function(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
addRow();
$('#autoTable td').each(function () {
    $(this).css('background-color', stringToColour(makeid()));
});});

//customDifficulty.value
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

    // Insert a cell in the row at index 0
    for(var j =0; j<customDifficulty.value;j++){
    var newCell = newRow.insertCell(j);
  }
 }
}

var stringToColour = function(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
addRow();
$('#autoTable td').each(function () {
    $(this).css('background-color', stringToColour(makeid()));
});});