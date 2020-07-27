import "./lib/core";
import $ from "./lib/lib";

$("div").addClass("hello", "world").removeClass("hello").toggleClass("active");
console.log($("div").containClass("hello"));
console.log($("div").containClass("world"));
console.log($("div").containClass("third"));