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

export {heroPageContent, makeItemCard, finalOrderPage, prepareOrderList}