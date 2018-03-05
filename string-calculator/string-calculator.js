function add(numbers) {
    let negativeNumbers = [];

    if (numbers === '') {
        return 0;
    }

    let list = numbers.split(/[\n,]+/);
    let result = list.reduce((acc, curr) => {
        if (curr < 0) return negativeNumbers.push(curr);
        if (curr <= 1000) acc += Number(curr);
        return acc;
    }, 0);

    if (negativeNumbers.length) {
        let message = `negatives not allowed : ${negativeNumbers.join(', ')}`;
        throw new Error(message);
    }
    
    return result;
}

module.exports = {
    add
};