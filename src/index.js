import {foodList, heroPage, menuPage, aboutPage } from "./content";
import { setContent } from "./render";

const operator = {
    orders: [],

    onPage: [
        heroPage,
        menuPage,
        aboutPage
    ],

    run(){
        this.cacheDOMElements();
        this.render(heroPage);
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
        setContent(this.main, content);

        this.cacheDOMElements()
    },

    foodItemById(id) {
        return foodList.find(food => food['ID'] === id);
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
