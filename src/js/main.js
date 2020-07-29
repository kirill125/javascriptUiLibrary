import "./lib/core";
import $ from "./lib/lib";

const clicked = function() {
    $(this).toggleClass("clicked");
};

const hello = function() {
    alert(hello.name);
};

$("div").on("click", clicked);

$(".active").html("Hello");
console.log($(".active").html());

$("div").eq(1).toggleClass("eq");

$("div").click(function(){
    console.log($(this).index());
});

console.log($("div").eq(2).find(".more"));
console.log($(".some").closest(".third"));
console.log($(".more").eq(0).siblings());
