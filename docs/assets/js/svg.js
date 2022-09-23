document.querySelector("#steps").classList.add("d-none");
function animateSVG() {
    document.querySelector("#thank-you").classList.remove("d-none");
    $(".path-first")
  .velocity({ "stroke-dashoffset": 1800 }, 0)
  .velocity({ "stroke-dashoffset": 0 }, { duration: 2550, delay: 0 });


$(".path-second")
  .velocity({ "stroke-dashoffset": 300 }, 0)
  .velocity({ "stroke-dashoffset": 0 }, { duration: 700, delay: 700 });

$(".path-third")
  .velocity({ "stroke-dashoffset": 200 }, 0)
  .velocity({ "stroke-dashoffset": 0 }, { duration: 700, delay: 1750 });

$(".path-fourth")
  .velocity({ "stroke-dashoffset": 300 }, 0)
  .velocity({ "stroke-dashoffset": 0 }, { duration: 1000, delay: 1750 });

$(".path-fifth")
  .velocity({ "stroke-dashoffset": 800 }, 0)
  .velocity({ "stroke-dashoffset": 0 }, { duration: 1200, delay: 2550 });

$(".path-sixth")
  .velocity({ "stroke-dashoffset": 600 }, 0)
  .velocity({ "stroke-dashoffset": 0 }, { duration: 1000, delay: 3450 });
}

function unhideSection() {
    animateSVG();
    setTimeout(function() {
        document.querySelector("#scroll_down").classList.remove("d-none");
        document.querySelector("#steps").classList.remove("d-none");
    }, 4450);
}
unhideSection();
    