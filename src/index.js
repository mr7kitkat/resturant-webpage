import { heroPageContent, makeItemCard } from "./content";
import { setContent } from "./render";
import { foodList } from "./product";


const main = document.querySelector('main');
const content = makeItemCard(foodList, 'Order your food sir...','Add to plate');
setContent(main, content)


const orderList = [    {
    "ID": "60",
    "FILE NAME": "Red Berry Cocktail.jpg",
    "NAME": "Red Berry Cocktail",
    "Food Type": "Drinks"
},
{
    "ID": "61",
    "FILE NAME": "Red Orange Shake.jpg",
    "NAME": "Red Orange Shake",
    "Food Type": "Drinks"
},
{
    "ID": "62",
    "FILE NAME": "Sahi Paneer.jpg",
    "NAME": "Sahi Paneer",
    "Food Type": "Paneer"
},
{
    "ID": "63",
    "FILE NAME": "Speggati.jpg",
    "NAME": "Speggati",
    "Food Type": "Meal"
},
{
    "ID": "64",
    "FILE NAME": "Spicy Momos.jpg",
    "NAME": "Spicy Momos",
    "Food Type": "Snacks"
},
{
    "ID": "65",
    "FILE NAME": "Sprout Salad Bowl.jpg",
    "NAME": "Sprout Salad Bowl",
    "Food Type": "Salad"
},
{
    "ID": "66",
    "FILE NAME": "Sprout Salad.jpg",
    "NAME": "Sprout Salad",
    "Food Type": "Salad"
},
{
    "ID": "67",
    "FILE NAME": "Strawberry Jar.jpg",
    "NAME": "Strawberry Jar",
    "Food Type": "Drinks"
},
{
    "ID": "68",
    "FILE NAME": "Tomato Cherry Salad.jpg",
    "NAME": "Tomato Cherry Salad",
    "Food Type": "Salad"
},
{
    "ID": "69",
    "FILE NAME": "Veg Birayani.jpg",
    "NAME": "Veg Birayani",
    "Food Type": "Meal"
},
{
    "ID": "70",
    "FILE NAME": "Veg Maggie.jpg",
    "NAME": "Veg Maggie",
    "Food Type": "Meal"
},
{
    "ID": "71",
    "FILE NAME": "Watermelon Cocktail.jpg",
    "NAME": "Watermelon Cocktail",
    "Food Type": "Drinks"
}];

// Track all the order button clicking
const orderBtn = document.querySelectorAll('button.itembtn');
orderBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let food = foodList.filter(item => {
            return item["ID"] === e.target.dataset.item;
        })
        orderList.push(food);
    })
})