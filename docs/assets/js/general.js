$(".footer-cat").click(function() {
    $(this).children(".mobile-cross").toggleClass("rotate180");
})

function customRedirect(link) {
    window.location.href = link.toString();
}