var stressLevel = 0;

var stressResponse1 =

var stressResponse2 =

var remedyResponse1 =

var remedyResponse1 =

document).ready(function(event) {
  $("form#stress_survey").submit(function() {
    event.preventDefault();
    $("#stress-response1").show();
    $("input:checkbox[name=stress-test]:checked").each(function() {
      var stressLevel = $(this).val();
      $('#work-responses').append(stressLevel + "<br>");
    });
  });
});
