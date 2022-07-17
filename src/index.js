import { heroPage } from "./content";
import { setContent } from "./render";

const operator = {
    onPage: 1,
    cacheDOMElements(){
        this.main = document.querySelector('main');
    },
    render() {
        this.cacheDOMElements();

        if (this.onPage = 1) {
            this.content = heroPage;
        }else {
            this.content = ''
        }

        setContent(this.main, this.content);
    }
}

operator.render()
