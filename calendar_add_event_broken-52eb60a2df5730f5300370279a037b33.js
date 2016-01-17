Calendar.createEvent = function() {
  var field = $('.create input[type="text"]')[0];
  var name = field.value;
  if (name == "") {
    $(field).addClass('required');
  }
  else {
    Calendar.saveEvent({name: name, date: Calendar.displayedDate});
    Calendar.displayToday();
    $(field).removeClass('required').val('');
  }
}
;
