class Checkout{
    constructor() {
        this.products = [];
    }

    addProductList(products) {
        this.productList = products;
    }

    cancel() {
        this.products.pop();
    }

    getPriceForProduct(productCode) {
        return this.productList[productCode].price;
    }

    getProductList() {
        return this.productList;
    }

    getTotalPrice() {
        return this.products.reduce((acc, curr) => {
            return acc + curr.price;
        }, 0);
    }

    applySpecialPrice(product) {

    }

    scan(productCode) {
        const product = this.productList[productCode];

        product.code = productCode;

        this.products.push(product);

        return this;
    }
}

module.exports = Checkout;