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

$('#colorPicker').change(function() {
  pickedColor = $(this).val();
});

$('table').click(function(e) {
  if($(e.target).hasClass('cell')) {
  $(e.target).css('background', pickedColor);
  }
})

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

  $('table').css('background', '#FFF').fadeIn(1000);
}

function removeGrid() {
  $('tr').remove();
}
