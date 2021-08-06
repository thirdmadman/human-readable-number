function numbersToStrings(el, i, array) {
    let numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let numbersTenths = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let nembersTH = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let degreeNames = ["hundred", "thousand"];
    let cI = i % 3;
    let dN = (i - cI) / 3;

    if (array.length === 1) {
        return numbers[el];
    }

    if (cI === 0) {
        if (array[i + 1] == 0 || array[i + 1] >= 2) {
            if (el !== 0) {
                if (dN > 0) {
                    return numbers[el] + " " + degreeNames[dN];
                } else {
                    return numbers[el];
                }
            } else {
                if (dN > 0) {
                    return degreeNames[dN];
                }
            }
        }
    } else if (cI === 1) {
        if (el === 1 && array[i - 1] > 0) {
            return nembersTH[array[i - 1] - 1];
        } else {
            return numbersTenths[el - 1];
        }
    } else if (cI === 2) {
        if (dN == 0) {
            return numbers[el] + " " + degreeNames[dN];
        }
        return numbers[el];
    }
}

module.exports = function toReadable(number) {
    return Array.from(String(number), Number)
        .reverse()
        .map(numbersToStrings)
        .reverse()
        .filter((el) => el != null)
        .join(" ");
};
