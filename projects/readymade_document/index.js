$( document ).ready(function() {
  $("button").on("click", function(e){
    e.preventDefault();
    $("#print_name").text($("#name").val());
    window.print();
  });
});
