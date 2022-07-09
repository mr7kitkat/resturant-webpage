(function(){
    const myresturent = {
        main: document.querySelector('main'),

        foodItems: [],

        order: [],

        onPage: 1,

        innerContent(){
            let content = ''
            if(this.onPage === 1){
                content = `
                <section>
                    <p>Eat Healthy</p>
                    <p>& Feel awesome</p>
                    <button>Order your delicious meal now</button>
                </section>
                `
            }
            else if (this.onPage === 2){
                content = `
                <h1>Choose your order</h1>
                `

                const foodList = document.createElement('section');
                foodList.classList.add('foodList');
                
                let temp = ''
                this.foodItems.forEach(food => {
                    temp += `
                    <section class="foodItem">
                        <div>
                            <img src="./images/${food.img}" alt="${food.foodName}">
                        </div>
                        <h2>${food.foodName}</h2>
                        <p>${food.foodDescription}</p>
                    </section>
                    `
                })

                foodList.innerHTML = temp;
                content += foodList.innerHTML;
            }

            return content;
        },

        mainContent: this.innerContent(),

        setContent(parentElem, innerContent) {
            parentElem.innerHTML = innerContent;
        }
        
    }

    myresturent.setContent()
})