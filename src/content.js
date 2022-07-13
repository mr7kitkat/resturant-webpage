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
export {heroPageContent, makeItemCard}