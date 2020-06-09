$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(260, function (event) {
      $(this).remove();
    });

  event.stopPropagation(); 
});

$("input[type='text']").keypress(function (event){
    if(event.which === 13){
      let input = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + input + "</li>"); //append adds a new li to the bottom of ul
    }
})

$(".fas.fa-pencil-alt").click(function(){
  $("input[type='text']").fadeToggle(300)
})
