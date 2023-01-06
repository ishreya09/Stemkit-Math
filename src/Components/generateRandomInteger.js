/* Generates integers between low (inclusive) and high (exclusive) */
function generateRandomInteger(low, high) {
    const lowCeil = Math.ceil(low);
    const highFloor = Math.floor(high);
    const randomFloat = lowCeil + Math.random() * (highFloor - lowCeil);

    return Math.floor(randomFloat);
}

export default generateRandomInteger;