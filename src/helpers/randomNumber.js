export const getRandomArbitrary = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const getArrayOfRandomNumbers = () => {
    const ARRAY_LENGTH = 4
    const numbers = Array.from(Array(ARRAY_LENGTH)).map(x => getRandomArbitrary(0, 250));
    return numbers;
}