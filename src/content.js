import { foodList } from "./product";


// hero page content
const heroPage = `
<section class="h-full w-full flex flex-col justify-center items-start px-10 myclass">
    <h2 class="text-8xl">Eat Healthy</h2>
    <h2 class="text-6xl">& Stay Healthy</h2>
    <button data-page="1" class="navBtns text-2xl my-6 border-2 border-lightblack rounded-full p-2 w-3/12 transition-all bg-lightblack text-white myclass hover:text-lightblack hover:bg-lightyellow hover:border-lightyellow">Click to Order food</button>
</section>
`;



// Function that generate content based on input for Menu page
function makeMenu() {
    // Creating set to extract unique food type value
    const foodTypeList = new Set();
    let foodItemBlock = ''

    foodList.forEach(food => {
        foodTypeList.add(food['Food Type']);

        foodItemBlock += `
        <section class="fooditem rounded-md p-3" data-type="${food['Food Type']}">
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

function generateOrderPage(foodOrder) {
    const returnContent = `
    <section class="max-w-[600px] h-screen  border-2 border-r-2 mx-auto rounsded-2xl grid grid-rows-6 items-center">
        <div class="head w-full flex justify-between items-center px-5 py-2 my-1">
            <h2 class="text-3xl font-bold">Your Orders</h2>
            <button class="navBtns" data-page="1">
                <img src="./images/close.png" alt="" class="w-10">
            </button>
        </div>

        <div class="w-5/6 max-h-full grid grid-cols-[1fr 3fr 1fr] row-span-4 self-start justify-self-center overflow-y-scroll finalOrderContainor">

            ${foodOrder}

        </div>

        <button class="placeOrderBtn self-center justify-self-center text-2xl my-2 border-2 h-1/2 border-lightblack rounded-full px-5 py-1 w-5/6 transition-all bg-lightblack text-white hover:text-lightblack hover:bg-lightyellow hover:border-lightyellow">Submit Order</button>

        
    </section>

    <div class="bg-green text-white box-border p-5 h-2/6 w-full flex flex-col items-center justify-evenly transition absolute top-1/3 hidden successmsg">
        <h2 class="text-8xl">Thank you for order</h2>
        <p class="text-2xl">Your food will be served within 10 minutes, be patient.</p>
    </div>

    `
    return returnContent;
}

const aboutPage = ``;

export { heroPage, menuPage, aboutPage, generateOrderPage};