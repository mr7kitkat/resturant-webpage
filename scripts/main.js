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
/* harmony export */   "finalOrderPage": () => (/* binding */ finalOrderPage),
/* harmony export */   "heroPageContent": () => (/* binding */ heroPageContent),
/* harmony export */   "makeItemCard": () => (/* binding */ makeItemCard),
/* harmony export */   "prepareOrderList": () => (/* binding */ prepareOrderList)
/* harmony export */ });
// First or Hero page content
const heroPageContent = `
<section class="heroContent flex flex-column">
    <p class="herotag uppertext">Eat Healthy</p>
    <p class="herotag uppertext">& Feel awesome</p>
    <button class="btn">Order your delicious meal now</button>
</section>
`;

// Second page or say order menu page content
function makeItemCard(itemList, heading, imageLocation, buttonText) {
    let h1 = `<h1 class="orderPageHeading">${heading}</h1>`;
    let content = '';

    const containor = document.createElement('section');
    containor.classList.add('itemListContainor');
    itemList.forEach(item => {
        content += `
        <section class="item">
            <div class="cardUpperPart">
                <img class="itemImage" src="${imageLocation}/${item["FILE NAME"]}" alt="${item["NAME"]}">
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
    <section class="orderPlatePopup hidden">
        <div class="textBlock">
            <h2>SEE YOUR PLATE</h2>
            <button class="popupbtn">View your order</button>
        </div>
    </section>
    `

    return h1 + containor.outerHTML + orderPlate;
}

// Final order placement page content structure
const finalOrderPage = `
<section class="finalOrderPage">
    <button class="close">X</button>
    <h2>Your order</h2>

    <section class="orderedList">

    </section>

    <button class="submit itembtn">Place Order</button>
</section>
`;

function prepareOrderList(list) {
    let content = '';
    list.forEach(item => {
        content += `
        <section class="flex orderItem">
            <img class="orderItemImage" src="./images/foodlist/${item['FILE NAME']}" alt="${item['NAME']}">
            <h2 class="orderItemName">${item['NAME']}</h2>
        </section>
        `
    })

    return content;
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
        "Food Type": "Roti",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "2",
        "FILE NAME": "Bacon salad.jpg",
        "NAME": "Bacon salad",
        "Food Type": "Salad",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "3",
        "FILE NAME": "Blackbeery cocktail.jpg",
        "NAME": "Blackbeery cocktail",
        "Food Type": "Drinks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "4",
        "FILE NAME": "Blue Shot.jpg",
        "NAME": "Blue Shot",
        "Food Type": "Salad",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "5",
        "FILE NAME": "Bread Pakore.jpg",
        "NAME": "Bread Pakore",
        "Food Type": "Snacks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "6",
        "FILE NAME": "Broccali Salad.jpg",
        "NAME": "Broccali Salad",
        "Food Type": "Salad",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "7",
        "FILE NAME": "Butter Chicken.jpg",
        "NAME": "Butter Chicken",
        "Food Type": "Non-Veg",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "8",
        "FILE NAME": "Butter Mutton.jpg",
        "NAME": "Butter Mutton",
        "Food Type": "Non-Veg",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "9",
        "FILE NAME": "Butter Naan.jpg",
        "NAME": "Butter Naan",
        "Food Type": "Roti",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "10",
        "FILE NAME": "Butter Parathe.jpg",
        "NAME": "Butter Parathe",
        "Food Type": "Roti",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "11",
        "FILE NAME": "Butter Roti.jpg",
        "NAME": "Butter Roti",
        "Food Type": "Roti",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "12",
        "FILE NAME": "Caspere Salad.jpg",
        "NAME": "Caspere Salad",
        "Food Type": "Salad",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "13",
        "FILE NAME": "Chicken Biryani.jpg",
        "NAME": "Chicken Biryani",
        "Food Type": "Non-Veg",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "14",
        "FILE NAME": "Chicken Curry.jpg",
        "NAME": "Chicken Curry",
        "Food Type": "Non-Veg",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "15",
        "FILE NAME": "Chicken King.jpg",
        "NAME": "Chicken King",
        "Food Type": "Non-Veg",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "16",
        "FILE NAME": "Chicken Lollipop.jpg",
        "NAME": "Chicken Lollipop",
        "Food Type": "Non-Veg",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "17",
        "FILE NAME": "Chicken Momo.jpg",
        "NAME": "Chicken Momo",
        "Food Type": "Snacks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "18",
        "FILE NAME": "Chicken Noodles.jpg",
        "NAME": "Chicken Noodles",
        "Food Type": "Meal",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "19",
        "FILE NAME": "Chicken Pakore.jpg",
        "NAME": "Chicken Pakore",
        "Food Type": "Snacks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "20",
        "FILE NAME": "Chilled Orange Juice.jpg",
        "NAME": "Chilled Orange Juice",
        "Food Type": "Drinks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "21",
        "FILE NAME": "Choclate Shake.jpg",
        "NAME": "Choclate Shake",
        "Food Type": "Drinks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "22",
        "FILE NAME": "Classic Ramen.jpg",
        "NAME": "Classic Ramen",
        "Food Type": "Meal",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "23",
        "FILE NAME": "Egg Salad.jpg",
        "NAME": "Egg Salad",
        "Food Type": "Salad",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "24",
        "FILE NAME": "Fruit Green Salad.jpg",
        "NAME": "Fruit Green Salad",
        "Food Type": "Salad",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "25",
        "FILE NAME": "Fruit Salad.jpg",
        "NAME": "Fruit Salad",
        "Food Type": "Salad",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "26",
        "FILE NAME": "Fry Momo.jpg",
        "NAME": "Fry Momo",
        "Food Type": "Snacks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "27",
        "FILE NAME": "Fry Rice.jpg",
        "NAME": "Fry Rice",
        "Food Type": "Rice",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "28",
        "FILE NAME": "Green Pakore Shots.jpg",
        "NAME": "Green Pakore Shots",
        "Food Type": "Snacks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "29",
        "FILE NAME": "Green Pakore.jpg",
        "NAME": "Green Pakore",
        "Food Type": "Snacks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "30",
        "FILE NAME": "Grilled Chicken.jpg",
        "NAME": "Grilled Chicken",
        "Food Type": "Non-Veg",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "31",
        "FILE NAME": "Grilled meat.jpg",
        "NAME": "Grilled meat",
        "Food Type": "Non-Veg",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "32",
        "FILE NAME": "Jira Rice.jpg",
        "NAME": "Jira Rice",
        "Food Type": "Rice",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "33",
        "FILE NAME": "Large Breakfast.jpg",
        "NAME": "Large Breakfast",
        "Food Type": "Meal",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "34",
        "FILE NAME": "Naruto Ramen.jpg",
        "NAME": "Naruto Ramen",
        "Food Type": "Meal",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "35",
        "FILE NAME": "Meat Fry.jpg",
        "NAME": "Meat Fry",
        "Food Type": "Non-Veg",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "36",
        "FILE NAME": "Mix Fruit Shake.jpg",
        "NAME": "Mix Fruit Shake",
        "Food Type": "Drinks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "37",
        "FILE NAME": "Mix Lemon Cocktail.jpg",
        "NAME": "Mix Lemon Cocktail",
        "Food Type": "Drinks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "38",
        "FILE NAME": "Momo.jpg",
        "NAME": "Momo",
        "Food Type": "Snacks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "39",
        "FILE NAME": "Momos with spicy sauce dip.jpg",
        "NAME": "Momos with spicy sauce dip",
        "Food Type": "Snacks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "40",
        "FILE NAME": "Mung Daal ke pakore.jpg",
        "NAME": "Mung Daal ke pakore",
        "Food Type": "Snacks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "41",
        "FILE NAME": "Mutton Biryani.jpg",
        "NAME": "Mutton Biryani",
        "Food Type": "Non-Veg",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "42",
        "FILE NAME": "Mutton Chilli Fry.jpg",
        "NAME": "Mutton Chilli Fry",
        "Food Type": "Non-Veg",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "43",
        "FILE NAME": "Mutton Curry.jpg",
        "NAME": "Mutton Curry",
        "Food Type": "Non-Veg",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "44",
        "FILE NAME": "Naan Roti.jpg",
        "NAME": "Naan Roti",
        "Food Type": "Roti",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "45",
        "FILE NAME": "Naan.jpg",
        "NAME": "Naan",
        "Food Type": "Roti",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "46",
        "FILE NAME": "Nebula Ice Shot.jpg",
        "NAME": "Nebula Ice Shot",
        "Food Type": "Drinks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "47",
        "FILE NAME": "Orange Juice.jpg",
        "NAME": "Orange Juice",
        "Food Type": "Drinks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "48",
        "FILE NAME": "Paneer Masala.jpg",
        "NAME": "Paneer Masala",
        "Food Type": "Paneer",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "49",
        "FILE NAME": "Paneer Pakore.jpg",
        "NAME": "Paneer Pakore",
        "Food Type": "Paneer",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "50",
        "FILE NAME": "Paneer Tikka.jpg",
        "NAME": "Paneer Tikka",
        "Food Type": "Paneer",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "51",
        "FILE NAME": "Pasta Salad.jpg",
        "NAME": "Pasta Salad",
        "Food Type": "Salad",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "52",
        "FILE NAME": "Pawn Noodles.jpg",
        "NAME": "Pawn Noodles",
        "Food Type": "Meal",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "53",
        "FILE NAME": "Potato Salad.jpg",
        "NAME": "Potato Salad",
        "Food Type": "Salad",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "54",
        "FILE NAME": "Potato Veggie Salad.jpg",
        "NAME": "Potato Veggie Salad",
        "Food Type": "Salad",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "55",
        "FILE NAME": "Pulao.jpg",
        "NAME": "Pulao",
        "Food Type": "Rice",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "56",
        "FILE NAME": "Pyaj ke pakore.jpg",
        "NAME": "Pyaj ke pakore",
        "Food Type": "Snacks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "57",
        "FILE NAME": "pyaz pakore.jpg",
        "NAME": "pyaz pakore",
        "Food Type": "Snacks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "58",
        "FILE NAME": "Pyaz Parathe.jpg",
        "NAME": "Pyaz Parathe",
        "Food Type": "Snacks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "59",
        "FILE NAME": "Rainbow Salad.jpg",
        "NAME": "Rainbow Salad",
        "Food Type": "Salad",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "60",
        "FILE NAME": "Red Berry Cocktail.jpg",
        "NAME": "Red Berry Cocktail",
        "Food Type": "Drinks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "61",
        "FILE NAME": "Red Orange Shake.jpg",
        "NAME": "Red Orange Shake",
        "Food Type": "Drinks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "62",
        "FILE NAME": "Sahi Paneer.jpg",
        "NAME": "Sahi Paneer",
        "Food Type": "Paneer",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "63",
        "FILE NAME": "Speggati.jpg",
        "NAME": "Speggati",
        "Food Type": "Meal",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "64",
        "FILE NAME": "Spicy Momos.jpg",
        "NAME": "Spicy Momos",
        "Food Type": "Snacks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "65",
        "FILE NAME": "Sprout Salad Bowl.jpg",
        "NAME": "Sprout Salad Bowl",
        "Food Type": "Salad",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "66",
        "FILE NAME": "Sprout Salad.jpg",
        "NAME": "Sprout Salad",
        "Food Type": "Salad",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "67",
        "FILE NAME": "Strawberry Jar.jpg",
        "NAME": "Strawberry Jar",
        "Food Type": "Drinks",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "68",
        "FILE NAME": "Tomato Cherry Salad.jpg",
        "NAME": "Tomato Cherry Salad",
        "Food Type": "Salad",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "69",
        "FILE NAME": "Veg Birayani.jpg",
        "NAME": "Veg Birayani",
        "Food Type": "Meal",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "70",
        "FILE NAME": "Veg Maggie.jpg",
        "NAME": "Veg Maggie",
        "Food Type": "Meal",
        "QTY":0,
        "isSeleted": false,
    },
    {
        "ID": "71",
        "FILE NAME": "Watermelon Cocktail.jpg",
        "NAME": "Watermelon Cocktail",
        "Food Type": "Drinks",
        "QTY":0,
        "isSeleted": false,
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
const content = (0,_content__WEBPACK_IMPORTED_MODULE_0__.makeItemCard)(_product__WEBPACK_IMPORTED_MODULE_2__.foodList, 'Order your food sir...','./images/foodlist','Add to plate');
(0,_render__WEBPACK_IMPORTED_MODULE_1__.setContent)(main, content)


// Track all the order button clicking
const orderBtn = document.querySelectorAll('button.itembtn');
orderBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const checkIdx = (item) => {
            return +item["ID"] === +e.target.dataset.item;
        }

        let idx = _product__WEBPACK_IMPORTED_MODULE_2__.foodList.findIndex(checkIdx);
        _product__WEBPACK_IMPORTED_MODULE_2__.foodList[idx].isSeleted = true;
        _product__WEBPACK_IMPORTED_MODULE_2__.foodList[idx]["QTY"] += 1;
        showHideOrderPopup();
    })
})

// check for orderList
function showHideOrderPopup() {
    const orderpopup = document.querySelector('.orderPlatePopup');
    let test = _product__WEBPACK_IMPORTED_MODULE_2__.foodList.some(item => item.isSeleted);
    if (test) {
        orderpopup.classList.remove('hidden');
    }else {
        orderpopup.classList.add('hidden');
    }
}


const viewOrderBtn = document.querySelector("button.popupbtn");
viewOrderBtn.addEventListener("click", function() {
    let content = _content__WEBPACK_IMPORTED_MODULE_0__.finalOrderPage;
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.setContent)(main, content);

    const orderList = _product__WEBPACK_IMPORTED_MODULE_2__.foodList.filter(food => food.isSeleted);
    const orderItems = (0,_content__WEBPACK_IMPORTED_MODULE_0__.prepareOrderList)(orderList);
    const orderedList = document.querySelector('.orderedList');
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.setContent)(orderedList, orderItems);
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWMsR0FBRyxrQkFBa0IsU0FBUyxhQUFhO0FBQ3ZHO0FBQ0E7QUFDQSx3Q0FBd0MsYUFBYTtBQUNyRCxxREFBcUQsV0FBVyxJQUFJLFdBQVc7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxrQkFBa0IsU0FBUyxhQUFhO0FBQ3pHLHdDQUF3QyxhQUFhO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONEY7QUFDdEQ7QUFDRDtBQUNyQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQVksQ0FBQyw4Q0FBUTtBQUNyQyxtREFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFrQjtBQUNwQyxRQUFRLDhDQUFRO0FBQ2hCLFFBQVEsOENBQVE7QUFDaEI7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtREFBYTtBQUM1QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFjO0FBQ2hDLElBQUksbURBQVU7QUFDZDtBQUNBLHNCQUFzQixxREFBZTtBQUNyQyx1QkFBdUIsMERBQWdCO0FBQ3ZDO0FBQ0EsSUFBSSxtREFBVTtBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlLy4vc3JjL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnBhZ2UvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRmlyc3Qgb3IgSGVybyBwYWdlIGNvbnRlbnRcclxuY29uc3QgaGVyb1BhZ2VDb250ZW50ID0gYFxyXG48c2VjdGlvbiBjbGFzcz1cImhlcm9Db250ZW50IGZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgIDxwIGNsYXNzPVwiaGVyb3RhZyB1cHBlcnRleHRcIj5FYXQgSGVhbHRoeTwvcD5cclxuICAgIDxwIGNsYXNzPVwiaGVyb3RhZyB1cHBlcnRleHRcIj4mIEZlZWwgYXdlc29tZTwvcD5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5PcmRlciB5b3VyIGRlbGljaW91cyBtZWFsIG5vdzwvYnV0dG9uPlxyXG48L3NlY3Rpb24+XHJcbmA7XHJcblxyXG4vLyBTZWNvbmQgcGFnZSBvciBzYXkgb3JkZXIgbWVudSBwYWdlIGNvbnRlbnRcclxuZnVuY3Rpb24gbWFrZUl0ZW1DYXJkKGl0ZW1MaXN0LCBoZWFkaW5nLCBpbWFnZUxvY2F0aW9uLCBidXR0b25UZXh0KSB7XHJcbiAgICBsZXQgaDEgPSBgPGgxIGNsYXNzPVwib3JkZXJQYWdlSGVhZGluZ1wiPiR7aGVhZGluZ308L2gxPmA7XHJcbiAgICBsZXQgY29udGVudCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5vciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIGNvbnRhaW5vci5jbGFzc0xpc3QuYWRkKCdpdGVtTGlzdENvbnRhaW5vcicpO1xyXG4gICAgaXRlbUxpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb250ZW50ICs9IGBcclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRVcHBlclBhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpdGVtSW1hZ2VcIiBzcmM9XCIke2ltYWdlTG9jYXRpb259LyR7aXRlbVtcIkZJTEUgTkFNRVwiXX1cIiBhbHQ9XCIke2l0ZW1bXCJOQU1FXCJdfVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRMb3dlclBhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIml0ZW1JaXRsZVwiPiR7aXRlbVtcIk5BTUVcIl19PC9oMj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpdGVtYnRuXCIgZGF0YS1pdGVtPVwiJHtpdGVtW1wiSURcIl19XCI+JHtidXR0b25UZXh0fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICBgXHJcbiAgICB9KTtcclxuICAgIGNvbnRhaW5vci5pbm5lckhUTUwgPSBjb250ZW50O1xyXG5cclxuICAgIGNvbnN0IG9yZGVyUGxhdGUgPSBgXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cIm9yZGVyUGxhdGVQb3B1cCBoaWRkZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dEJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxoMj5TRUUgWU9VUiBQTEFURTwvaDI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3B1cGJ0blwiPlZpZXcgeW91ciBvcmRlcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgYFxyXG5cclxuICAgIHJldHVybiBoMSArIGNvbnRhaW5vci5vdXRlckhUTUwgKyBvcmRlclBsYXRlO1xyXG59XHJcblxyXG4vLyBGaW5hbCBvcmRlciBwbGFjZW1lbnQgcGFnZSBjb250ZW50IHN0cnVjdHVyZVxyXG5jb25zdCBmaW5hbE9yZGVyUGFnZSA9IGBcclxuPHNlY3Rpb24gY2xhc3M9XCJmaW5hbE9yZGVyUGFnZVwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlXCI+WDwvYnV0dG9uPlxyXG4gICAgPGgyPllvdXIgb3JkZXI8L2gyPlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwib3JkZXJlZExpc3RcIj5cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdCBpdGVtYnRuXCI+UGxhY2UgT3JkZXI8L2J1dHRvbj5cclxuPC9zZWN0aW9uPlxyXG5gO1xyXG5cclxuZnVuY3Rpb24gcHJlcGFyZU9yZGVyTGlzdChsaXN0KSB7XHJcbiAgICBsZXQgY29udGVudCA9ICcnO1xyXG4gICAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gYFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZmxleCBvcmRlckl0ZW1cIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cIm9yZGVySXRlbUltYWdlXCIgc3JjPVwiLi9pbWFnZXMvZm9vZGxpc3QvJHtpdGVtWydGSUxFIE5BTUUnXX1cIiBhbHQ9XCIke2l0ZW1bJ05BTUUnXX1cIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPVwib3JkZXJJdGVtTmFtZVwiPiR7aXRlbVsnTkFNRSddfTwvaDI+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIGBcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7aGVyb1BhZ2VDb250ZW50LCBtYWtlSXRlbUNhcmQsIGZpbmFsT3JkZXJQYWdlLCBwcmVwYXJlT3JkZXJMaXN0fSIsImNvbnN0IGZvb2RMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIxXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJBbG9vIGJ1dHRlciBwYXJhdGhhLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkFsb28gYnV0dGVyIHBhcmF0aGFcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlJvdGlcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIyXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJCYWNvbiBzYWxhZC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJCYWNvbiBzYWxhZFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU2FsYWRcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIzXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJCbGFja2JlZXJ5IGNvY2t0YWlsLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkJsYWNrYmVlcnkgY29ja3RhaWxcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjRcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkJsdWUgU2hvdC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJCbHVlIFNob3RcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQnJlYWQgUGFrb3JlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkJyZWFkIFBha29yZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU25hY2tzXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNlwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQnJvY2NhbGkgU2FsYWQuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQnJvY2NhbGkgU2FsYWRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiN1wiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQnV0dGVyIENoaWNrZW4uanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQnV0dGVyIENoaWNrZW5cIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk5vbi1WZWdcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI4XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJCdXR0ZXIgTXV0dG9uLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkJ1dHRlciBNdXR0b25cIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk5vbi1WZWdcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI5XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJCdXR0ZXIgTmFhbi5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJCdXR0ZXIgTmFhblwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiUm90aVwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjEwXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJCdXR0ZXIgUGFyYXRoZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJCdXR0ZXIgUGFyYXRoZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiUm90aVwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjExXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJCdXR0ZXIgUm90aS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJCdXR0ZXIgUm90aVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiUm90aVwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjEyXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJDYXNwZXJlIFNhbGFkLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkNhc3BlcmUgU2FsYWRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMTNcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNoaWNrZW4gQmlyeWFuaS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJDaGlja2VuIEJpcnlhbmlcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk5vbi1WZWdcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIxNFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQ2hpY2tlbiBDdXJyeS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJDaGlja2VuIEN1cnJ5XCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJOb24tVmVnXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMTVcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNoaWNrZW4gS2luZy5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJDaGlja2VuIEtpbmdcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk5vbi1WZWdcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIxNlwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQ2hpY2tlbiBMb2xsaXBvcC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJDaGlja2VuIExvbGxpcG9wXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJOb24tVmVnXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMTdcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNoaWNrZW4gTW9tby5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJDaGlja2VuIE1vbW9cIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNuYWNrc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjE4XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJDaGlja2VuIE5vb2RsZXMuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQ2hpY2tlbiBOb29kbGVzXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJNZWFsXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMTlcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNoaWNrZW4gUGFrb3JlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkNoaWNrZW4gUGFrb3JlXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTbmFja3NcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIyMFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQ2hpbGxlZCBPcmFuZ2UgSnVpY2UuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQ2hpbGxlZCBPcmFuZ2UgSnVpY2VcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjIxXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJDaG9jbGF0ZSBTaGFrZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJDaG9jbGF0ZSBTaGFrZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiRHJpbmtzXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMjJcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNsYXNzaWMgUmFtZW4uanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQ2xhc3NpYyBSYW1lblwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiTWVhbFwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjIzXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJFZ2cgU2FsYWQuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiRWdnIFNhbGFkXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTYWxhZFwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjI0XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJGcnVpdCBHcmVlbiBTYWxhZC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJGcnVpdCBHcmVlbiBTYWxhZFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU2FsYWRcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIyNVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiRnJ1aXQgU2FsYWQuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiRnJ1aXQgU2FsYWRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMjZcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkZyeSBNb21vLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkZyeSBNb21vXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTbmFja3NcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIyN1wiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiRnJ5IFJpY2UuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiRnJ5IFJpY2VcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlJpY2VcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIyOFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiR3JlZW4gUGFrb3JlIFNob3RzLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkdyZWVuIFBha29yZSBTaG90c1wiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU25hY2tzXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMjlcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkdyZWVuIFBha29yZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJHcmVlbiBQYWtvcmVcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNuYWNrc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjMwXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJHcmlsbGVkIENoaWNrZW4uanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiR3JpbGxlZCBDaGlja2VuXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJOb24tVmVnXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMzFcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkdyaWxsZWQgbWVhdC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJHcmlsbGVkIG1lYXRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk5vbi1WZWdcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIzMlwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiSmlyYSBSaWNlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkppcmEgUmljZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiUmljZVwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjMzXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJMYXJnZSBCcmVha2Zhc3QuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiTGFyZ2UgQnJlYWtmYXN0XCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJNZWFsXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMzRcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk5hcnV0byBSYW1lbi5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJOYXJ1dG8gUmFtZW5cIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk1lYWxcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIzNVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiTWVhdCBGcnkuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiTWVhdCBGcnlcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk5vbi1WZWdcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIzNlwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiTWl4IEZydWl0IFNoYWtlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIk1peCBGcnVpdCBTaGFrZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiRHJpbmtzXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMzdcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk1peCBMZW1vbiBDb2NrdGFpbC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJNaXggTGVtb24gQ29ja3RhaWxcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjM4XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJNb21vLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIk1vbW9cIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNuYWNrc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjM5XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJNb21vcyB3aXRoIHNwaWN5IHNhdWNlIGRpcC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJNb21vcyB3aXRoIHNwaWN5IHNhdWNlIGRpcFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU25hY2tzXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNDBcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk11bmcgRGFhbCBrZSBwYWtvcmUuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiTXVuZyBEYWFsIGtlIHBha29yZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU25hY2tzXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNDFcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk11dHRvbiBCaXJ5YW5pLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIk11dHRvbiBCaXJ5YW5pXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJOb24tVmVnXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNDJcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk11dHRvbiBDaGlsbGkgRnJ5LmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIk11dHRvbiBDaGlsbGkgRnJ5XCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJOb24tVmVnXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNDNcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk11dHRvbiBDdXJyeS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJNdXR0b24gQ3VycnlcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk5vbi1WZWdcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI0NFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiTmFhbiBSb3RpLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIk5hYW4gUm90aVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiUm90aVwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjQ1XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJOYWFuLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIk5hYW5cIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlJvdGlcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI0NlwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiTmVidWxhIEljZSBTaG90LmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIk5lYnVsYSBJY2UgU2hvdFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiRHJpbmtzXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNDdcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk9yYW5nZSBKdWljZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJPcmFuZ2UgSnVpY2VcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjQ4XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJQYW5lZXIgTWFzYWxhLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlBhbmVlciBNYXNhbGFcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlBhbmVlclwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjQ5XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJQYW5lZXIgUGFrb3JlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlBhbmVlciBQYWtvcmVcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlBhbmVlclwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjUwXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJQYW5lZXIgVGlra2EuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiUGFuZWVyIFRpa2thXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJQYW5lZXJcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI1MVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiUGFzdGEgU2FsYWQuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiUGFzdGEgU2FsYWRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNTJcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlBhd24gTm9vZGxlcy5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJQYXduIE5vb2RsZXNcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk1lYWxcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI1M1wiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiUG90YXRvIFNhbGFkLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlBvdGF0byBTYWxhZFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU2FsYWRcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI1NFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiUG90YXRvIFZlZ2dpZSBTYWxhZC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJQb3RhdG8gVmVnZ2llIFNhbGFkXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTYWxhZFwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjU1XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJQdWxhby5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJQdWxhb1wiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiUmljZVwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjU2XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJQeWFqIGtlIHBha29yZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJQeWFqIGtlIHBha29yZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU25hY2tzXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNTdcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcInB5YXogcGFrb3JlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcInB5YXogcGFrb3JlXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTbmFja3NcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI1OFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiUHlheiBQYXJhdGhlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlB5YXogUGFyYXRoZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU25hY2tzXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNTlcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlJhaW5ib3cgU2FsYWQuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiUmFpbmJvdyBTYWxhZFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU2FsYWRcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI2MFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiUmVkIEJlcnJ5IENvY2t0YWlsLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlJlZCBCZXJyeSBDb2NrdGFpbFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiRHJpbmtzXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNjFcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlJlZCBPcmFuZ2UgU2hha2UuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiUmVkIE9yYW5nZSBTaGFrZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiRHJpbmtzXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNjJcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlNhaGkgUGFuZWVyLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlNhaGkgUGFuZWVyXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJQYW5lZXJcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI2M1wiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiU3BlZ2dhdGkuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiU3BlZ2dhdGlcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk1lYWxcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI2NFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiU3BpY3kgTW9tb3MuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiU3BpY3kgTW9tb3NcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNuYWNrc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjY1XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJTcHJvdXQgU2FsYWQgQm93bC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJTcHJvdXQgU2FsYWQgQm93bFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU2FsYWRcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI2NlwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiU3Byb3V0IFNhbGFkLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlNwcm91dCBTYWxhZFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU2FsYWRcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI2N1wiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiU3RyYXdiZXJyeSBKYXIuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiU3RyYXdiZXJyeSBKYXJcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjY4XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJUb21hdG8gQ2hlcnJ5IFNhbGFkLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlRvbWF0byBDaGVycnkgU2FsYWRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNjlcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlZlZyBCaXJheWFuaS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJWZWcgQmlyYXlhbmlcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk1lYWxcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI3MFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiVmVnIE1hZ2dpZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJWZWcgTWFnZ2llXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJNZWFsXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNzFcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIldhdGVybWVsb24gQ29ja3RhaWwuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiV2F0ZXJtZWxvbiBDb2NrdGFpbFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiRHJpbmtzXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgeyBmb29kTGlzdCB9OyIsImZ1bmN0aW9uIHNldENvbnRlbnQocGFyZW50RWxlbWVudCwgY29udGVudCkge1xyXG4gICAgcGFyZW50RWxlbWVudC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgcGFyZW50RWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQge3NldENvbnRlbnR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaGVyb1BhZ2VDb250ZW50LCBtYWtlSXRlbUNhcmQsIGZpbmFsT3JkZXJQYWdlLCBwcmVwYXJlT3JkZXJMaXN0IH0gZnJvbSBcIi4vY29udGVudFwiO1xyXG5pbXBvcnQgeyBzZXRDb250ZW50IH0gZnJvbSBcIi4vcmVuZGVyXCI7XHJcbmltcG9ydCB7IGZvb2RMaXN0IH0gZnJvbSBcIi4vcHJvZHVjdFwiO1xyXG5cclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbmNvbnN0IGNvbnRlbnQgPSBtYWtlSXRlbUNhcmQoZm9vZExpc3QsICdPcmRlciB5b3VyIGZvb2Qgc2lyLi4uJywnLi9pbWFnZXMvZm9vZGxpc3QnLCdBZGQgdG8gcGxhdGUnKTtcclxuc2V0Q29udGVudChtYWluLCBjb250ZW50KVxyXG5cclxuXHJcbi8vIFRyYWNrIGFsbCB0aGUgb3JkZXIgYnV0dG9uIGNsaWNraW5nXHJcbmNvbnN0IG9yZGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLml0ZW1idG4nKTtcclxub3JkZXJCdG4uZm9yRWFjaChidG4gPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBjaGVja0lkeCA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAraXRlbVtcIklEXCJdID09PSArZS50YXJnZXQuZGF0YXNldC5pdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGlkeCA9IGZvb2RMaXN0LmZpbmRJbmRleChjaGVja0lkeCk7XHJcbiAgICAgICAgZm9vZExpc3RbaWR4XS5pc1NlbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGZvb2RMaXN0W2lkeF1bXCJRVFlcIl0gKz0gMTtcclxuICAgICAgICBzaG93SGlkZU9yZGVyUG9wdXAoKTtcclxuICAgIH0pXHJcbn0pXHJcblxyXG4vLyBjaGVjayBmb3Igb3JkZXJMaXN0XHJcbmZ1bmN0aW9uIHNob3dIaWRlT3JkZXJQb3B1cCgpIHtcclxuICAgIGNvbnN0IG9yZGVycG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJQbGF0ZVBvcHVwJyk7XHJcbiAgICBsZXQgdGVzdCA9IGZvb2RMaXN0LnNvbWUoaXRlbSA9PiBpdGVtLmlzU2VsZXRlZCk7XHJcbiAgICBpZiAodGVzdCkge1xyXG4gICAgICAgIG9yZGVycG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgb3JkZXJwb3B1cC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHZpZXdPcmRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24ucG9wdXBidG5cIik7XHJcbnZpZXdPcmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGZpbmFsT3JkZXJQYWdlO1xyXG4gICAgc2V0Q29udGVudChtYWluLCBjb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBvcmRlckxpc3QgPSBmb29kTGlzdC5maWx0ZXIoZm9vZCA9PiBmb29kLmlzU2VsZXRlZCk7XHJcbiAgICBjb25zdCBvcmRlckl0ZW1zID0gcHJlcGFyZU9yZGVyTGlzdChvcmRlckxpc3QpO1xyXG4gICAgY29uc3Qgb3JkZXJlZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJlZExpc3QnKTtcclxuICAgIHNldENvbnRlbnQob3JkZXJlZExpc3QsIG9yZGVySXRlbXMpO1xyXG59KVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=