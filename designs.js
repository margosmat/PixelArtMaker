// Select color input

var gridHeight = 0;
var gridWidth = 0;
$('#sizePicker').submit(function(e) {
  e.preventDefault();
  if($('table').has('tr').length) {
    removeGrid();
    makeGrid();
  } else {
    makeGrid();
  }
});

function makeGrid() {
  gridHeight = $('#input_height').val();
  gridWidth = $('#input_width').val();

  for(var i = 0; i<gridHeight; i++) {
    $('#pixel_canvas').append('<tr id="tr' + i + '"></tr>');

    for(var j = 0; j<gridWidth; j++) {
      $('#tr' + i).append('<td></td>');
    }
  }
}

function removeGrid() {
  $('tr').remove();
}
