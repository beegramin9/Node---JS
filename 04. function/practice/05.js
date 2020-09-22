let palindrome = []

for (let i = 100; i < 1000; i++) {
    for (let k = 100; k < 1000; k++) {
        let newNum = i * k;
        newNum = newNum.toString()
        if (newNum === newNum.split("").reverse().join("")) {
            palindrome.push(newNum)
        }
    }
}

console.log(palindrome)