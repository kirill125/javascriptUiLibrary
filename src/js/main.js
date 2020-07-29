import "./lib/core";
import $ from "./lib/lib";

$("#first").on("click", () => {
    $("div").eq(1).fadeOut(800);
});

$("[data-count='second']").on("click", () => {
    $("div").eq(2).fadeOut(800);
});

$(".btn").eq(2).on("click", () => {
    $(".mt-20").fadeOut(800);
});



