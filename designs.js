// Select color input

var gridHeight = 10;
var gridWidth = 20;
$('#sizePicker').submit(function(e) {
  e.preventDefault();
  makeGrid();
});

function makeGrid() {
console.log(gridWidth);
  for(var i = 0; i<gridHeight; i++) {
    $('#pixel_canvas').append('<tr id="tr' + i + '"></tr>');

    for(var j = 0; j<gridWidth; j++) {
      $('#tr' + i).append('<td></td>');
    }
  }

}
