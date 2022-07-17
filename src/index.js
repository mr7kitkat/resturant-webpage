import { foodList } from "./product";
import { heroPage, menuPage, aboutPage, generateOrderPage } from "./content";
import { setContent } from "./render";

const operator = {
    orders: 0,

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
        this.navBtns = document.querySelectorAll('.navBtns');
        this.foodMenu = document.querySelector('.foodMenuGrid');
        this.typeBtns = document.querySelectorAll('.typeBtn');
        this.allOrderBtns = document.querySelectorAll('.placeOrderBtn');
        this.viewOrderSubPage = document.querySelector('.viewOrdersSubPage');
        this.plateItemHead = document.querySelector('.viewOrdersSubPage h2');
        this.viewOrderBtn = document.querySelector('.viewOrders');
        this.removeItemBtns = document.querySelectorAll('.removeItem');
        this.placeOrderBtn = document.querySelector('.placeOrderBtn');
        this.successMsgBox = document.querySelector('.successmsg');
        this.foodItems = document.querySelectorAll('.fooditem');
    },

    changePage(){
        this.navBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let idx = +e.target.dataset.page;              
                this.render(this.onPage[idx]);
                if(idx === 1) {
                    this.filterItems()
                }
                this.orderPlaceingLogic()
            })
        });
    },

    render(content) {
        setContent(this.main, content);
        this.cacheDOMElements()
    },

    filterItems() {
        this.typeBtns.forEach(type => {
            type.addEventListener('click', (e) => {
                this.hideFoodItems(e.target.dataset.type);
            })
        }) 
    },

    hideFoodItems(input) {
        if(input === 'All'){
            this.foodItems.forEach(food => food.classList.remove('hidden'));
            return;
        }
        this.foodItems.forEach(food => food.classList.remove('hidden'));
        this.foodItems.forEach(food => {
            if(food.dataset.type !== input) {
                food.classList.add('hidden');
            }
        })
    },

    orderPlaceingLogic() {
        this.allOrderBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = foodList.findIndex(food => +food['ID'] === +e.target.id);
                foodList[idx]['isSeleted'] = true;
                foodList[idx]['QTY']+=1;
                this.orders++
                this.showViewOrderBtn()
            })
        })
    },

    showViewOrderBtn(){
        if(this.orders){
            this.viewOrderSubPage.classList.remove('hidden');
            this.plateItemHead.innerHTML = `There is total ${this.orders > 1 ? `${this.orders} items`: `${this.orders} item`} in your plate.`
        }else {
            this.viewOrderSubPage.classList.add('hidden');
        }

        this.viewOrderBtn.addEventListener('click', () => {
            const orderPage = this.parserFinalOrders();
            this.render(orderPage);
            this.cacheDOMElements()
            this.showSuccess()
        });
    },

    parserFinalOrders() {
        let content = ''
        foodList.filter(food => food['isSeleted']).forEach((food, idx) => {
            content += `
            <div class="orderItem h-24 w-full p-1 flex border-2">
                <img src="./images/foodlist/${food['FILE NAME']}" alt="" class="h-20 max-h-full w-20 object-cover object-center mx-4">
                <div class="w-4/6 orderDetails flex flex-col justify-evenly items-start">
                    <h3 class="text-2xl">${food['NAME']}</h3>
                    <div class="quantity flex justify-evenly items-center w-5/6">
                        <span>Quantity: </span>
                        <input type="number" name="qty" value="1" min="1" max="100" class="text-2xl text-center border-b-2 py-0 w-16">
                        <span>glasses/plates</span>
                    </div>
                </div>

                <img src="./images/close.png" data-idx="${idx}" alt="" class="w-8 h-8 translate-y-1/2 removeItem">
            </div>
            `
        });

        const finalContent = generateOrderPage(content);
        return finalContent;
    },


    showSuccess() {
        this.placeOrderBtn.addEventListener('click', () => {
            this.successMsgBox.classList.remove('hidden');
        })
    }
}

operator.run()
