function logMsg(message) {
  $("<div />",{ id:'logline', class: 'topbar', text: Date() + ": " + message + " "}).hide().appendTo("#logpanel")
    .slideDown('fast').delay(24*60*60*1000).slideUp(function() { $(this).remove(); });
  console.log(message);
};
