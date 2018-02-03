$(document).ready(function() {
  var age = parseInt(prompt("What is your age?"));

  if (age < 18) {
    $('#under18').show();
  } else if (age === 18) {
    $('#age18').show();
  } else {
    $('#over18').show();
  }
});
