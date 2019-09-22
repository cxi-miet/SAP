const vbuttons = document.querySelectorAll(".viewmodal");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

vbuttons.forEach(vbutton => {
  vbutton.addEventListener("click", e => {
    var desc = e.target.nextElementSibling.children[0];
    //console.log(desc);
    var newnode = desc.cloneNode(true);
    var adjspan = span.nextElementSibling;
    if (adjspan) span.parentElement.replaceChild(newnode, adjspan);
    else span.insertAdjacentElement("afterend", newnode);
    modal.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  //console.log(this);
  modal.style.display = "none";
};

//Hamburger Menu Toggle start
$(".navbar-nav li a").click(function(event) {
  // check if window is small enough so dropdown is created
  var toggle = $(".navbar-toggle").is(":visible");
  if (toggle) {
    $(".navbar-collapse").collapse("hide");
  }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// Handle faq container clicks!
$(".answer.is-visible").toggleClass("is-visible");
$(".faq-container").click(function(e) {
  e.preventDefault();
  if (
    $(this)
      .find(".answer")
      .hasClass("is-visible") === false
  )
    $(".faq-container > .answer").removeClass("is-visible");
  $(this)
    .find(".answer")
    .toggleClass("is-visible");
});
