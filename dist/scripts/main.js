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
<section>
    <p>Eat Healthy</p>
    <p>& Feel awesome</p>
    <button>Order your delicious meal now</button>
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
const content = (0,_content__WEBPACK_IMPORTED_MODULE_0__.makeItemCard)(_product__WEBPACK_IMPORTED_MODULE_2__.foodList);
(0,_render__WEBPACK_IMPORTED_MODULE_1__.setContent)(main, content)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxXQUFXLFNBQVMsVUFBVTtBQUNwRSxrQkFBa0IsVUFBVTtBQUM1QixpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjBEO0FBQ3BCO0FBQ0Q7QUFDckM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFZLENBQUMsOENBQVE7QUFDckMsbURBQVUsZSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlLy4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnBhZ2UvLi9zcmMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZXJvUGFnZUNvbnRlbnQgPSBgXHJcbjxzZWN0aW9uPlxyXG4gICAgPHA+RWF0IEhlYWx0aHk8L3A+XHJcbiAgICA8cD4mIEZlZWwgYXdlc29tZTwvcD5cclxuICAgIDxidXR0b24+T3JkZXIgeW91ciBkZWxpY2lvdXMgbWVhbCBub3c8L2J1dHRvbj5cclxuPC9zZWN0aW9uPlxyXG5gO1xyXG5cclxuZnVuY3Rpb24gbWFrZUl0ZW1DYXJkKGl0ZW1MaXN0KSB7XHJcbiAgICBsZXQgaDEgPSAnPGgxPk9yZGVyIHlvdXIgZm9vZCBzaXIuLi48L2gxPic7XHJcbiAgICBsZXQgY29udGVudCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5vciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIGl0ZW1MaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCIuL2ltYWdlcy8ke2l0ZW0uaW1hZ2V9XCIgYWx0PVwiJHtpdGVtLm5hbWV9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxoMj4ke2l0ZW0ubmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8cD4ke2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uPkFkZCB0byBvcmRlciBsaXN0PC9idXR0b24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIGBcclxuICAgIH0pO1xyXG4gICAgY29udGFpbm9yLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIGgxICsgY29udGFpbm9yLm91dGVySFRNTDtcclxufVxyXG5leHBvcnQge2hlcm9QYWdlQ29udGVudCwgbWFrZUl0ZW1DYXJkfSIsImNvbnN0IGZvb2RMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkIDogMSxcclxuICAgICAgICBuYW1lOiAnUmFtZW4nLFxyXG4gICAgICAgIGltYWdlOiAncmFtZW4uanBnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ3JhbWVuIGlzIGEgdGFzdHkgZGVsaWNpb3VzIGZvb2QgY29va2VkIHdpdGggdHJhZGlvdGlvbmFsIG1ldGhvZC4gSXQgY29udGFpbnMgc291cCwgdmVnZ2llcywgbWVhdCwgZWdncyBhbmQgc28gbWFueSBvdGhlciBoZWFsdGh5IHN0dWZmLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogJ1BpenphJyxcclxuICAgICAgICBpbWFnZTogJ3BpenphLmpwZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdQaXp6YSBpcyBhIHRhc3R5IGZvb2QnXHJcbiAgICB9XHJcbl1cclxuXHJcblxyXG5leHBvcnQgeyBmb29kTGlzdCB9OyIsImZ1bmN0aW9uIHNldENvbnRlbnQocGFyZW50RWxlbWVudCwgY29udGVudCkge1xyXG4gICAgcGFyZW50RWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQge3NldENvbnRlbnR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaGVyb1BhZ2VDb250ZW50LCBtYWtlSXRlbUNhcmQgfSBmcm9tIFwiLi9jb250ZW50XCI7XHJcbmltcG9ydCB7IHNldENvbnRlbnQgfSBmcm9tIFwiLi9yZW5kZXJcIjtcclxuaW1wb3J0IHsgZm9vZExpc3QgfSBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcblxyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuY29uc3QgY29udGVudCA9IG1ha2VJdGVtQ2FyZChmb29kTGlzdCk7XHJcbnNldENvbnRlbnQobWFpbiwgY29udGVudCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=