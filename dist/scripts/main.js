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
/* harmony export */   "heroPage": () => (/* binding */ heroPage)
/* harmony export */ });
// hero page content
const heroPage = `
<section class="h-full w-full flex flex-col justify-center items-start px-10 myclass">
    <h2 class="text-8xl">Eat Healthy</h2>
    <h2 class="text-6xl">& Stay Healthy</h2>
    <button data-page="1" class="text-2xl my-6 border-2 border-lightblack rounded-full p-2 w-3/12 transition-all bg-lightblack text-white myclass hover:text-lightblack hover:bg-lightyellow hover:border-lightyellow">Click to Order food</button>
</section>
`;



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
    parentElement.innerHTML = ''
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



const operator = {
    onPage: 1,
    cacheDOMElements(){
        this.main = document.querySelector('main');
    },
    render() {
        this.cacheDOMElements();

        if (this.onPage = 1) {
            this.content = _content__WEBPACK_IMPORTED_MODULE_0__.heroPage;
        }else {
            this.content = ''
        }

        (0,_render__WEBPACK_IMPORTED_MODULE_1__.setContent)(this.main, this.content);
    }
}

operator.render()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4Q0FBUTtBQUNuQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlLy4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnBhZ2UvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaGVybyBwYWdlIGNvbnRlbnRcclxuY29uc3QgaGVyb1BhZ2UgPSBgXHJcbjxzZWN0aW9uIGNsYXNzPVwiaC1mdWxsIHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IHB4LTEwIG15Y2xhc3NcIj5cclxuICAgIDxoMiBjbGFzcz1cInRleHQtOHhsXCI+RWF0IEhlYWx0aHk8L2gyPlxyXG4gICAgPGgyIGNsYXNzPVwidGV4dC02eGxcIj4mIFN0YXkgSGVhbHRoeTwvaDI+XHJcbiAgICA8YnV0dG9uIGRhdGEtcGFnZT1cIjFcIiBjbGFzcz1cInRleHQtMnhsIG15LTYgYm9yZGVyLTIgYm9yZGVyLWxpZ2h0YmxhY2sgcm91bmRlZC1mdWxsIHAtMiB3LTMvMTIgdHJhbnNpdGlvbi1hbGwgYmctbGlnaHRibGFjayB0ZXh0LXdoaXRlIG15Y2xhc3MgaG92ZXI6dGV4dC1saWdodGJsYWNrIGhvdmVyOmJnLWxpZ2h0eWVsbG93IGhvdmVyOmJvcmRlci1saWdodHllbGxvd1wiPkNsaWNrIHRvIE9yZGVyIGZvb2Q8L2J1dHRvbj5cclxuPC9zZWN0aW9uPlxyXG5gO1xyXG5cclxuZXhwb3J0IHtoZXJvUGFnZX07IiwiZnVuY3Rpb24gc2V0Q29udGVudChwYXJlbnRFbGVtZW50LCBjb250ZW50KSB7XHJcbiAgICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCA9ICcnXHJcbiAgICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7c2V0Q29udGVudH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBoZXJvUGFnZSB9IGZyb20gXCIuL2NvbnRlbnRcIjtcclxuaW1wb3J0IHsgc2V0Q29udGVudCB9IGZyb20gXCIuL3JlbmRlclwiO1xyXG5cclxuY29uc3Qgb3BlcmF0b3IgPSB7XHJcbiAgICBvblBhZ2U6IDEsXHJcbiAgICBjYWNoZURPTUVsZW1lbnRzKCl7XHJcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmNhY2hlRE9NRWxlbWVudHMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub25QYWdlID0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBoZXJvUGFnZTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9ICcnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDb250ZW50KHRoaXMubWFpbiwgdGhpcy5jb250ZW50KTtcclxuICAgIH1cclxufVxyXG5cclxub3BlcmF0b3IucmVuZGVyKClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9