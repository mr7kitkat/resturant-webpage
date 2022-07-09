/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(function(){
    const myresturent = {
        main: document.querySelector('main'),

        foodItems: [],

        order: [],

        onPage: 1,

        innerContent(){
            if(this.onPage === 1){
                this.mainContent = `
                <section>
                    <p>Eat Healthy</p>
                    <p>& Feel awesome</p>
                    <button>Order your delicious meal now</button>
                </section>
                `
            }
            else if (this.onPage === 2){
                this.mainContent = `
                
                `
            }
        },

        setContent(parentElem, innerContent) {
            parentElem.innerHTML = innerContent;
        }
        
    }

    myresturent.setContent()
})
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2VicGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG15cmVzdHVyZW50ID0ge1xyXG4gICAgICAgIG1haW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSxcclxuXHJcbiAgICAgICAgZm9vZEl0ZW1zOiBbXSxcclxuXHJcbiAgICAgICAgb3JkZXI6IFtdLFxyXG5cclxuICAgICAgICBvblBhZ2U6IDEsXHJcblxyXG4gICAgICAgIGlubmVyQ29udGVudCgpe1xyXG4gICAgICAgICAgICBpZih0aGlzLm9uUGFnZSA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250ZW50ID0gYFxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RWF0IEhlYWx0aHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JiBGZWVsIGF3ZXNvbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5PcmRlciB5b3VyIGRlbGljaW91cyBtZWFsIG5vdzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMub25QYWdlID09PSAyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNvbnRlbnQgPSBgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldENvbnRlbnQocGFyZW50RWxlbSwgaW5uZXJDb250ZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudEVsZW0uaW5uZXJIVE1MID0gaW5uZXJDb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBteXJlc3R1cmVudC5zZXRDb250ZW50KClcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=