/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "heroPageContent": () => (/* binding */ heroPageContent),
/* harmony export */   "makeItemCard": () => (/* binding */ makeItemCard)
/* harmony export */ });
const heroPageContent = `
<section class="heroContent flex flex-column">
    <p class="herotag uppertext">Eat Healthy</p>
    <p class="herotag uppertext">& Feel awesome</p>
    <button class="btn">Order your delicious meal now</button>
</section>
`;

function makeItemCard(itemList) {
    let h1 = '<h1>Order your food sir...</h1>';
    let content = '';

    const containor = document.createElement('section');
    itemList.forEach(item => {
        content += `
        <section>
            <div><img src="./images/${item.image}" alt="${item.name}"></div>
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <button>Add to order list</button>
        </section>
        `
    });
    containor.innerHTML = content;

    return h1 + containor.outerHTML;
}


/***/ }),

/***/ "./src/product.js":
/*!************************!*\
  !*** ./src/product.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "foodList": () => (/* binding */ foodList)
/* harmony export */ });
const foodList = [
    {
        id : 1,
        name: 'Ramen',
        image: 'ramen.jpg',
        description: 'ramen is a tasty delicious food cooked with tradiotional method. It contains soup, veggies, meat, eggs and so many other healthy stuff.'
    },
    {
        id: 2,
        name: 'Pizza',
        image: 'pizza.jpg',
        description: 'Pizza is a tasty food'
    }
]




/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setContent": () => (/* binding */ setContent)
/* harmony export */ });
function setContent(parentElement, content) {
    parentElement.innerHTML = content;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ "./src/product.js");





const main = document.querySelector('main');
const content = _content__WEBPACK_IMPORTED_MODULE_0__.heroPageContent;
(0,_render__WEBPACK_IMPORTED_MODULE_1__.setContent)(main, content)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxXQUFXLFNBQVMsVUFBVTtBQUNwRSxrQkFBa0IsVUFBVTtBQUM1QixpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjBEO0FBQ3BCO0FBQ0Q7QUFDckM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFEQUFlO0FBQy9CLG1EQUFVLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlLy4vc3JjL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnBhZ2UvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVyb1BhZ2VDb250ZW50ID0gYFxyXG48c2VjdGlvbiBjbGFzcz1cImhlcm9Db250ZW50IGZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgIDxwIGNsYXNzPVwiaGVyb3RhZyB1cHBlcnRleHRcIj5FYXQgSGVhbHRoeTwvcD5cclxuICAgIDxwIGNsYXNzPVwiaGVyb3RhZyB1cHBlcnRleHRcIj4mIEZlZWwgYXdlc29tZTwvcD5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5PcmRlciB5b3VyIGRlbGljaW91cyBtZWFsIG5vdzwvYnV0dG9uPlxyXG48L3NlY3Rpb24+XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBtYWtlSXRlbUNhcmQoaXRlbUxpc3QpIHtcclxuICAgIGxldCBoMSA9ICc8aDE+T3JkZXIgeW91ciBmb29kIHNpci4uLjwvaDE+JztcclxuICAgIGxldCBjb250ZW50ID0gJyc7XHJcblxyXG4gICAgY29uc3QgY29udGFpbm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgaXRlbUxpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb250ZW50ICs9IGBcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGRpdj48aW1nIHNyYz1cIi4vaW1hZ2VzLyR7aXRlbS5pbWFnZX1cIiBhbHQ9XCIke2l0ZW0ubmFtZX1cIj48L2Rpdj5cclxuICAgICAgICAgICAgPGgyPiR7aXRlbS5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxwPiR7aXRlbS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24+QWRkIHRvIG9yZGVyIGxpc3Q8L2J1dHRvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgYFxyXG4gICAgfSk7XHJcbiAgICBjb250YWlub3IuaW5uZXJIVE1MID0gY29udGVudDtcclxuXHJcbiAgICByZXR1cm4gaDEgKyBjb250YWlub3Iub3V0ZXJIVE1MO1xyXG59XHJcbmV4cG9ydCB7aGVyb1BhZ2VDb250ZW50LCBtYWtlSXRlbUNhcmR9IiwiY29uc3QgZm9vZExpc3QgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQgOiAxLFxyXG4gICAgICAgIG5hbWU6ICdSYW1lbicsXHJcbiAgICAgICAgaW1hZ2U6ICdyYW1lbi5qcGcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAncmFtZW4gaXMgYSB0YXN0eSBkZWxpY2lvdXMgZm9vZCBjb29rZWQgd2l0aCB0cmFkaW90aW9uYWwgbWV0aG9kLiBJdCBjb250YWlucyBzb3VwLCB2ZWdnaWVzLCBtZWF0LCBlZ2dzIGFuZCBzbyBtYW55IG90aGVyIGhlYWx0aHkgc3R1ZmYuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiAnUGl6emEnLFxyXG4gICAgICAgIGltYWdlOiAncGl6emEuanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1BpenphIGlzIGEgdGFzdHkgZm9vZCdcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmV4cG9ydCB7IGZvb2RMaXN0IH07IiwiZnVuY3Rpb24gc2V0Q29udGVudChwYXJlbnRFbGVtZW50LCBjb250ZW50KSB7XHJcbiAgICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7c2V0Q29udGVudH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBoZXJvUGFnZUNvbnRlbnQsIG1ha2VJdGVtQ2FyZCB9IGZyb20gXCIuL2NvbnRlbnRcIjtcclxuaW1wb3J0IHsgc2V0Q29udGVudCB9IGZyb20gXCIuL3JlbmRlclwiO1xyXG5pbXBvcnQgeyBmb29kTGlzdCB9IGZyb20gXCIuL3Byb2R1Y3RcIjtcclxuXHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5jb25zdCBjb250ZW50ID0gaGVyb1BhZ2VDb250ZW50O1xyXG5zZXRDb250ZW50KG1haW4sIGNvbnRlbnQpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9