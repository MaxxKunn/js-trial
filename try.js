// soal 3
function calculateDiscount(cart_items, promo_code = "") {
    if(promo_code !== "") {
        total_discount = 0
        for(let i = 0; i < cart_items.length; i++) {
            current = cart_items[i]
            discount = 0
            if(current[2] >= 100000) {
                total = current[1] * current[2]
                discount = total * 0.1
            }
            total_discount += discount
            if (total_discount > 1000000) {
                total_discount = 1000000
            }
        }
        return total_discount
    } else {
        return 0
    }
}

//test 1
let result3 = calculateDiscount([
    ["logitech mouse", 2, 80000],
    ["blutooth speaker", 1, 300000],
    ["samsung galaxy", 1, 9000000],
], "Test")
console.log(result3)

//test 2
let result4 = calculateDiscount([
    ["mouse", 2, 80000],
])
console.log(result4)