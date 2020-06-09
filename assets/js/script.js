//check off specfic todos
// $("li").click(function () {
//   // $(this).css("color","grey")
//   // $(this).css("text-decoration","line-through")

//   if ($(this).css("color") === "rgb(128, 128, 128)") {
//     $(this).css({
//       color: "black",
//       textDecoration: "none",
//     });
//   } else {
//     $(this).css({
//       color: "grey",
//       textDecoration: "line-through",
//     });
//   }
// });

//instead if checking for elements, make class in css and toggle with it
$("ul").on("click", "li", function () { //this means that when an li is clicked in a ul, it runs
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
  //   alert("span");
  //   $(this).remove();
  //   $(this).parent().remove(); //removes parent and element
  $(this)
    .parent()
    .fadeOut(260, function (event) {
      $(this).remove();
    }); //call it in fadeOut so it occurs after, parent not needed in function since it is said before


  event.stopPropagation(); // when a span is clicked, it will run the parent class (li) and any other parent class after. to avoid this, stopPropagation stops the event from further getting called
});

//this is to demonstrate propogation
// $("ul").click(function (e) {
//   alert("ul");
// });

// $("#container").click(function () {
//   alert("container");
// });

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
