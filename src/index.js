import { heroPageContent, makeItemCard } from "./content";
import { setContent } from "./render";
import { foodList } from "./product";


const main = document.querySelector('main');
const content = makeItemCard(foodList);
setContent(main, content)