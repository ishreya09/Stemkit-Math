// program to generate random prime numbers

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function generatePrime() {
    let num = Math.floor(Math.random() * 100);
    if (isPrime(num)) {
        return num;
    } else {
        return generatePrime();
    }
}

export default generatePrime;