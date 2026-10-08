// Question 1: Create a script with a function named lowerCaseWords that takes a mixed array as input. 

function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("Input must be an array");
        } else {
            const result = arr
                .filter(word => typeof word === "string")
                .map(word => word.toLowerCase());

            resolve(result);
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));