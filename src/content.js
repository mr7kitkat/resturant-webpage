const heroPageContent = `
<section>
    <p>Eat Healthy</p>
    <p>& Feel awesome</p>
    <button>Order your delicious meal now</button>
</section>
`;

function makeItemCard(itemList) {
    let h1 = '<h1>Order your food sir...</h1>';
    let content = '';

    const containor = document.createElement('section');
    itemList.forEach(item => {
        content += `
        <section>
            <div><img src="./images/${item.image}" alt="${item.name}"></div>
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <button>Add to order list</button>
        </section>
        `
    });
    containor.innerHTML = content;

    return h1 + containor.outerHTML;
}
export {heroPageContent, makeItemCard}