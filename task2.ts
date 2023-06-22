interface ITotalPrice {
    price: number,
    discount: number,
    isInstallment: boolean,
    months: number
}
const totalPrice = ({ price, discount, isInstallment, months }: ITotalPrice): number => {
    const discountSum: number = (price * discount)/100;
    const totalSum: number = price - discountSum

    if(isInstallment) {
        return totalSum / months
    }

    return totalSum
};

console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));