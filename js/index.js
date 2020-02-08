var showDyan = function(passWord) {
  var userName = $("input#Username").val()
  var passWord = $("input#password").val()
  if (passWord === "Aggrey") {
    $(".gee2").show()
  } else {
    alert("Oooops! Sorry " + userName + ", " + passWord + " is an incorrect password.")
  }
}

$(document).ready(function() {
  $('form#gee-details').submit(function(event) {
    event.preventDefault()
    var userName = $("input#Username").val()
    var passWord = $("input#password").val()
    showDyan(passWord)
    scrollTo($('.gee2'), 1000);
    $('#particula').show()
  })
  $(".clickme").click(function() {
    $('.gee3').show()
    scrollTo($('.somemagic'), 2000);
  })
  $('.somemagic').click(function() {
    $('.typewriter').show()
    scrollTo($('.Aggrey'), 2000);
  })
  $('.Aggrey').click(function() {
    $('.HBD').show()
    scrollTo($('#Aggrey2'), 2000);
  })
})
