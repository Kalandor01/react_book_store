
class BasketModel {

    #basket = [];

    constructor(basketList) {
        this.#basket = basketList;
    }

    getBasket() {
        return this.#basket;
    }

    getAmount() {
        let amount = 0;
        this.#basket.forEach(item => {
            amount += item.amount;
        });
        return amount;
    }

    getTotalPrice() {
        let tPrice = 0;
        this.#basket.forEach(item => {
            tPrice += item.price * item.amount;
        });
        return tPrice;
    }

    findItem(id) {
        let itemNum = 0
        while (itemNum < this.#basket.length && this.#basket[itemNum].id !== id) {
            itemNum++;
        }
        if (this.#basket.length === itemNum) {
            return false;
        }
        else {
            return itemNum
        }
    }

    addItem(data) {
        console.log("buy " + data.title);
        
        let itemIndex = this.findItem(data.id);
        if (itemIndex === false) {
            data.amount = 1;
            this.#basket.push(data);
        }
        else {
            this.#basket[itemIndex].amount++;
        }
    }

    removeItem(data) {
        console.log("unbuy " + data.title);
        
        let itemIndex = this.findItem(data.id);
        if (itemIndex !== false) {
            if (this.#basket[itemIndex].amount > 1) {
                this.#basket[itemIndex].amount--;
            }
            else {
                this.#basket.splice(itemIndex, 1);
            }
        }
    }

    removeAllItem(data) {
        console.log("unbuy all " + data.title);
        
        let itemIndex = this.findItem(data.id);
        if (itemIndex !== false) {
            this.#basket.splice(itemIndex, 1);
        }
    }
}

export default BasketModel;
