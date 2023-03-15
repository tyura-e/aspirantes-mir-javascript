let totalValue = 0
function sum(x) {
for (let n = 1; n<= x; n++) {
    totalValue = totalValue + n;
    }
    return totalValue;
}

// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120