console.log("This ones for you Sachi");

// Scroll reveal
window.sr = ScrollReveal();
sr.reveal(".rows");
sr.reveal(
  ".card",
  {
    duration: 500
  },
  100
);

// Smooth anchor jump
var scroll = new SmoothScroll('a[href*="#"]');

// Fixed header
var splashInnerContentContainer = document.querySelectorAll("#ic1")[0];
var splashInnerContentContainerHeight = splashInnerContentContainer.scrollHeight;
var splashInnerContentContainerDistanceFromTop = getPosition(splashInnerContentContainer).y;
var fixedHeader = document.querySelectorAll("#fixed-header")[0];

// This function gets the distance of an element from the top
function getPosition(element) {
  var xPosition = 0;
  var yPosition = 0;

  while (element) {
    xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
    yPosition += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent;
  }

  return {
    x: xPosition,
    y: yPosition
  };
}

// Add an event listener so the function below runs everytime a scroll is done
document.addEventListener("scroll", function(event) {
  /* Define vars that help with determining vertical scroll position 
  (https://stackoverflow.com/questions/11193453/find-the-vertical-position-of-scrollbar-without-jquery)
  These need constant re-defining otherwise they give old values */
  supportPageOffset = window.pageXOffset !== undefined;
  isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

  scrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

  // Uncomment these two console logs below if you want an idea of how this works
  //   console.log("hit");
  console.log(scrollTop);
  console.log(splashInnerContentContainerHeight);
  console.log(splashInnerContentContainerDistanceFromTop);

  if (scrollTop >= splashInnerContentContainerHeight + splashInnerContentContainerDistanceFromTop) {
    if (!fixedHeader.classList.contains("show")) {
      fixedHeader.classList.add("show");
    }
  } else if (scrollTop < splashInnerContentContainerHeight + splashInnerContentContainerDistanceFromTop) {
    if (fixedHeader.classList.contains("show")) {
      fixedHeader.classList.remove("show");
    }
  }
});
