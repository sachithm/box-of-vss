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
var fixedHeaderMobile = document.querySelectorAll(".fixed-header-mobile")[0];


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
  };

  if (scrollTop >= splashInnerContentContainerHeight + splashInnerContentContainerDistanceFromTop && !fixedHeaderMobile.classList.contains("show")) {
    fixedHeaderMobile.classList.add("show");
  } else if (scrollTop < splashInnerContentContainerHeight + splashInnerContentContainerDistanceFromTop && fixedHeaderMobile.classList.contains("show")) {
    fixedHeaderMobile.classList.remove("show")
  };
});

// $(".hamburger").on("click", function() {
//   $(".menu").animate({width: 'toggle'}, 400, "swing", function() {
//     $(".nav-menu").removeClass("visuallyhidden");
//   });
//   $(".cross").removeClass("hidden");
//   $(".hamburger").addClass("hidden");
//   $(".nav-text").delay(100).fadeIn(300);
// });

// $(".cross").on("click", function() {
//   $(".menu").animate({width: 'toggle'}, 400, "swing", function() {
//     $(".nav-menu").addClass("visuallyhidden");
//   });
//   $(".hamburger").removeClass("hidden");
//   $(".cross").addClass("hidden");
//   $(".nav-text").fadeOut(300);
// });


$(".hamburger").on("click", function() {
  $(".menu").slideToggle();
  $(".cross").show();
  $(".hamburger").hide();
  $("body").addClass("body-scroll")
  $(".header-black-overlay").fadeIn();
});

$(".cross").on("click", function() {
  $(".menu").slideToggle();
  $(".cross").hide();
  $(".hamburger").show();
  $("body").removeClass("body-scroll")
  $(".header-black-overlay").fadeOut();
});

$(".header-black-overlay").on("touchstart", function () {
  $(".menu").slideUp("fast", "swing", function () {
    $(".menu").hide();
  });
  $("body").removeClass("body-scroll");
  $(".header-black-overlay").fadeOut();
  $(".hamburger").show();
  $(".cross").hide();
});

// Touch listener makes sure above is correctly selected
$(".fixed-header-mobile").on(
  "touchstart",
  function (e) {
    e.stopPropagation();
  }
);

var that;
// Closes menu when an option is picked
$(".nav-menu").click(function () {
  that = $(this);
  $(".menu").slideToggle("fast", function () {
    $("body").toggleClass("body-scroll");
    $(that).removeClass("click");
    $(".nav-text", that).removeClass("text-click")
  });
  $(".cross").hide();
  $(".hamburger").show();
  $(".header-black-overlay").fadeOut();
  $(this).addClass("click");

  $(".nav-text", this).addClass("text-click")
});

$(".inpoop").on("focusin", function() {
  $(this).addClass("inpoop-click")
  $(this).addClass("placeholder-click");
})

$(".inpoop").on("focusout", function() {
  $(this).removeClass("inpoop-click")
  $(this).removeClass("placeholder-click");
})
