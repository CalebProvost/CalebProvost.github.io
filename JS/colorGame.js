/**************************************************************************/
/** Hide "something went wrong with JavaScript..." message from showing  **/
/**************************************************************************/
$('.JScheckMessage').hide();

/**************************************************************************/
/*************************** Global variables *****************************/
/**************************************************************************/
var difficulty;
var score = 0;
var $score = $('div.score').html("Score: <span>" + score + "</span>");

/**************************************************************************/
/****** Generates table and background color from passed-in variables *****/
/**************************************************************************/
function createTable(tableSize, satMin, satMax, lightVal) {

  //finds place to put the table
  var tableRef = document.getElementById('autoTable');
  //initiates what color to make the cells
  var cellColor = randomBackgroundColor(satMin, satMax, lightVal);

  //clears table before recreating it
  for (var i = tableRef.rows.length - 1; i > -1; i--) {
    tableRef.deleteRow(i);
  }

  //inserts rows
  for (var k = 0; k < tableSize; k++) {
    var newRow = tableRef.insertRow(-1);
    newRow.className = k;

    //Inserts cells with generated background color
    for (var j = 0; j < tableSize; j++) {
      var newCell = newRow.insertCell(j);
      newCell.className = j;
      $(newCell).attr("style", cellColor);
    }
  }
}

/**************************************************************************/
/********************** Background Color Generator ************************/
/**************************************************************************/
function randomBackgroundColor(satMin, satMax, lightVal) {

  //randomized Hue
  var hue = Math.floor(Math.random() * 360) + 0;
  //random saturation with the passed in min and max and converted from decimal to %
  var sat = (Math.floor(Math.random() * satMax) + satMin) * 100;
  //lightness value passed in and converted from decimal to %
  var light = lightVal * 100;

  //background color in attribute injection format 
  color = "background-color: hsl(" + hue + ", " + sat + "%, " + light + "%)";
  return color;
}

/**************************************************************************/
/********** Select Random Cell and Get Background Color in HSL ************/
/**************************************************************************/
function getRandCellBGColor($randCell) {

  //gets background color of randomized cell

  /*! pulling color from the DOM results in rgb, thus I had to research and find     ***
  *** a solution to convert it from RGB to HSL, which required me to strip the text  ***
  *** into individual variables and then convert them into HSL format.               !*/

  //passed in random cell's background color
  var backgroundRGB = $randCell.style.backgroundColor;

  //strips integers from string format of RGB
  var r = backgroundRGB.replace(/^\D+/g, '').replace(/,.*/g, '');
  var g = backgroundRGB.replace(r, '').replace(/^\D+/g, '').replace(/,.*/g, '');
  var b = backgroundRGB.replace(r, '').replace(g, '')
    .replace(/^\D+/g, '').replace(/,.*/g, '').replace(/[()]/g, '');

  /*** converts RGB to HSL format. 
   *** Courtesy of https://css-tricks.com/converting-color-spaces-in-javascript/ */
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
          cmax = Math.max(r, g, b),
          delta = cmax - cmin,
          h = 0,
          s = 0,
          l = 0;

        // Calculate hue
        // No difference
        if (delta == 0)
          h = 0;
        // Red is max
        else if (cmax == r)
          h = ((g - b) / delta) % 6;
        // Green is max
        else if (cmax == g)
          h = (b - r) / delta + 2;
        // Blue is max
        else
          h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0)
          h += 360;

        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

  //assign the conversion to descriptive pass-through variables
  backgroundHue = h;
  backgroundSat = Math.ceil(s);
  backgroundLight = l;

  return [backgroundHue, backgroundSat, backgroundLight, $randCell];
}

/**************************************************************************/
/******* Adjust Random Cell's 'lightness' in ratio to Difficulty **********/
/**************************************************************************/
function lightenCell($randCell) {

  //gets random cell's background colors in HSL
  var bgHue = getRandCellBGColor($randCell)[0];
  var bgSat = getRandCellBGColor($randCell)[1];
  var bgLight = getRandCellBGColor($randCell)[2];
  var $randCell = getRandCellBGColor($randCell)[3];

  //adjusts old lightness to new one based off of score and difficulty
  difficulty = document.querySelector('#autoTable').rows.length;
  var newLight = bgLight + difficulty;

  //removes style attribute from cell before adding new one
  $($randCell).removeAttr('style');
  //inserts old values back in with new lightness value
  $($randCell).attr('style', "background-color: hsl(" + bgHue + ", " + bgSat + "%, " + newLight + "%)")

  return [newLight, bgLight];
}

function randCell(tableSize) {
  //selects a random row
  var $randRow = $('tbody').children()[Math.floor(Math.random() * tableSize)];
  //selects a random cell from random row
  var $randCell = $($randRow).children()[Math.floor(Math.random() * tableSize)];

  return $randCell;
}

/**************************************************************************/
/********** Starts the game by calling the appropriate functions **********/
/**************************************************************************/
function startGame(tableSize, satMin, satMax, lightVal) {
  createTable(tableSize, satMin, satMax, lightVal);
  var $randCell = randCell(tableSize);
  var newLight = lightenCell($randCell)[0];
  var bgLight = lightenCell($randCell)[1];

  // while (newLight!=bgLight) {
    $($randCell).on('click', function () {
      $(this).attr('style', "background-color: rgb(255, 255, 255)");

        //adjusts old lightness to new one based off of score and difficulty
  difficulty = document.querySelector('#autoTable').rows.length;
  var percentDifference = score + difficulty + 10;
  var newLight = bgLight + percentDifference;

      difficulty--;
      score++;
      $score = $('div.score').html("Score: <span>" + score + "</span>");
      
      createTable(tableSize, satMin, satMax, lightVal);
      $randCell = randCell(tableSize);
      lightenCell($randCell);
    });
  // }
  /** Upon table click, check if target was random cell,
  ** if yes, perform increment loop and table recreation;
  ** if no, break to game over statement and clear table **/


  /* Increment Score and Difficulty; Call on table generator */

  /* Game Over! Places score in new field while clearing old one, and clears table */

}