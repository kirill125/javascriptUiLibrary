import "./lib/core";
import $ from "./lib/lib";

$("#first").on("click", () => {
    $("div").eq(1).fadeOut(800);
});

$("[data-count='second']").on("click", () => {
    $("div").eq(2).fadeToggle(800);
});

$(".btn").eq(2).on("click", () => {
    $(".mt-20").fadeToggle(800);
});

$("#trigger").click(() => $("#trigger").createModal({
    text: {
        title: "Dynamic Modal Title",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    btns: {
        count: 3,
        settings: [
            [
                "Close",
                ["btn-danger", "mr-10"],
                true
            ],
            [
                "Save Changes",
                ["btn-success"],
                false,
                () => {
                    alert("Data is saved");
                }
            ],
            [
                "New Button",
                ["btn-warning", "ml-10"],
                false,
                () => {
                    alert("New button is clicked");
                }
            ]
        ]
    }
    
}));

$().get("https://jsonplaceholder.typicode.com/todos/1", "text").then((res)=> console.log(res));

