function show(){
    var x=document.getElementById("d1");
    var y=document.getElementById("1");
        if(x.style.display=="none")
            {
                x.style.display="block";
                y.value="Close";
            }
        else{
            x.style.display="none";
            y.value="View";
        }
    document.getElementById("d2").style.display="none";
    document.getElementById("d3").style.display="none";
    document.getElementById("d4").style.display="none";
    document.getElementById("d5").style.display="none";
    document.getElementById("d6").style.display="none";
    document.getElementById("2").value="View";
    document.getElementById("3").value="View";
    document.getElementById("4").value="View";
    document.getElementById("5").value="View";
    document.getElementById("6").value="View";
    }
    function show1(){
    var x=document.getElementById("d2");
    var y=document.getElementById("2");
        if(x.style.display=="none")
            {
                x.style.display="block";
                y.value="Close";
            }
        else{
            x.style.display="none";
            y.value="View";
        }
    document.getElementById("d1").style.display="none";
    document.getElementById("d3").style.display="none";
    document.getElementById("d4").style.display="none";
    document.getElementById("d5").style.display="none";
    document.getElementById("d6").style.display="none";
    document.getElementById("1").value="View";
    document.getElementById("3").value="View";
    document.getElementById("4").value="View";
    document.getElementById("5").value="View";
    document.getElementById("6").value="View";
    }
    function show2(){
    var x=document.getElementById("d3");
    var y=document.getElementById("3");
        if(x.style.display=="none")
            {
                x.style.display="block";
                y.value="Close";
            }
        else{
            x.style.display="none";
            y.value="View";
        }
    document.getElementById("d1").style.display="none";
    document.getElementById("d2").style.display="none";
    document.getElementById("d4").style.display="none";
    document.getElementById("d5").style.display="none";
    document.getElementById("d6").style.display="none";
    document.getElementById("1").value="View";
    document.getElementById("2").value="View";
    document.getElementById("4").value="View";
    document.getElementById("5").value="View";
    document.getElementById("6").value="View";
    }
    function show3(){
   var x=document.getElementById("d4");
    var y=document.getElementById("4");
        if(x.style.display=="none")
            {
                x.style.display="block";
                y.value="Close";
            }
        else{
            x.style.display="none";
            y.value="View";
        }
    document.getElementById("d1").style.display="none";
    document.getElementById("d2").style.display="none";
    document.getElementById("d3").style.display="none";
    document.getElementById("d5").style.display="none";
    document.getElementById("d6").style.display="none";
    document.getElementById("1").value="View";
    document.getElementById("2").value="View";
    document.getElementById("3").value="View";
    document.getElementById("5").value="View";
    document.getElementById("6").value="View";
    }
    function show4(){
   var x=document.getElementById("d5");
    var y=document.getElementById("5");
        if(x.style.display=="none")
            {
                x.style.display="block";
                y.value="Close";
            }
        else{
            x.style.display="none";
            y.value="View";
        }
    document.getElementById("d1").style.display="none";
    document.getElementById("d2").style.display="none";
    document.getElementById("d3").style.display="none";
    document.getElementById("d4").style.display="none";
    document.getElementById("d6").style.display="none";
    document.getElementById("1").value="View";
    document.getElementById("2").value="View";
    document.getElementById("3").value="View";
    document.getElementById("4").value="View";
    document.getElementById("6").value="View";
    }
    function show5(){
   var x=document.getElementById("d6");
   var y=document.getElementById("6");
        if(x.style.display=="none")
            {
                x.style.display="block";
                y.value="Close";
            }
        else{
            x.style.display="none";
            y.value="View";
        }
    document.getElementById("d1").style.display="none";
    document.getElementById("d2").style.display="none";
    document.getElementById("d3").style.display="none";
    document.getElementById("d4").style.display="none";
    document.getElementById("d5").style.display="none";
    document.getElementById("1").value="View";
    document.getElementById("2").value="View";
    document.getElementById("3").value="View";
    document.getElementById("4").value="View";
    document.getElementById("5").value="View";
    }
//Hamburger Menu Toggle start
$(".navbar-nav li a").click(function(event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
        $(".navbar-collapse").collapse('hide');
    }
});
//Hamburger Menu Toggle end
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // Handle faq container clicks!
$('.answer.is-visible').toggleClass("is-visible");
$('.faq-container').click(function(e) {
    e.preventDefault();
    if ($(this).find('.answer').hasClass("is-visible") === false)
        $('.faq-container > .answer').removeClass("is-visible");
    $(this).find('.answer').toggleClass("is-visible");
});
