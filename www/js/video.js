// CARD

const container = document.querySelector(".card_container_projet");
const cards = document.querySelectorAll(".card_projet");

document.getElementById("left").addEventListener("click", function() {
    toPrevious()
})

document.getElementById("right").addEventListener("click", function() {
    toNext()
})

let current = 0;
let prev = 1;
let next = 2;

const toPrevious = () => {

    if (current > 0) {
        toSlide(current - 1)
    } else {
        toSlide(cards.length - 1)
    }
}

const toNext = () => {

    if (current < cards.length - 1) {
        toSlide(current + 1)
    } else {
        toSlide(0)
    }
}

const toSlide = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("active_projet");
        cards[i].classList.remove("prev");
        cards[i].classList.remove("next");
    }

    if (next == cards.length) {
        next = 0;
    }

    if (prev == -1) {
        prev = cards.length - 1;
    }

    cards[current].classList.add("active_projet");
    cards[prev].classList.add("prev");
    cards[next].classList.add("next");
}



// TITRE

// set up text to print, each item in array is new line
var aText = new Array(
    "Vidéos", 
    );
    var iSpeed = 170; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines 
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
    
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext_projet");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 100);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
  
  
    typewriter();



    
// GO TO TOP

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}