function difference(elteres, num) {
    let asd = [];
    for (let i = 0; i < num.length - 1; i++) {
        if (num[i] - num[i - 1] <= elteres && num[i] - num[i - 1] >= -elteres && num[i] - num[i + 1] <= elteres && num[i] - num[i + 1] >= -elteres) {
            asd.push(num[i]);
        }
    }
    return asd;
}

const elteres = 2;
const nums = [1, 2, 3, 4, 5, 6, 3, 6, 5, 4]
console.log(difference(elteres, nums))