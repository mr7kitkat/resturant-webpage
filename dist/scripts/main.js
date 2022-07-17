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
/* harmony export */   "aboutPage": () => (/* binding */ aboutPage),
/* harmony export */   "foodList": () => (/* reexport safe */ _product__WEBPACK_IMPORTED_MODULE_0__.foodList),
/* harmony export */   "heroPage": () => (/* binding */ heroPage),
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ "./src/product.js");



// hero page content
const heroPage = `
<section class="h-full w-full flex flex-col justify-center items-start px-10 myclass">
    <h2 class="text-8xl">Eat Healthy</h2>
    <h2 class="text-6xl">& Stay Healthy</h2>
    <button data-page="1" class="text-2xl my-6 border-2 border-lightblack rounded-full p-2 w-3/12 transition-all bg-lightblack text-white myclass hover:text-lightblack hover:bg-lightyellow hover:border-lightyellow">Click to Order food</button>
</section>
`;



// Function that generate content based on input for Menu page
function makeMenu() {
    // Creating set to extract unique food type value
    const foodTypeList = new Set();
    let foodItemBlock = ''

    _product__WEBPACK_IMPORTED_MODULE_0__.foodList.forEach(food => {
        foodTypeList.add(food['Food Type']);

        foodItemBlock += `
        <section class="fooditem rounded-md p-3">
            <img src="./images/foodlist/${food['FILE NAME']}" alt="" loading="lazy" class="h-[290px] w-[290px] max-h-full object-cover object-center mx-auto">
            <div class="foodDetails">
                <h3 class="text-2xl my-2">${food['NAME']}</h3>
                <button id="${food['ID']}" class="placeOrderBtn rounded-full my-2 border-0 hover:bg-lightyellow hover:text-lightblack active:bg-lightyellow active:text-lightblack bg-lightgray  p-1 px-4 w-full">Place order</button>
            </div>
        </section>
        `
    })

    let buttonList = '<button class="m-1 typeBtn rounded border-0 hover:bg-lightyellow hover:text-lightblack active:bg-lightyellow active:text-lightblack bg-lightgray p-1 px-2" data-type="All">All</button>'
    foodTypeList.forEach(food => {
        buttonList += `<button class="m-1 typeBtn rounded border-0 hover:bg-lightyellow hover:text-lightblack active:bg-lightyellow active:text-lightblack bg-lightgray p-1 px-2" data-type="${food}">${food}</button>`
    })
    
    const mainContent = `
        <section class="h-full w-11/12 mx-auto">
                    
            <div class="menu flex justify-between items-center p-8 border-b-2">
                <h2 class="text-5xl font-bold">Menu</h2>
                <div class="menuSelection flex justify-evenly items-center flex-wrap w-6/12">
                    ${buttonList}
                </div>
            </div>


            <div class="foodMenuGrid grid grid-cols-foodmenu grid-rows-6 gap-8 py-10">
                ${foodItemBlock}
            </div>

            <section class="viewOrdersSubPage bg-white flex justify-evenly items-center w-2/6 rounded-t-3xl fixed bottom-0 hidden">
                <h2 class="text-1xl mx-1">Total n items in the plate</h2>
                <button class="viewOrders text-1xl my-2 border-2 border-lightblack rounded-full px-5 py-2 transition-all bg-lightblack text-white myclass hover:text-lightblack hover:bg-lightyellow hover:border-lightyellow">View Orders</button>
            </section>
        </section>
    `;

    return mainContent;
}
// Getting content from function
const menuPage = makeMenu();

function generateOrderPage({foodOrder}) {
    
}
const aboutPage = ``;



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
        "Food Type": "Drinks",
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



const operator = {
    orders: [],

    onPage: [
        _content__WEBPACK_IMPORTED_MODULE_0__.heroPage,
        _content__WEBPACK_IMPORTED_MODULE_0__.menuPage,
        _content__WEBPACK_IMPORTED_MODULE_0__.aboutPage
    ],

    run(){
        this.cacheDOMElements();
        this.render(_content__WEBPACK_IMPORTED_MODULE_0__.heroPage);
        this.changePage();
    },

    cacheDOMElements(){
        this.main = document.querySelector('main');
        this.navBtns = document.querySelectorAll('nav button');
        this.foodMenu = document.querySelector('.foodMenuGrid');
        this.typeBtns = document.querySelectorAll('.typeBtn');
        this.allOrderBtns = document.querySelectorAll('.placeOrderBtn');
        this.viewOrderSubPage = document.querySelector('.viewOrdersSubPage');
        this.plateItemHead = document.querySelector('.viewOrdersSubPage h2');
        this.viewOrderBtn = document.querySelector('button .viewOrders');
    },

    changePage(){
        this.navBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let idx = +e.target.dataset.page;
                this.render(this.onPage[idx]);
                this.orderPlaceingLogic()
            })
        });
    },

    render(content) {
        (0,_render__WEBPACK_IMPORTED_MODULE_1__.setContent)(this.main, content);

        this.cacheDOMElements()
    },

    foodItemById(id) {
        return _content__WEBPACK_IMPORTED_MODULE_0__.foodList.find(food => food['ID'] === id);
    },

    orderPlaceingLogic() {
        this.allOrderBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let food = this.foodItemById(e.target.id)
                this.orders.push(food);
                this.showViewOrderBtn()
            })
        })
    },

    showViewOrderBtn(){
        if(this.orders.length){
            this.viewOrderSubPage.classList.remove('hidden');
            this.plateItemHead.innerHTML = `There is total ${this.orders.length > 1 ? `${this.orders.length} items`: `${this.orders.length} item`} in your plate.`
        }else {
            this.viewOrderSubPage.classList.add('hidden');
        }
    },

    viewOrderPage() {
        this.viewOrderBtn.addEventListener('click', )
    }
}

operator.run()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxrQkFBa0I7QUFDNUQ7QUFDQSw0Q0FBNEMsYUFBYTtBQUN6RCw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsK0xBQStMLEtBQUssSUFBSSxLQUFLO0FBQzdNLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm1FO0FBQzdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUFRO0FBQ2hCLFFBQVEsOENBQVE7QUFDaEIsUUFBUSwrQ0FBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBUTtBQUM1QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLG1EQUFVO0FBQ2xCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGVBQWUsbURBQWE7QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsNEJBQTRCLG9CQUFvQixXQUFXLG9CQUFvQixPQUFPO0FBQ25KLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnBhZ2UvLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS8uL3NyYy9wcm9kdWN0LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvb2RMaXN0IH0gZnJvbSBcIi4vcHJvZHVjdFwiO1xyXG5cclxuXHJcbi8vIGhlcm8gcGFnZSBjb250ZW50XHJcbmNvbnN0IGhlcm9QYWdlID0gYFxyXG48c2VjdGlvbiBjbGFzcz1cImgtZnVsbCB3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCBweC0xMCBteWNsYXNzXCI+XHJcbiAgICA8aDIgY2xhc3M9XCJ0ZXh0LTh4bFwiPkVhdCBIZWFsdGh5PC9oMj5cclxuICAgIDxoMiBjbGFzcz1cInRleHQtNnhsXCI+JiBTdGF5IEhlYWx0aHk8L2gyPlxyXG4gICAgPGJ1dHRvbiBkYXRhLXBhZ2U9XCIxXCIgY2xhc3M9XCJ0ZXh0LTJ4bCBteS02IGJvcmRlci0yIGJvcmRlci1saWdodGJsYWNrIHJvdW5kZWQtZnVsbCBwLTIgdy0zLzEyIHRyYW5zaXRpb24tYWxsIGJnLWxpZ2h0YmxhY2sgdGV4dC13aGl0ZSBteWNsYXNzIGhvdmVyOnRleHQtbGlnaHRibGFjayBob3ZlcjpiZy1saWdodHllbGxvdyBob3Zlcjpib3JkZXItbGlnaHR5ZWxsb3dcIj5DbGljayB0byBPcmRlciBmb29kPC9idXR0b24+XHJcbjwvc2VjdGlvbj5cclxuYDtcclxuXHJcblxyXG5cclxuLy8gRnVuY3Rpb24gdGhhdCBnZW5lcmF0ZSBjb250ZW50IGJhc2VkIG9uIGlucHV0IGZvciBNZW51IHBhZ2VcclxuZnVuY3Rpb24gbWFrZU1lbnUoKSB7XHJcbiAgICAvLyBDcmVhdGluZyBzZXQgdG8gZXh0cmFjdCB1bmlxdWUgZm9vZCB0eXBlIHZhbHVlXHJcbiAgICBjb25zdCBmb29kVHlwZUxpc3QgPSBuZXcgU2V0KCk7XHJcbiAgICBsZXQgZm9vZEl0ZW1CbG9jayA9ICcnXHJcblxyXG4gICAgZm9vZExpc3QuZm9yRWFjaChmb29kID0+IHtcclxuICAgICAgICBmb29kVHlwZUxpc3QuYWRkKGZvb2RbJ0Zvb2QgVHlwZSddKTtcclxuXHJcbiAgICAgICAgZm9vZEl0ZW1CbG9jayArPSBgXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJmb29kaXRlbSByb3VuZGVkLW1kIHAtM1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL2Zvb2RsaXN0LyR7Zm9vZFsnRklMRSBOQU1FJ119XCIgYWx0PVwiXCIgbG9hZGluZz1cImxhenlcIiBjbGFzcz1cImgtWzI5MHB4XSB3LVsyOTBweF0gbWF4LWgtZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb29kRGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC0yeGwgbXktMlwiPiR7Zm9vZFsnTkFNRSddfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiJHtmb29kWydJRCddfVwiIGNsYXNzPVwicGxhY2VPcmRlckJ0biByb3VuZGVkLWZ1bGwgbXktMiBib3JkZXItMCBob3ZlcjpiZy1saWdodHllbGxvdyBob3Zlcjp0ZXh0LWxpZ2h0YmxhY2sgYWN0aXZlOmJnLWxpZ2h0eWVsbG93IGFjdGl2ZTp0ZXh0LWxpZ2h0YmxhY2sgYmctbGlnaHRncmF5ICBwLTEgcHgtNCB3LWZ1bGxcIj5QbGFjZSBvcmRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgYFxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgYnV0dG9uTGlzdCA9ICc8YnV0dG9uIGNsYXNzPVwibS0xIHR5cGVCdG4gcm91bmRlZCBib3JkZXItMCBob3ZlcjpiZy1saWdodHllbGxvdyBob3Zlcjp0ZXh0LWxpZ2h0YmxhY2sgYWN0aXZlOmJnLWxpZ2h0eWVsbG93IGFjdGl2ZTp0ZXh0LWxpZ2h0YmxhY2sgYmctbGlnaHRncmF5IHAtMSBweC0yXCIgZGF0YS10eXBlPVwiQWxsXCI+QWxsPC9idXR0b24+J1xyXG4gICAgZm9vZFR5cGVMaXN0LmZvckVhY2goZm9vZCA9PiB7XHJcbiAgICAgICAgYnV0dG9uTGlzdCArPSBgPGJ1dHRvbiBjbGFzcz1cIm0tMSB0eXBlQnRuIHJvdW5kZWQgYm9yZGVyLTAgaG92ZXI6YmctbGlnaHR5ZWxsb3cgaG92ZXI6dGV4dC1saWdodGJsYWNrIGFjdGl2ZTpiZy1saWdodHllbGxvdyBhY3RpdmU6dGV4dC1saWdodGJsYWNrIGJnLWxpZ2h0Z3JheSBwLTEgcHgtMlwiIGRhdGEtdHlwZT1cIiR7Zm9vZH1cIj4ke2Zvb2R9PC9idXR0b24+YFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBgXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJoLWZ1bGwgdy0xMS8xMiBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTggYm9yZGVyLWItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC01eGwgZm9udC1ib2xkXCI+TWVudTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudVNlbGVjdGlvbiBmbGV4IGp1c3RpZnktZXZlbmx5IGl0ZW1zLWNlbnRlciBmbGV4LXdyYXAgdy02LzEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtidXR0b25MaXN0fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb29kTWVudUdyaWQgZ3JpZCBncmlkLWNvbHMtZm9vZG1lbnUgZ3JpZC1yb3dzLTYgZ2FwLTggcHktMTBcIj5cclxuICAgICAgICAgICAgICAgICR7Zm9vZEl0ZW1CbG9ja31cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInZpZXdPcmRlcnNTdWJQYWdlIGJnLXdoaXRlIGZsZXgganVzdGlmeS1ldmVubHkgaXRlbXMtY2VudGVyIHctMi82IHJvdW5kZWQtdC0zeGwgZml4ZWQgYm90dG9tLTAgaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LTF4bCBteC0xXCI+VG90YWwgbiBpdGVtcyBpbiB0aGUgcGxhdGU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInZpZXdPcmRlcnMgdGV4dC0xeGwgbXktMiBib3JkZXItMiBib3JkZXItbGlnaHRibGFjayByb3VuZGVkLWZ1bGwgcHgtNSBweS0yIHRyYW5zaXRpb24tYWxsIGJnLWxpZ2h0YmxhY2sgdGV4dC13aGl0ZSBteWNsYXNzIGhvdmVyOnRleHQtbGlnaHRibGFjayBob3ZlcjpiZy1saWdodHllbGxvdyBob3Zlcjpib3JkZXItbGlnaHR5ZWxsb3dcIj5WaWV3IE9yZGVyczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgYDtcclxuXHJcbiAgICByZXR1cm4gbWFpbkNvbnRlbnQ7XHJcbn1cclxuLy8gR2V0dGluZyBjb250ZW50IGZyb20gZnVuY3Rpb25cclxuY29uc3QgbWVudVBhZ2UgPSBtYWtlTWVudSgpO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVPcmRlclBhZ2Uoe2Zvb2RPcmRlcn0pIHtcclxuICAgIFxyXG59XHJcbmNvbnN0IGFib3V0UGFnZSA9IGBgO1xyXG5cclxuZXhwb3J0IHtmb29kTGlzdCwgaGVyb1BhZ2UsIG1lbnVQYWdlLCBhYm91dFBhZ2V9OyIsImNvbnN0IGZvb2RMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIxXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJBbG9vIGJ1dHRlciBwYXJhdGhhLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkFsb28gYnV0dGVyIHBhcmF0aGFcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlJvdGlcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIyXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJCYWNvbiBzYWxhZC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJCYWNvbiBzYWxhZFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU2FsYWRcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIzXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJCbGFja2JlZXJ5IGNvY2t0YWlsLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkJsYWNrYmVlcnkgY29ja3RhaWxcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjRcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkJsdWUgU2hvdC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJCbHVlIFNob3RcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjVcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkJyZWFkIFBha29yZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJCcmVhZCBQYWtvcmVcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNuYWNrc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjZcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkJyb2NjYWxpIFNhbGFkLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkJyb2NjYWxpIFNhbGFkXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTYWxhZFwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjdcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkJ1dHRlciBDaGlja2VuLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkJ1dHRlciBDaGlja2VuXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJOb24tVmVnXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiOFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQnV0dGVyIE11dHRvbi5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJCdXR0ZXIgTXV0dG9uXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJOb24tVmVnXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiOVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQnV0dGVyIE5hYW4uanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQnV0dGVyIE5hYW5cIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlJvdGlcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIxMFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQnV0dGVyIFBhcmF0aGUuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQnV0dGVyIFBhcmF0aGVcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlJvdGlcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIxMVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQnV0dGVyIFJvdGkuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQnV0dGVyIFJvdGlcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlJvdGlcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIxMlwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQ2FzcGVyZSBTYWxhZC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJDYXNwZXJlIFNhbGFkXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTYWxhZFwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjEzXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJDaGlja2VuIEJpcnlhbmkuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQ2hpY2tlbiBCaXJ5YW5pXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJOb24tVmVnXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMTRcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNoaWNrZW4gQ3VycnkuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQ2hpY2tlbiBDdXJyeVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiTm9uLVZlZ1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjE1XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJDaGlja2VuIEtpbmcuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQ2hpY2tlbiBLaW5nXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJOb24tVmVnXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMTZcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNoaWNrZW4gTG9sbGlwb3AuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQ2hpY2tlbiBMb2xsaXBvcFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiTm9uLVZlZ1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjE3XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJDaGlja2VuIE1vbW8uanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQ2hpY2tlbiBNb21vXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTbmFja3NcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIxOFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQ2hpY2tlbiBOb29kbGVzLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkNoaWNrZW4gTm9vZGxlc1wiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiTWVhbFwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjE5XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJDaGlja2VuIFBha29yZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJDaGlja2VuIFBha29yZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU25hY2tzXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMjBcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkNoaWxsZWQgT3JhbmdlIEp1aWNlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkNoaWxsZWQgT3JhbmdlIEp1aWNlXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJEcmlua3NcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIyMVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiQ2hvY2xhdGUgU2hha2UuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiQ2hvY2xhdGUgU2hha2VcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjIyXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJDbGFzc2ljIFJhbWVuLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkNsYXNzaWMgUmFtZW5cIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIk1lYWxcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIyM1wiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiRWdnIFNhbGFkLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkVnZyBTYWxhZFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU2FsYWRcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIyNFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiRnJ1aXQgR3JlZW4gU2FsYWQuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiRnJ1aXQgR3JlZW4gU2FsYWRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMjVcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkZydWl0IFNhbGFkLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkZydWl0IFNhbGFkXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTYWxhZFwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjI2XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJGcnkgTW9tby5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJGcnkgTW9tb1wiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU25hY2tzXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMjdcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkZyeSBSaWNlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkZyeSBSaWNlXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJSaWNlXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMjhcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkdyZWVuIFBha29yZSBTaG90cy5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJHcmVlbiBQYWtvcmUgU2hvdHNcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNuYWNrc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjI5XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJHcmVlbiBQYWtvcmUuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiR3JlZW4gUGFrb3JlXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTbmFja3NcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIzMFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiR3JpbGxlZCBDaGlja2VuLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkdyaWxsZWQgQ2hpY2tlblwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiTm9uLVZlZ1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjMxXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJHcmlsbGVkIG1lYXQuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiR3JpbGxlZCBtZWF0XCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJOb24tVmVnXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMzJcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIkppcmEgUmljZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJKaXJhIFJpY2VcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlJpY2VcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIzM1wiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiTGFyZ2UgQnJlYWtmYXN0LmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIkxhcmdlIEJyZWFrZmFzdFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiTWVhbFwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjM0XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJOYXJ1dG8gUmFtZW4uanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiTmFydXRvIFJhbWVuXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJNZWFsXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMzVcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk1lYXQgRnJ5LmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIk1lYXQgRnJ5XCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJOb24tVmVnXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiMzZcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk1peCBGcnVpdCBTaGFrZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJNaXggRnJ1aXQgU2hha2VcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjM3XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJNaXggTGVtb24gQ29ja3RhaWwuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiTWl4IExlbW9uIENvY2t0YWlsXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJEcmlua3NcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIzOFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiTW9tby5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJNb21vXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTbmFja3NcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCIzOVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiTW9tb3Mgd2l0aCBzcGljeSBzYXVjZSBkaXAuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiTW9tb3Mgd2l0aCBzcGljeSBzYXVjZSBkaXBcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNuYWNrc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjQwXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJNdW5nIERhYWwga2UgcGFrb3JlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIk11bmcgRGFhbCBrZSBwYWtvcmVcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNuYWNrc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjQxXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJNdXR0b24gQmlyeWFuaS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJNdXR0b24gQmlyeWFuaVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiTm9uLVZlZ1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjQyXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJNdXR0b24gQ2hpbGxpIEZyeS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJNdXR0b24gQ2hpbGxpIEZyeVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiTm9uLVZlZ1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjQzXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJNdXR0b24gQ3VycnkuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiTXV0dG9uIEN1cnJ5XCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJOb24tVmVnXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNDRcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk5hYW4gUm90aS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJOYWFuIFJvdGlcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlJvdGlcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI0NVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiTmFhbi5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJOYWFuXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJSb3RpXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNDZcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIk5lYnVsYSBJY2UgU2hvdC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJOZWJ1bGEgSWNlIFNob3RcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjQ3XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJPcmFuZ2UgSnVpY2UuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiT3JhbmdlIEp1aWNlXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJEcmlua3NcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI0OFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiUGFuZWVyIE1hc2FsYS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJQYW5lZXIgTWFzYWxhXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJQYW5lZXJcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI0OVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiUGFuZWVyIFBha29yZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJQYW5lZXIgUGFrb3JlXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJQYW5lZXJcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI1MFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiUGFuZWVyIFRpa2thLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlBhbmVlciBUaWtrYVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiUGFuZWVyXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNTFcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlBhc3RhIFNhbGFkLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlBhc3RhIFNhbGFkXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTYWxhZFwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjUyXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJQYXduIE5vb2RsZXMuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiUGF3biBOb29kbGVzXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJNZWFsXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNTNcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlBvdGF0byBTYWxhZC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJQb3RhdG8gU2FsYWRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNTRcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlBvdGF0byBWZWdnaWUgU2FsYWQuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiUG90YXRvIFZlZ2dpZSBTYWxhZFwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU2FsYWRcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI1NVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiUHVsYW8uanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiUHVsYW9cIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlJpY2VcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI1NlwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiUHlhaiBrZSBwYWtvcmUuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiUHlhaiBrZSBwYWtvcmVcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNuYWNrc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjU3XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJweWF6IHBha29yZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJweWF6IHBha29yZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiU25hY2tzXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNThcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlB5YXogUGFyYXRoZS5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJQeWF6IFBhcmF0aGVcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNuYWNrc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjU5XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJSYWluYm93IFNhbGFkLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlJhaW5ib3cgU2FsYWRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNjBcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlJlZCBCZXJyeSBDb2NrdGFpbC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJSZWQgQmVycnkgQ29ja3RhaWxcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjYxXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJSZWQgT3JhbmdlIFNoYWtlLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlJlZCBPcmFuZ2UgU2hha2VcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjYyXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJTYWhpIFBhbmVlci5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJTYWhpIFBhbmVlclwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiUGFuZWVyXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNjNcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlNwZWdnYXRpLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlNwZWdnYXRpXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJNZWFsXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNjRcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlNwaWN5IE1vbW9zLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlNwaWN5IE1vbW9zXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTbmFja3NcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI2NVwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiU3Byb3V0IFNhbGFkIEJvd2wuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiU3Byb3V0IFNhbGFkIEJvd2xcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNjZcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlNwcm91dCBTYWxhZC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJTcHJvdXQgU2FsYWRcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIlNhbGFkXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNjdcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlN0cmF3YmVycnkgSmFyLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIlN0cmF3YmVycnkgSmFyXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJEcmlua3NcIixcclxuICAgICAgICBcIlFUWVwiOjAsXHJcbiAgICAgICAgXCJpc1NlbGV0ZWRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiSURcIjogXCI2OFwiLFxyXG4gICAgICAgIFwiRklMRSBOQU1FXCI6IFwiVG9tYXRvIENoZXJyeSBTYWxhZC5qcGdcIixcclxuICAgICAgICBcIk5BTUVcIjogXCJUb21hdG8gQ2hlcnJ5IFNhbGFkXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJTYWxhZFwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjY5XCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJWZWcgQmlyYXlhbmkuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiVmVnIEJpcmF5YW5pXCIsXHJcbiAgICAgICAgXCJGb29kIFR5cGVcIjogXCJNZWFsXCIsXHJcbiAgICAgICAgXCJRVFlcIjowLFxyXG4gICAgICAgIFwiaXNTZWxldGVkXCI6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIklEXCI6IFwiNzBcIixcclxuICAgICAgICBcIkZJTEUgTkFNRVwiOiBcIlZlZyBNYWdnaWUuanBnXCIsXHJcbiAgICAgICAgXCJOQU1FXCI6IFwiVmVnIE1hZ2dpZVwiLFxyXG4gICAgICAgIFwiRm9vZCBUeXBlXCI6IFwiTWVhbFwiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJJRFwiOiBcIjcxXCIsXHJcbiAgICAgICAgXCJGSUxFIE5BTUVcIjogXCJXYXRlcm1lbG9uIENvY2t0YWlsLmpwZ1wiLFxyXG4gICAgICAgIFwiTkFNRVwiOiBcIldhdGVybWVsb24gQ29ja3RhaWxcIixcclxuICAgICAgICBcIkZvb2QgVHlwZVwiOiBcIkRyaW5rc1wiLFxyXG4gICAgICAgIFwiUVRZXCI6MCxcclxuICAgICAgICBcImlzU2VsZXRlZFwiOiBmYWxzZSxcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IHsgZm9vZExpc3QgfTsiLCJmdW5jdGlvbiBzZXRDb250ZW50KHBhcmVudEVsZW1lbnQsIGNvbnRlbnQpIHtcclxuICAgIHBhcmVudEVsZW1lbnQuaW5uZXJIVE1MID0gJydcclxuICAgIHBhcmVudEVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcclxufVxyXG5cclxuZXhwb3J0IHtzZXRDb250ZW50fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Zm9vZExpc3QsIGhlcm9QYWdlLCBtZW51UGFnZSwgYWJvdXRQYWdlIH0gZnJvbSBcIi4vY29udGVudFwiO1xyXG5pbXBvcnQgeyBzZXRDb250ZW50IH0gZnJvbSBcIi4vcmVuZGVyXCI7XHJcblxyXG5jb25zdCBvcGVyYXRvciA9IHtcclxuICAgIG9yZGVyczogW10sXHJcblxyXG4gICAgb25QYWdlOiBbXHJcbiAgICAgICAgaGVyb1BhZ2UsXHJcbiAgICAgICAgbWVudVBhZ2UsXHJcbiAgICAgICAgYWJvdXRQYWdlXHJcbiAgICBdLFxyXG5cclxuICAgIHJ1bigpe1xyXG4gICAgICAgIHRoaXMuY2FjaGVET01FbGVtZW50cygpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKGhlcm9QYWdlKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2FjaGVET01FbGVtZW50cygpe1xyXG4gICAgICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgICAgICB0aGlzLm5hdkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5mb29kTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb29kTWVudUdyaWQnKTtcclxuICAgICAgICB0aGlzLnR5cGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnR5cGVCdG4nKTtcclxuICAgICAgICB0aGlzLmFsbE9yZGVyQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZU9yZGVyQnRuJyk7XHJcbiAgICAgICAgdGhpcy52aWV3T3JkZXJTdWJQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXdPcmRlcnNTdWJQYWdlJyk7XHJcbiAgICAgICAgdGhpcy5wbGF0ZUl0ZW1IZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXdPcmRlcnNTdWJQYWdlIGgyJyk7XHJcbiAgICAgICAgdGhpcy52aWV3T3JkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24gLnZpZXdPcmRlcnMnKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2hhbmdlUGFnZSgpe1xyXG4gICAgICAgIHRoaXMubmF2QnRucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWR4ID0gK2UudGFyZ2V0LmRhdGFzZXQucGFnZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKHRoaXMub25QYWdlW2lkeF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlclBsYWNlaW5nTG9naWMoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXIoY29udGVudCkge1xyXG4gICAgICAgIHNldENvbnRlbnQodGhpcy5tYWluLCBjb250ZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYWNoZURPTUVsZW1lbnRzKClcclxuICAgIH0sXHJcblxyXG4gICAgZm9vZEl0ZW1CeUlkKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZvb2RMaXN0LmZpbmQoZm9vZCA9PiBmb29kWydJRCddID09PSBpZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9yZGVyUGxhY2VpbmdMb2dpYygpIHtcclxuICAgICAgICB0aGlzLmFsbE9yZGVyQnRucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9vZCA9IHRoaXMuZm9vZEl0ZW1CeUlkKGUudGFyZ2V0LmlkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcnMucHVzaChmb29kKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZpZXdPcmRlckJ0bigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd1ZpZXdPcmRlckJ0bigpe1xyXG4gICAgICAgIGlmKHRoaXMub3JkZXJzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMudmlld09yZGVyU3ViUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF0ZUl0ZW1IZWFkLmlubmVySFRNTCA9IGBUaGVyZSBpcyB0b3RhbCAke3RoaXMub3JkZXJzLmxlbmd0aCA+IDEgPyBgJHt0aGlzLm9yZGVycy5sZW5ndGh9IGl0ZW1zYDogYCR7dGhpcy5vcmRlcnMubGVuZ3RofSBpdGVtYH0gaW4geW91ciBwbGF0ZS5gXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXdPcmRlclN1YlBhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB2aWV3T3JkZXJQYWdlKCkge1xyXG4gICAgICAgIHRoaXMudmlld09yZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKVxyXG4gICAgfVxyXG59XHJcblxyXG5vcGVyYXRvci5ydW4oKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=