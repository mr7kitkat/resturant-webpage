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

function makeItemCard(itemList, heading, buttonText) {
    let h1 = `<h1 class="orderPageHeading">${heading}</h1>`;
    let content = '';

    const containor = document.createElement('section');
    containor.classList.add('itemListContainor');
    itemList.forEach(item => {
        content += `
        <section class="item">
            <div class="cardUpperPart">
                <img class="itemImage" src="./images/foodlist/${item["FILE NAME"]}" alt="${item["NAME"]}">
            </div>
            <div class="cardLowerPart">
                <h2 class="itemIitle">${item["NAME"]}</h2>
                <button class="itembtn" data-item="${item["ID"]}">${buttonText}</button>
            <div>
        </section>
        `
    });
    containor.innerHTML = content;

    const orderPlate = `
    <section class="orderPlatePopup">
        <img src="" alt="">
        <div class="pop>
            <h2>SEE YOUR PLATE</h2>
            <button class="popupbtn">Place your order</button>
        </div>
    </section>
    `

    return h1 + containor.outerHTML + orderPlate;
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
        "ID": "1",
        "FILE NAME": "Aloo butter paratha.jpg",
        "NAME": "Aloo butter paratha",
        "Food Type": "Roti"
    },
    {
        "ID": "2",
        "FILE NAME": "Bacon salad.jpg",
        "NAME": "Bacon salad",
        "Food Type": "Salad"
    },
    {
        "ID": "3",
        "FILE NAME": "Blackbeery cocktail.jpg",
        "NAME": "Blackbeery cocktail",
        "Food Type": "Drinks"
    },
    {
        "ID": "4",
        "FILE NAME": "Blue Shot.jpg",
        "NAME": "Blue Shot",
        "Food Type": "Salad"
    },
    {
        "ID": "5",
        "FILE NAME": "Bread Pakore.jpg",
        "NAME": "Bread Pakore",
        "Food Type": "Snacks"
    },
    {
        "ID": "6",
        "FILE NAME": "Broccali Salad.jpg",
        "NAME": "Broccali Salad",
        "Food Type": "Salad"
    },
    {
        "ID": "7",
        "FILE NAME": "Butter Chicken.jpg",
        "NAME": "Butter Chicken",
        "Food Type": "Non-Veg"
    },
    {
        "ID": "8",
        "FILE NAME": "Butter Mutton.jpg",
        "NAME": "Butter Mutton",
        "Food Type": "Non-Veg"
    },
    {
        "ID": "9",
        "FILE NAME": "Butter Naan.jpg",
        "NAME": "Butter Naan",
        "Food Type": "Roti"
    },
    {
        "ID": "10",
        "FILE NAME": "Butter Parathe.jpg",
        "NAME": "Butter Parathe",
        "Food Type": "Roti"
    },
    {
        "ID": "11",
        "FILE NAME": "Butter Roti.jpg",
        "NAME": "Butter Roti",
        "Food Type": "Roti"
    },
    {
        "ID": "12",
        "FILE NAME": "Caspere Salad.jpg",
        "NAME": "Caspere Salad",
        "Food Type": "Salad"
    },
    {
        "ID": "13",
        "FILE NAME": "Chicken Biryani.jpg",
        "NAME": "Chicken Biryani",
        "Food Type": "Non-Veg"
    },
    {
        "ID": "14",
        "FILE NAME": "Chicken Curry.jpg",
        "NAME": "Chicken Curry",
        "Food Type": "Non-Veg"
    },
    {
        "ID": "15",
        "FILE NAME": "Chicken King.jpg",
        "NAME": "Chicken King",
        "Food Type": "Non-Veg"
    },
    {
        "ID": "16",
        "FILE NAME": "Chicken Lollipop.jpg",
        "NAME": "Chicken Lollipop",
        "Food Type": "Non-Veg"
    },
    {
        "ID": "17",
        "FILE NAME": "Chicken Momo.jpg",
        "NAME": "Chicken Momo",
        "Food Type": "Snacks"
    },
    {
        "ID": "18",
        "FILE NAME": "Chicken Noodles.jpg",
        "NAME": "Chicken Noodles",
        "Food Type": "Meal"
    },
    {
        "ID": "19",
        "FILE NAME": "Chicken Pakore.jpg",
        "NAME": "Chicken Pakore",
        "Food Type": "Snacks"
    },
    {
        "ID": "20",
        "FILE NAME": "Chilled Orange Juice.jpg",
        "NAME": "Chilled Orange Juice",
        "Food Type": "Drinks"
    },
    {
        "ID": "21",
        "FILE NAME": "Choclate Shake.jpg",
        "NAME": "Choclate Shake",
        "Food Type": "Drinks"
    },
    {
        "ID": "22",
        "FILE NAME": "Classic Ramen.jpg",
        "NAME": "Classic Ramen",
        "Food Type": "Meal"
    },
    {
        "ID": "23",
        "FILE NAME": "Egg Salad.jpg",
        "NAME": "Egg Salad",
        "Food Type": "Salad"
    },
    {
        "ID": "24",
        "FILE NAME": "Fruit Green Salad.jpg",
        "NAME": "Fruit Green Salad",
        "Food Type": "Salad"
    },
    {
        "ID": "25",
        "FILE NAME": "Fruit Salad.jpg",
        "NAME": "Fruit Salad",
        "Food Type": "Salad"
    },
    {
        "ID": "26",
        "FILE NAME": "Fry Momo.jpg",
        "NAME": "Fry Momo",
        "Food Type": "Snacks"
    },
    {
        "ID": "27",
        "FILE NAME": "Fry Rice.jpg",
        "NAME": "Fry Rice",
        "Food Type": "Rice"
    },
    {
        "ID": "28",
        "FILE NAME": "Green Pakore Shots.jpg",
        "NAME": "Green Pakore Shots",
        "Food Type": "Snacks"
    },
    {
        "ID": "29",
        "FILE NAME": "Green Pakore.jpg",
        "NAME": "Green Pakore",
        "Food Type": "Snacks"
    },
    {
        "ID": "30",
        "FILE NAME": "Grilled Chicken.jpg",
        "NAME": "Grilled Chicken",
        "Food Type": "Non-Veg"
    },
    {
        "ID": "31",
        "FILE NAME": "Grilled meat.jpg",
        "NAME": "Grilled meat",
        "Food Type": "Non-Veg"
    },
    {
        "ID": "32",
        "FILE NAME": "Jira Rice.jpg",
        "NAME": "Jira Rice",
        "Food Type": "Rice"
    },
    {
        "ID": "33",
        "FILE NAME": "Large Breakfast.jpg",
        "NAME": "Large Breakfast",
        "Food Type": "Meal"
    },
    {
        "ID": "34",
        "FILE NAME": "Naruto Ramen.jpg",
        "NAME": "Naruto Ramen",
        "Food Type": "Meal"
    },
    {
        "ID": "35",
        "FILE NAME": "Meat Fry.jpg",
        "NAME": "Meat Fry",
        "Food Type": "Non-Veg"
    },
    {
        "ID": "36",
        "FILE NAME": "Mix Fruit Shake.jpg",
        "NAME": "Mix Fruit Shake",
        "Food Type": "Drinks"
    },
    {
        "ID": "37",
        "FILE NAME": "Mix Lemon Cocktail.jpg",
        "NAME": "Mix Lemon Cocktail",
        "Food Type": "Drinks"
    },
    {
        "ID": "38",
        "FILE NAME": "Momo.jpg",
        "NAME": "Momo",
        "Food Type": "Snacks"
    },
    {
        "ID": "39",
        "FILE NAME": "Momos with spicy sauce dip.jpg",
        "NAME": "Momos with spicy sauce dip",
        "Food Type": "Snacks"
    },
    {
        "ID": "40",
        "FILE NAME": "Mung Daal ke pakore.jpg",
        "NAME": "Mung Daal ke pakore",
        "Food Type": "Snacks"
    },
    {
        "ID": "41",
        "FILE NAME": "Mutton Biryani.jpg",
        "NAME": "Mutton Biryani",
        "Food Type": "Non-Veg"
    },
    {
        "ID": "42",
        "FILE NAME": "Mutton Chilli Fry.jpg",
        "NAME": "Mutton Chilli Fry",
        "Food Type": "Non-Veg"
    },
    {
        "ID": "43",
        "FILE NAME": "Mutton Curry.jpg",
        "NAME": "Mutton Curry",
        "Food Type": "Non-Veg"
    },
    {
        "ID": "44",
        "FILE NAME": "Naan Roti.jpg",
        "NAME": "Naan Roti",
        "Food Type": "Roti"
    },
    {
        "ID": "45",
        "FILE NAME": "Naan.jpg",
        "NAME": "Naan",
        "Food Type": "Roti"
    },
    {
        "ID": "46",
        "FILE NAME": "Nebula Ice Shot.jpg",
        "NAME": "Nebula Ice Shot",
        "Food Type": "Drinks"
    },
    {
        "ID": "47",
        "FILE NAME": "Orange Juice.jpg",
        "NAME": "Orange Juice",
        "Food Type": "Drinks"
    },
    {
        "ID": "48",
        "FILE NAME": "Paneer Masala.jpg",
        "NAME": "Paneer Masala",
        "Food Type": "Paneer"
    },
    {
        "ID": "49",
        "FILE NAME": "Paneer Pakore.jpg",
        "NAME": "Paneer Pakore",
        "Food Type": "Paneer"
    },
    {
        "ID": "50",
        "FILE NAME": "Paneer Tikka.jpg",
        "NAME": "Paneer Tikka",
        "Food Type": "Paneer"
    },
    {
        "ID": "51",
        "FILE NAME": "Pasta Salad.jpg",
        "NAME": "Pasta Salad",
        "Food Type": "Salad"
    },
    {
        "ID": "52",
        "FILE NAME": "Pawn Noodles.jpg",
        "NAME": "Pawn Noodles",
        "Food Type": "Meal"
    },
    {
        "ID": "53",
        "FILE NAME": "Potato Salad.jpg",
        "NAME": "Potato Salad",
        "Food Type": "Salad"
    },
    {
        "ID": "54",
        "FILE NAME": "Potato Veggie Salad.jpg",
        "NAME": "Potato Veggie Salad",
        "Food Type": "Salad"
    },
    {
        "ID": "55",
        "FILE NAME": "Pulao.jpg",
        "NAME": "Pulao",
        "Food Type": "Rice"
    },
    {
        "ID": "56",
        "FILE NAME": "Pyaj ke pakore.jpg",
        "NAME": "Pyaj ke pakore",
        "Food Type": "Snacks"
    },
    {
        "ID": "57",
        "FILE NAME": "pyaz pakore.jpg",
        "NAME": "pyaz pakore",
        "Food Type": "Snacks"
    },
    {
        "ID": "58",
        "FILE NAME": "Pyaz Parathe.jpg",
        "NAME": "Pyaz Parathe",
        "Food Type": "Snacks"
    },
    {
        "ID": "59",
        "FILE NAME": "Rainbow Salad.jpg",
        "NAME": "Rainbow Salad",
        "Food Type": "Salad"
    },
    {
        "ID": "60",
        "FILE NAME": "Red Berry Cocktail.jpg",
        "NAME": "Red Berry Cocktail",
        "Food Type": "Drinks"
    },
    {
        "ID": "61",
        "FILE NAME": "Red Orange Shake.jpg",
        "NAME": "Red Orange Shake",
        "Food Type": "Drinks"
    },
    {
        "ID": "62",
        "FILE NAME": "Sahi Paneer.jpg",
        "NAME": "Sahi Paneer",
        "Food Type": "Paneer"
    },
    {
        "ID": "63",
        "FILE NAME": "Speggati.jpg",
        "NAME": "Speggati",
        "Food Type": "Meal"
    },
    {
        "ID": "64",
        "FILE NAME": "Spicy Momos.jpg",
        "NAME": "Spicy Momos",
        "Food Type": "Snacks"
    },
    {
        "ID": "65",
        "FILE NAME": "Sprout Salad Bowl.jpg",
        "NAME": "Sprout Salad Bowl",
        "Food Type": "Salad"
    },
    {
        "ID": "66",
        "FILE NAME": "Sprout Salad.jpg",
        "NAME": "Sprout Salad",
        "Food Type": "Salad"
    },
    {
        "ID": "67",
        "FILE NAME": "Strawberry Jar.jpg",
        "NAME": "Strawberry Jar",
        "Food Type": "Drinks"
    },
    {
        "ID": "68",
        "FILE NAME": "Tomato Cherry Salad.jpg",
        "NAME": "Tomato Cherry Salad",
        "Food Type": "Salad"
    },
    {
        "ID": "69",
        "FILE NAME": "Veg Birayani.jpg",
        "NAME": "Veg Birayani",
        "Food Type": "Meal"
    },
    {
        "ID": "70",
        "FILE NAME": "Veg Maggie.jpg",
        "NAME": "Veg Maggie",
        "Food Type": "Meal"
    },
    {
        "ID": "71",
        "FILE NAME": "Watermelon Cocktail.jpg",
        "NAME": "Watermelon Cocktail",
        "Food Type": "Drinks"
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
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ "./src/product.js");





const main = document.querySelector('main');
const content = (0,_content__WEBPACK_IMPORTED_MODULE_0__.makeItemCard)(_product__WEBPACK_IMPORTED_MODULE_2__.foodList, 'Order your food sir...','Add to plate');
(0,_render__WEBPACK_IMPORTED_MODULE_1__.setContent)(main, content)


const orderList = [    {
    "ID": "60",
    "FILE NAME": "Red Berry Cocktail.jpg",
    "NAME": "Red Berry Cocktail",
    "Food Type": "Drinks"
},
{
    "ID": "61",
    "FILE NAME": "Red Orange Shake.jpg",
    "NAME": "Red Orange Shake",
    "Food Type": "Drinks"
},
{
    "ID": "62",
    "FILE NAME": "Sahi Paneer.jpg",
    "NAME": "Sahi Paneer",
    "Food Type": "Paneer"
},
{
    "ID": "63",
    "FILE NAME": "Speggati.jpg",
    "NAME": "Speggati",
    "Food Type": "Meal"
},
{
    "ID": "64",
    "FILE NAME": "Spicy Momos.jpg",
    "NAME": "Spicy Momos",
    "Food Type": "Snacks"
},
{
    "ID": "65",
    "FILE NAME": "Sprout Salad Bowl.jpg",
    "NAME": "Sprout Salad Bowl",
    "Food Type": "Salad"
},
{
    "ID": "66",
    "FILE NAME": "Sprout Salad.jpg",
    "NAME": "Sprout Salad",
    "Food Type": "Salad"
},
{
    "ID": "67",
    "FILE NAME": "Strawberry Jar.jpg",
    "NAME": "Strawberry Jar",
    "Food Type": "Drinks"
},
{
    "ID": "68",
    "FILE NAME": "Tomato Cherry Salad.jpg",
    "NAME": "Tomato Cherry Salad",
    "Food Type": "Salad"
},
{
    "ID": "69",
    "FILE NAME": "Veg Birayani.jpg",
    "NAME": "Veg Birayani",
    "Food Type": "Meal"
},
{
    "ID": "70",
    "FILE NAME": "Veg Maggie.jpg",
    "NAME": "Veg Maggie",
    "Food Type": "Meal"
},
{
    "ID": "71",
    "FILE NAME": "Watermelon Cocktail.jpg",
    "NAME": "Watermelon Cocktail",
    "Food Type": "Drinks"
}];

// Track all the order button clicking
const orderBtn = document.querySelectorAll('button.itembtn');
orderBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let food = _product__WEBPACK_IMPORTED_MODULE_2__.foodList.filter(item => {
            return item["ID"] === e.target.dataset.item;
        })
        orderList.push(food);
    })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGtCQUFrQixTQUFTLGFBQWE7QUFDeEc7QUFDQTtBQUNBLHdDQUF3QyxhQUFhO0FBQ3JELHFEQUFxRCxXQUFXLElBQUksV0FBVztBQUMvRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1YUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04wRDtBQUNwQjtBQUNEO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzREFBWSxDQUFDLDhDQUFRO0FBQ3JDLG1EQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscURBQWU7QUFDbEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnBhZ2UvLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS8uL3NyYy9wcm9kdWN0LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlcm9QYWdlQ29udGVudCA9IGBcclxuPHNlY3Rpb24gY2xhc3M9XCJoZXJvQ29udGVudCBmbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICA8cCBjbGFzcz1cImhlcm90YWcgdXBwZXJ0ZXh0XCI+RWF0IEhlYWx0aHk8L3A+XHJcbiAgICA8cCBjbGFzcz1cImhlcm90YWcgdXBwZXJ0ZXh0XCI+JiBGZWVsIGF3ZXNvbWU8L3A+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCI+T3JkZXIgeW91ciBkZWxpY2lvdXMgbWVhbCBub3c8L2J1dHRvbj5cclxuPC9zZWN0aW9uPlxyXG5gO1xyXG5cclxuZnVuY3Rpb24gbWFrZUl0ZW1DYXJkKGl0ZW1MaXN0LCBoZWFkaW5nLCBidXR0b25UZXh0KSB7XHJcbiAgICBsZXQgaDEgPSBgPGgxIGNsYXNzPVwib3JkZXJQYWdlSGVhZGluZ1wiPiR7aGVhZGluZ308L2gxPmA7XHJcbiAgICBsZXQgY29udGVudCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5vciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIGNvbnRhaW5vci5jbGFzc0xpc3QuYWRkKCdpdGVtTGlzdENvbnRhaW5vcicpO1xyXG4gICAgaXRlbUxpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb250ZW50ICs9IGBcclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRVcHBlclBhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpdGVtSW1hZ2VcIiBzcmM9XCIuL2ltYWdlcy9mb29kbGlzdC8ke2l0ZW1bXCJGSUxFIE5BTUVcIl19XCIgYWx0PVwiJHtpdGVtW1wiTkFNRVwiXX1cIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkTG93ZXJQYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJpdGVtSWl0bGVcIj4ke2l0ZW1bXCJOQU1FXCJdfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaXRlbWJ0blwiIGRhdGEtaXRlbT1cIiR7aXRlbVtcIklEXCJdfVwiPiR7YnV0dG9uVGV4dH08L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgYFxyXG4gICAgfSk7XHJcbiAgICBjb250YWlub3IuaW5uZXJIVE1MID0gY29udGVudDtcclxuXHJcbiAgICBjb25zdCBvcmRlclBsYXRlID0gYFxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJvcmRlclBsYXRlUG9wdXBcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3A+XHJcbiAgICAgICAgICAgIDxoMj5TRUUgWU9VUiBQTEFURTwvaDI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3B1cGJ0blwiPlBsYWNlIHlvdXIgb3JkZXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIGBcclxuXHJcbiAgICByZXR1cm4gaDEgKyBjb250YWlub3Iub3V0ZXJIVE1MICsgb3JkZXJQbGF0ZTtcclxufVxyXG5leHBvcnQge2hlcm9QYWdlQ29udGVudCwgbWFrZUl0ZW1DYXJkfSIsImNvbnN0IGZvb2RMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIxXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJBbG9vIGJ1dHRlciBwYXJhdGhhLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkFsb28gYnV0dGVyIHBhcmF0aGFcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlJvdGlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMlwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQmFjb24gc2FsYWQuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQmFjb24gc2FsYWRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjNcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkJsYWNrYmVlcnkgY29ja3RhaWwuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQmxhY2tiZWVyeSBjb2NrdGFpbFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiRHJpbmtzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjRcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkJsdWUgU2hvdC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJCbHVlIFNob3RcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjVcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkJyZWFkIFBha29yZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJCcmVhZCBQYWtvcmVcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNuYWNrc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI2XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJCcm9jY2FsaSBTYWxhZC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJCcm9jY2FsaSBTYWxhZFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU2FsYWRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiN1wiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQnV0dGVyIENoaWNrZW4uanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQnV0dGVyIENoaWNrZW5cIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk5vbi1WZWdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiOFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQnV0dGVyIE11dHRvbi5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJCdXR0ZXIgTXV0dG9uXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJOb24tVmVnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjlcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkJ1dHRlciBOYWFuLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkJ1dHRlciBOYWFuXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJSb3RpXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjEwXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJCdXR0ZXIgUGFyYXRoZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJCdXR0ZXIgUGFyYXRoZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiUm90aVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIxMVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQnV0dGVyIFJvdGkuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQnV0dGVyIFJvdGlcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlJvdGlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMTJcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNhc3BlcmUgU2FsYWQuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQ2FzcGVyZSBTYWxhZFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU2FsYWRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMTNcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNoaWNrZW4gQmlyeWFuaS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJDaGlja2VuIEJpcnlhbmlcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk5vbi1WZWdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMTRcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNoaWNrZW4gQ3VycnkuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQ2hpY2tlbiBDdXJyeVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiTm9uLVZlZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIxNVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQ2hpY2tlbiBLaW5nLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkNoaWNrZW4gS2luZ1wiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiTm9uLVZlZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIxNlwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQ2hpY2tlbiBMb2xsaXBvcC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJDaGlja2VuIExvbGxpcG9wXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJOb24tVmVnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjE3XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJDaGlja2VuIE1vbW8uanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQ2hpY2tlbiBNb21vXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTbmFja3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMThcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNoaWNrZW4gTm9vZGxlcy5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJDaGlja2VuIE5vb2RsZXNcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk1lYWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMTlcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNoaWNrZW4gUGFrb3JlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkNoaWNrZW4gUGFrb3JlXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTbmFja3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMjBcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNoaWxsZWQgT3JhbmdlIEp1aWNlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkNoaWxsZWQgT3JhbmdlIEp1aWNlXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJEcmlua3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMjFcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNob2NsYXRlIFNoYWtlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkNob2NsYXRlIFNoYWtlXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJEcmlua3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMjJcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNsYXNzaWMgUmFtZW4uanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQ2xhc3NpYyBSYW1lblwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiTWVhbFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIyM1wiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiRWdnIFNhbGFkLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkVnZyBTYWxhZFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU2FsYWRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMjRcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkZydWl0IEdyZWVuIFNhbGFkLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkZydWl0IEdyZWVuIFNhbGFkXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTYWxhZFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIyNVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiRnJ1aXQgU2FsYWQuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiRnJ1aXQgU2FsYWRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjI2XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJGcnkgTW9tby5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJGcnkgTW9tb1wiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU25hY2tzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjI3XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJGcnkgUmljZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJGcnkgUmljZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiUmljZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIyOFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiR3JlZW4gUGFrb3JlIFNob3RzLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkdyZWVuIFBha29yZSBTaG90c1wiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU25hY2tzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjI5XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJHcmVlbiBQYWtvcmUuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiR3JlZW4gUGFrb3JlXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTbmFja3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMzBcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkdyaWxsZWQgQ2hpY2tlbi5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJHcmlsbGVkIENoaWNrZW5cIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk5vbi1WZWdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMzFcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkdyaWxsZWQgbWVhdC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJHcmlsbGVkIG1lYXRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk5vbi1WZWdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMzJcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkppcmEgUmljZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJKaXJhIFJpY2VcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlJpY2VcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMzNcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkxhcmdlIEJyZWFrZmFzdC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJMYXJnZSBCcmVha2Zhc3RcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk1lYWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMzRcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk5hcnV0byBSYW1lbi5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJOYXJ1dG8gUmFtZW5cIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk1lYWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMzVcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk1lYXQgRnJ5LmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIk1lYXQgRnJ5XCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJOb24tVmVnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjM2XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJNaXggRnJ1aXQgU2hha2UuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiTWl4IEZydWl0IFNoYWtlXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJEcmlua3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMzdcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk1peCBMZW1vbiBDb2NrdGFpbC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJNaXggTGVtb24gQ29ja3RhaWxcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIzOFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiTW9tby5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJNb21vXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTbmFja3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMzlcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk1vbW9zIHdpdGggc3BpY3kgc2F1Y2UgZGlwLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIk1vbW9zIHdpdGggc3BpY3kgc2F1Y2UgZGlwXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTbmFja3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNDBcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk11bmcgRGFhbCBrZSBwYWtvcmUuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiTXVuZyBEYWFsIGtlIHBha29yZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU25hY2tzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjQxXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJNdXR0b24gQmlyeWFuaS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJNdXR0b24gQmlyeWFuaVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiTm9uLVZlZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI0MlwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiTXV0dG9uIENoaWxsaSBGcnkuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiTXV0dG9uIENoaWxsaSBGcnlcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk5vbi1WZWdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNDNcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk11dHRvbiBDdXJyeS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJNdXR0b24gQ3VycnlcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk5vbi1WZWdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNDRcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk5hYW4gUm90aS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJOYWFuIFJvdGlcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlJvdGlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNDVcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk5hYW4uanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiTmFhblwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiUm90aVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI0NlwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiTmVidWxhIEljZSBTaG90LmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIk5lYnVsYSBJY2UgU2hvdFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiRHJpbmtzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjQ3XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJPcmFuZ2UgSnVpY2UuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiT3JhbmdlIEp1aWNlXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJEcmlua3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNDhcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlBhbmVlciBNYXNhbGEuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiUGFuZWVyIE1hc2FsYVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiUGFuZWVyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjQ5XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJQYW5lZXIgUGFrb3JlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlBhbmVlciBQYWtvcmVcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlBhbmVlclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI1MFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiUGFuZWVyIFRpa2thLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlBhbmVlciBUaWtrYVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiUGFuZWVyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjUxXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJQYXN0YSBTYWxhZC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJQYXN0YSBTYWxhZFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU2FsYWRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNTJcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlBhd24gTm9vZGxlcy5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJQYXduIE5vb2RsZXNcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk1lYWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNTNcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlBvdGF0byBTYWxhZC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJQb3RhdG8gU2FsYWRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjU0XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJQb3RhdG8gVmVnZ2llIFNhbGFkLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlBvdGF0byBWZWdnaWUgU2FsYWRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjU1XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJQdWxhby5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJQdWxhb1wiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiUmljZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI1NlwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiUHlhaiBrZSBwYWtvcmUuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiUHlhaiBrZSBwYWtvcmVcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNuYWNrc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI1N1wiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwicHlheiBwYWtvcmUuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwicHlheiBwYWtvcmVcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNuYWNrc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI1OFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiUHlheiBQYXJhdGhlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlB5YXogUGFyYXRoZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU25hY2tzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjU5XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJSYWluYm93IFNhbGFkLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlJhaW5ib3cgU2FsYWRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjYwXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJSZWQgQmVycnkgQ29ja3RhaWwuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiUmVkIEJlcnJ5IENvY2t0YWlsXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJEcmlua3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNjFcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlJlZCBPcmFuZ2UgU2hha2UuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiUmVkIE9yYW5nZSBTaGFrZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiRHJpbmtzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjYyXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJTYWhpIFBhbmVlci5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJTYWhpIFBhbmVlclwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiUGFuZWVyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjYzXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJTcGVnZ2F0aS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJTcGVnZ2F0aVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiTWVhbFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI2NFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiU3BpY3kgTW9tb3MuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiU3BpY3kgTW9tb3NcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNuYWNrc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI2NVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiU3Byb3V0IFNhbGFkIEJvd2wuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiU3Byb3V0IFNhbGFkIEJvd2xcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjY2XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJTcHJvdXQgU2FsYWQuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiU3Byb3V0IFNhbGFkXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTYWxhZFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI2N1wiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiU3RyYXdiZXJyeSBKYXIuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiU3RyYXdiZXJyeSBKYXJcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI2OFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiVG9tYXRvIENoZXJyeSBTYWxhZC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJUb21hdG8gQ2hlcnJ5IFNhbGFkXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTYWxhZFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI2OVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiVmVnIEJpcmF5YW5pLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlZlZyBCaXJheWFuaVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiTWVhbFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI3MFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiVmVnIE1hZ2dpZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJWZWcgTWFnZ2llXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJNZWFsXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjcxXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJXYXRlcm1lbG9uIENvY2t0YWlsLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIldhdGVybWVsb24gQ29ja3RhaWxcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCB7IGZvb2RMaXN0IH07IiwiZnVuY3Rpb24gc2V0Q29udGVudChwYXJlbnRFbGVtZW50LCBjb250ZW50KSB7XHJcbiAgICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCA9ICcnXHJcbiAgICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7c2V0Q29udGVudH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBoZXJvUGFnZUNvbnRlbnQsIG1ha2VJdGVtQ2FyZCB9IGZyb20gXCIuL2NvbnRlbnRcIjtcclxuaW1wb3J0IHsgc2V0Q29udGVudCB9IGZyb20gXCIuL3JlbmRlclwiO1xyXG5pbXBvcnQgeyBmb29kTGlzdCB9IGZyb20gXCIuL3Byb2R1Y3RcIjtcclxuXHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5jb25zdCBjb250ZW50ID0gbWFrZUl0ZW1DYXJkKGZvb2RMaXN0LCAnT3JkZXIgeW91ciBmb29kIHNpci4uLicsJ0FkZCB0byBwbGF0ZScpO1xyXG5zZXRDb250ZW50KG1haW4sIGNvbnRlbnQpXHJcblxyXG5cclxuY29uc3Qgb3JkZXJMaXN0ID0gWyAgICB7XHJcbiAgICBcIklEXCI6IFwiNjBcIixcclxuICAgIFwiRklMRSBOQU1FXCI6IFwiUmVkIEJlcnJ5IENvY2t0YWlsLmpwZ1wiLFxyXG4gICAgXCJOQU1FXCI6IFwiUmVkIEJlcnJ5IENvY2t0YWlsXCIsXHJcbiAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiXHJcbn0sXHJcbntcclxuICAgIFwiSURcIjogXCI2MVwiLFxyXG4gICAgXCJGSUxFIE5BTUVcIjogXCJSZWQgT3JhbmdlIFNoYWtlLmpwZ1wiLFxyXG4gICAgXCJOQU1FXCI6IFwiUmVkIE9yYW5nZSBTaGFrZVwiLFxyXG4gICAgXCJGb29kIFR5cGVcIjogXCJEcmlua3NcIlxyXG59LFxyXG57XHJcbiAgICBcIklEXCI6IFwiNjJcIixcclxuICAgIFwiRklMRSBOQU1FXCI6IFwiU2FoaSBQYW5lZXIuanBnXCIsXHJcbiAgICBcIk5BTUVcIjogXCJTYWhpIFBhbmVlclwiLFxyXG4gICAgXCJGb29kIFR5cGVcIjogXCJQYW5lZXJcIlxyXG59LFxyXG57XHJcbiAgICBcIklEXCI6IFwiNjNcIixcclxuICAgIFwiRklMRSBOQU1FXCI6IFwiU3BlZ2dhdGkuanBnXCIsXHJcbiAgICBcIk5BTUVcIjogXCJTcGVnZ2F0aVwiLFxyXG4gICAgXCJGb29kIFR5cGVcIjogXCJNZWFsXCJcclxufSxcclxue1xyXG4gICAgXCJJRFwiOiBcIjY0XCIsXHJcbiAgICBcIkZJTEUgTkFNRVwiOiBcIlNwaWN5IE1vbW9zLmpwZ1wiLFxyXG4gICAgXCJOQU1FXCI6IFwiU3BpY3kgTW9tb3NcIixcclxuICAgIFwiRm9vZCBUeXBlXCI6IFwiU25hY2tzXCJcclxufSxcclxue1xyXG4gICAgXCJJRFwiOiBcIjY1XCIsXHJcbiAgICBcIkZJTEUgTkFNRVwiOiBcIlNwcm91dCBTYWxhZCBCb3dsLmpwZ1wiLFxyXG4gICAgXCJOQU1FXCI6IFwiU3Byb3V0IFNhbGFkIEJvd2xcIixcclxuICAgIFwiRm9vZCBUeXBlXCI6IFwiU2FsYWRcIlxyXG59LFxyXG57XHJcbiAgICBcIklEXCI6IFwiNjZcIixcclxuICAgIFwiRklMRSBOQU1FXCI6IFwiU3Byb3V0IFNhbGFkLmpwZ1wiLFxyXG4gICAgXCJOQU1FXCI6IFwiU3Byb3V0IFNhbGFkXCIsXHJcbiAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCJcclxufSxcclxue1xyXG4gICAgXCJJRFwiOiBcIjY3XCIsXHJcbiAgICBcIkZJTEUgTkFNRVwiOiBcIlN0cmF3YmVycnkgSmFyLmpwZ1wiLFxyXG4gICAgXCJOQU1FXCI6IFwiU3RyYXdiZXJyeSBKYXJcIixcclxuICAgIFwiRm9vZCBUeXBlXCI6IFwiRHJpbmtzXCJcclxufSxcclxue1xyXG4gICAgXCJJRFwiOiBcIjY4XCIsXHJcbiAgICBcIkZJTEUgTkFNRVwiOiBcIlRvbWF0byBDaGVycnkgU2FsYWQuanBnXCIsXHJcbiAgICBcIk5BTUVcIjogXCJUb21hdG8gQ2hlcnJ5IFNhbGFkXCIsXHJcbiAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCJcclxufSxcclxue1xyXG4gICAgXCJJRFwiOiBcIjY5XCIsXHJcbiAgICBcIkZJTEUgTkFNRVwiOiBcIlZlZyBCaXJheWFuaS5qcGdcIixcclxuICAgIFwiTkFNRVwiOiBcIlZlZyBCaXJheWFuaVwiLFxyXG4gICAgXCJGb29kIFR5cGVcIjogXCJNZWFsXCJcclxufSxcclxue1xyXG4gICAgXCJJRFwiOiBcIjcwXCIsXHJcbiAgICBcIkZJTEUgTkFNRVwiOiBcIlZlZyBNYWdnaWUuanBnXCIsXHJcbiAgICBcIk5BTUVcIjogXCJWZWcgTWFnZ2llXCIsXHJcbiAgICBcIkZvb2QgVHlwZVwiOiBcIk1lYWxcIlxyXG59LFxyXG57XHJcbiAgICBcIklEXCI6IFwiNzFcIixcclxuICAgIFwiRklMRSBOQU1FXCI6IFwiV2F0ZXJtZWxvbiBDb2NrdGFpbC5qcGdcIixcclxuICAgIFwiTkFNRVwiOiBcIldhdGVybWVsb24gQ29ja3RhaWxcIixcclxuICAgIFwiRm9vZCBUeXBlXCI6IFwiRHJpbmtzXCJcclxufV07XHJcblxyXG4vLyBUcmFjayBhbGwgdGhlIG9yZGVyIGJ1dHRvbiBjbGlja2luZ1xyXG5jb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5pdGVtYnRuJyk7XHJcbm9yZGVyQnRuLmZvckVhY2goYnRuID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGZvb2QgPSBmb29kTGlzdC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtW1wiSURcIl0gPT09IGUudGFyZ2V0LmRhdGFzZXQuaXRlbTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIG9yZGVyTGlzdC5wdXNoKGZvb2QpO1xyXG4gICAgfSlcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=