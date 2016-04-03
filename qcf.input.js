$(function() {
  $( "#from" ).datepicker({
    defaultDate: "-1m",
    changeMonth: true,
    numberOfMonths: 2,
    onClose: function( selectedDate ) {
      $( "#to" ).datepicker( "option", "minDate", selectedDate );
    }
  });
  $( "#to" ).datepicker({
    defaultDate: "+1m",
    changeMonth: true,
    numberOfMonths: 2,
    onClose: function( selectedDate ) {
      $( "#from" ).datepicker( "option", "maxDate", selectedDate );
    }
  });
});

function setDate() {
  var maxd = $( "#to" )[0].value;
  var mind = $( "#from" )[0].value;
  logMsg("Setting date range to minDate:" + mind + " maxDate: " + maxd);
  requestQCFData();
  testExplodingBoxPlot();  
};
