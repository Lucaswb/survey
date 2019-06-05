
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#nameQ").val();
    var person2Input = $("input#fromQ").val();
    var sportQ = $("input:radio[name=sportQ]:checked").val();
    var educationQ = $("#educationQ").val();

  });
});
