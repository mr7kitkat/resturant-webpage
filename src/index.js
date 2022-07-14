import { heroPageContent, makeItemCard, finalOrderPage, prepareOrderList } from "./content";
import { setContent } from "./render";
import { foodList } from "./product";


const main = document.querySelector('main');
const content = makeItemCard(foodList, 'Order your food sir...','./images/foodlist','Add to plate');
setContent(main, content)


// Track all the order button clicking
const orderBtn = document.querySelectorAll('button.itembtn');
orderBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const checkIdx = (item) => {
            return +item["ID"] === +e.target.dataset.item;
        }

        let idx = foodList.findIndex(checkIdx);
        foodList[idx].isSeleted = true;
        foodList[idx]["QTY"] += 1;
        showHideOrderPopup();
    })
})

// check for orderList
function showHideOrderPopup() {
    const orderpopup = document.querySelector('.orderPlatePopup');
    let test = foodList.some(item => item.isSeleted);
    if (test) {
        orderpopup.classList.remove('hidden');
    }else {
        orderpopup.classList.add('hidden');
    }
}


const viewOrderBtn = document.querySelector("button.popupbtn");
viewOrderBtn.addEventListener("click", function() {
    let content = finalOrderPage;
    setContent(main, content);

    const orderList = foodList.filter(food => food.isSeleted);
    const orderItems = prepareOrderList(orderList);
    const orderedList = document.querySelector('.orderedList');
    setContent(orderedList, orderItems);
})
