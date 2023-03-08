export function calculateSalesTax(subtotal, taxRate) {
    return Number((subtotal * taxRate).toFixed(2));
}

export function factorial(num) {
    return (num < 2) ? 1 : num * factorial(num - 1)
}