$(function () {
    var tabs = $("#tabs").tabs({
        heightStyle: "fill"
    });
    $('body').on('resize', function () {
        tabs.tabs('refresh');
        window.dispatchEvent(new Event('resize'));
    });
    $('#tabs').tabs({
        activate: function(event ,ui){
          window.dispatchEvent(new Event('resize'));
        }
    });
});

$(function() {
  $("#resizable_d1").draggable({ handle: "h6" });
  $("div, h6").disableSelection();
  $("#resizable_d1" ).resizable({
    helper: "ui-resizable-helper"
  });
  $("#resizable_d1" ).resizable({
    grid: 10
  });
  $("#resizable_d1").resizable({
    stop: function(event, ui) {
      window.dispatchEvent(new Event('resize'));
    }
  });
});

$(function() {
  $("#resizable_d2").draggable({ handle: "h6" });
  $("div, h6").disableSelection();
  $("#resizable_d2" ).resizable({
    helper: "ui-resizable-helper"
  });
  $("#resizable_d2" ).resizable({
    grid: 10
  });
  $("#resizable_d2").resizable({
    stop: function(event, ui) {
      window.dispatchEvent(new Event('resize'));
    }
  });
});

$(function() {
  $("#resizable_d3").draggable({ handle: "h6" });
  $("div, h6").disableSelection();
  $("#resizable_d3" ).resizable({
    helper: "ui-resizable-helper"
  });
  $("#resizable_d3" ).resizable({
    grid: 10
  });
  $("#resizable_d3").resizable({
    stop: function(event, ui) {
      window.dispatchEvent(new Event('resize'));
    }
  });
});

$(function() {
  $("#resizable_d4").draggable({ handle: "h6" });
  $("div, h6").disableSelection();
  $("#resizable_d4" ).resizable({
    helper: "ui-resizable-helper"
  });
  $("#resizable_d4" ).resizable({
    grid: 10
  });
  $("#resizable_d4").resizable({
    stop: function(event, ui) {
      window.dispatchEvent(new Event('resize'));
    }
  });
});

$(function() {
  $("#resizable_h1").draggable({ handle: "h6" });
  $("div, h6").disableSelection();
  $("#resizable_h1" ).resizable({
    helper: "ui-resizable-helper"
  });
  $("#resizable_h1" ).resizable({
    grid: 10
  });
  $("#resizable_h1").resizable({
    stop: function(event, ui) {
      window.dispatchEvent(new Event('resize'));
    }
  });
});

$(function() {
  $("#resizable_h2").draggable({ handle: "h6" });
  $("div, h6").disableSelection();
  $("#resizable_h2" ).resizable({
    helper: "ui-resizable-helper"
  });
  $("#resizable_h2" ).resizable({
    grid: 10
  });
  $("#resizable_h2").resizable({
    stop: function(event, ui) {
      window.dispatchEvent(new Event('resize'));
    }
  });
});

$(function() {
  $("#resizable_h3").draggable({ handle: "h6" });
  $("div, h6").disableSelection();
  $("#resizable_h3" ).resizable({
    helper: "ui-resizable-helper"
  });
  $("#resizable_h3" ).resizable({
    grid: 10
  });
  $("#resizable_h3").resizable({
    stop: function(event, ui) {
      window.dispatchEvent(new Event('resize'));
    }
  });
});

$(function() {
  $("#resizable_h4").draggable({ handle: "h6" });
  $("div, h6").disableSelection();
  $("#resizable_h4" ).resizable({
    helper: "ui-resizable-helper"
  });
  $("#resizable_h4" ).resizable({
    grid: 10
  });
  $("#resizable_h4").resizable({
    stop: function(event, ui) {
      window.dispatchEvent(new Event('resize'));
    }
  });
});

$(function() {
  $("#resizable_l1").draggable({ handle: "h6" });
  $("div, h6").disableSelection();
  $("#resizable_l1" ).resizable({
    helper: "ui-resizable-helper"
  });
  $("#resizable_l1" ).resizable({
    grid: 10
  });
  $("#resizable_l1").resizable({
    stop: function(event, ui) {
      window.dispatchEvent(new Event('resize'));
    }
  });
});

$(function() {
  $("#resizable_l2").draggable({ handle: "h6" });
  $("div, h6").disableSelection();
  $("#resizable_l2" ).resizable({
    helper: "ui-resizable-helper"
  });
  $("#resizable_l2" ).resizable({
    grid: 10
  });
  $("#resizable_l2").resizable({
    stop: function(event, ui) {
      window.dispatchEvent(new Event('resize'));
    }
  });
});

$(function() {
  $("#resizable_l3").draggable({ handle: "h6" });
  $("div, h6").disableSelection();
  $("#resizable_l3" ).resizable({
    helper: "ui-resizable-helper"
  });
  $("#resizable_l3" ).resizable({
    grid: 10
  });
  $("#resizable_l3").resizable({
    stop: function(event, ui) {
      window.dispatchEvent(new Event('resize'));
    }
  });
});

$(function() {
  $("#resizable_l5").draggable({ handle: "h6" });
  $("div, h6").disableSelection();
  $("#resizable_l5" ).resizable({
    helper: "ui-resizable-helper"
  });
  $("#resizable_l5" ).resizable({
    grid: 10
  });
  $("#resizable_l5").resizable({
    stop: function(event, ui) {
      window.dispatchEvent(new Event('resize'));
    }
  });
});
$(function() {
  $("#resizable_l4").draggable({ handle: "h6" });
  $("div, h6").disableSelection();
  $("#resizable_l4" ).resizable({
    helper: "ui-resizable-helper"
  });
  $("#resizable_l4" ).resizable({
    grid: 10
  });
  $("#resizable_l4").resizable({
    stop: function(event, ui) {
      window.dispatchEvent(new Event('resize'));
    }
  });
});

$(function() {
  $("#settings").draggable({ handle: "h6" });
  $("div, h6").disableSelection();
  $("#settings" ).resizable({
    helper: "ui-resizable-helper"
  });
  $("#settings" ).resizable({
    grid: 10
  });
  $("#settings").resizable({
    stop: function(event, ui) {
      window.dispatchEvent(new Event('resize'));
    }
  });
});

$(function() {
  $("#logpanel").draggable({ handle: "h6" });
  $("div, h6").disableSelection();
  $("#logpanel" ).resizable({
    helper: "ui-resizable-helper"
  });
  $("#logpanel" ).resizable({
    grid: 10
  });
  $("#logpanel").resizable({
    stop: function(event, ui) {
      window.dispatchEvent(new Event('resize'));
    }
  });
});


