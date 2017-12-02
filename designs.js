var gridHeight = 0;
var gridWidth = 0;
var pickedColor = $('#colorPicker').val();

$('#sizePicker').submit(function(e) {
  e.preventDefault();
  if($('table').has('tr').length) {
    removeGrid();
    makeGrid();
  } else {
    makeGrid();
  }
});

$('#clearGrid').click(function(e) {
  e.preventDefault();
  clearGrid();
});

$('#colorPicker').change(function() {
  pickedColor = $(this).val();
});

$('table').click(function(e) {
  if($(e.target).hasClass('cell')) {
  $(e.target).css('background', pickedColor);
  }
});

$('table').on('contextmenu', function(e) {
  if($(e.target).hasClass('cell')) {
  $(e.target).css('background', '#FFF');
  return false;
  }
});

function makeGrid() {
  gridHeight = $('#input_height').val();
  gridWidth = $('#input_width').val();

  $('table').hide();

  for(var i = 0; i<gridHeight; i++) {
    $('#pixel_canvas').append('<tr id="tr' + i + '"></tr>');

    for(var j = 0; j<gridWidth; j++) {
      $('#tr' + i).append('<td class="cell"></td>');
    }
  }

  clearGrid();
  $('table').fadeIn(1000);
}

function removeGrid() {
  $('tr').remove();
}

function clearGrid() {
  $('.cell').css('background', '#FFF');
}
