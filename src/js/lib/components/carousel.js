import $ from "../core";

$.prototype.carousel = function () {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector(".carousel-inner")).width;
        const slides = this[i].querySelectorAll(".carousel-item");
        const slidesField = this[i].querySelector(".carousel-slides");
        slidesField.style.width = 100 * slides.length + "%";
        slides.forEach(slide => {
            slide.style.width = width;
        });
        let offset = 0;
        const indicators = this[i].querySelectorAll(".carousel-indicators")[0].children;
        // const indicators = this[i].querySelectorAll(".carousel-indicators li");
        let countIndicators = 0;

        $(this[i].querySelector("[data-slide = 'next']")).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, "") * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, "");
            }
            slidesField.style.transform = `translateX(${-offset}px)`;
            [...indicators].forEach(indicator => {
                $(indicator).removeClass("active");
            });
            countIndicators = offset / (+width.replace(/\D/g, ""));
            $(indicators[countIndicators]).addClass("active");
        });

        $(this[i].querySelector("[data-slide = 'prev']")).click((e) => {
            e.preventDefault();
            if (offset === 0) {
                offset = +width.replace(/\D/g, "") * (slides.length - 1);
                countIndicators = 0;
            } else {
                offset -= +width.replace(/\D/g, "");
            }
            slidesField.style.transform = `translateX(${-offset}px)`;
            [...indicators].forEach(indicator => {
                $(indicator).removeClass("active");
            });
            countIndicators = offset / (+width.replace(/\D/g, ""));
            $(indicators[countIndicators]).addClass("active");
        });

        [...indicators].forEach(indicator => {
            $(indicator).click((e)=> {
                countIndicators = e.target.getAttribute("data-slide-to");
                offset = countIndicators * (+width.replace(/\D/g, ""));
                slidesField.style.transform = `translateX(${-offset}px)`;
                [...indicators].forEach(indicator => {
                    $(indicator).removeClass("active");
                });
                $(indicators[countIndicators]).addClass("active");
                
            });
        });
    }


};

$(".carousel").carousel();