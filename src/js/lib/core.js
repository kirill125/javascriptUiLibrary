// (()=> {
//     const $ = function(selector) {
//         const elements = document.querySelectorAll(selector);
//         const obj = {};
//         obj.hide = () => {
//             elements.forEach(item => {
//                 item.style.display = "none";
//             });
//             return obj;
//         };
//         obj.show = () => {
//             elements.forEach(item => {
//                 item.style.display = "";
//             });
//             return obj;
//         };
//         return obj;
//     };
//     window.$ = $;
// })();

const $ = function(selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if(!selector) {
        return this; // {} empty object
    }

    if ( selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype; // У нового объекта, который возвращается в $.prototype.init будут те же методы, что и у прототипа $
window.$ = $;

export default $;