export const getRandomArbitrary = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const getArrayOfRandomNumbers = (max) => {
    const ARRAY_LENGTH = 4
    const numbers = Array.from(Array(ARRAY_LENGTH)).map(x => getRandomArbitrary(0, max));
    return numbers;
}