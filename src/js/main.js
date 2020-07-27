import "./lib/core";
import $ from "./lib/lib";

const clicked = function() {
    $(this).toggleClass("clicked");
};

const hello = function() {
    alert(hello.name);
};

$("div").on("click", clicked);
