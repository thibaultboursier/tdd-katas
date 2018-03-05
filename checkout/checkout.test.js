let Checkout = require('./checkout');
let products = require('./mocks/products.json');

describe('Checkout', () => {
    let checkout;

    beforeEach(() => {
        checkout = new Checkout();
        checkout.addProductList(products);
    });

    it('should return product list', () => {
        expect(checkout.getProductList()).toBe(products);
    });

    it('should give price for specific item', () => {
        expect(checkout.getPriceForProduct('B')).toBe(30);
    });

    it('should give total price for one item scanned', () => {
        checkout.scan('A');
        expect(checkout.getTotalPrice()).toBe(50);
    });

    it('should give total price for many item scanned', () => {
        checkout
            .scan('A')
            .scan('B')
            .scan('C');
        expect(checkout.getTotalPrice()).toBe(145);
    });

    it('should undo last scan operation', () => {
        checkout
            .scan('A')
            .scan('B')
            .scan('C');
        checkout.cancel();
        expect(checkout.getTotalPrice()).toBe(80);
    });
});