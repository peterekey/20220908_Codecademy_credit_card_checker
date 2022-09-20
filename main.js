// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]
const mystery = [mystery1, mystery2, mystery3, mystery4, mystery5];

// Add your functions below:
function validateCred(arr) {

    let arrLength = arr.length;

    let newArr = [arr[arrLength - 1]] // Add the last number, unaltered, to the new array
    // console.log('newArr is currently ' + newArr);

    if (arrLength % 2 === 0) { // If there are an even number of digits
        // console.log('There are ' + arrLength + ' digits in the array, so we\'re doing the even digits calculations');

        for (let i = arrLength - 2; i >= 0; i--) { //Start with the second-last digit
            let thisNum = arr[i]; 
            // console.log(`Considering ${arr[i]} which is at position ${i+1}`);

            if (i % 2 === 0) { // If we're on an even index/uneven position
                // console.log('On an even index/uneven number');
                thisNum *= 2; // Multiply by two
                // console.log('Multiplied by two and number is now ' + thisNum);

                if (thisNum > 9) { // And if the resulting number if more than 9
                    thisNum -= 9; // Subtract 9
                    // console.log('Substracted nine because number is greater than nine, and number is now ' + thisNum);

                    newArr.unshift(thisNum); // Add to the start of the new array
                    // console.log('Added to array, and the array is now ' + newArr);

                } else {
                    newArr.unshift(thisNum); // Otherwise, add the number x 2 to new array
                    // console.log('Number is not greater than nine, so adding to array - ' + newArr);
                }
            } else { // If we're on an even number
                newArr.unshift(thisNum); // Add the number to the start of new array 
                // console.log('On an even number, so added straight to array: ' + newArr)
            }
        }
    } else { // If there are an uneven number of digits
        // console.log('There are ' + arrLength + ' digits in the array, so we\'re doing the uneven digits calculations');

        for (let i = arrLength - 2; i >= 0; i--) { // Start with the second-last digit
            let thisNum = arr[i]
            // console.log(`We're at index ${i}, or position ${i + 1} checking number ${thisNum}`);

            if (i % 2 != 0) { // If we're on an uneven index (but even number)
                // console.log('We\'re on an uneven index/even number')

                thisNum *= 2 // Multiply by two
                // console.log('Multiplied by 2 is ' + thisNum);
                if (thisNum > 9) { // And if the resulting number if more than 9
                    // console.log('The number is bigger than 9, so subtracting 9')
                    thisNum -= 9; // Subtract 9
                    
                    // console.log(`Adding ${thisNum} to the start of the array`)
                    newArr.unshift(thisNum); // Add to the start of the new array
                    // console.log(`Array is now ${newArr}`);
                } else {
                    newArr.unshift(thisNum); // If the number is 9 or less, add the number x 2 to new array
                    // console.log(`${thisNum} is less than 9, so adding straight to array, and it is now ${newArr}`);
                }
            } else { // Or if it's an uneven number
                // console.log(`It's an uneven number, so adding straight array`)
                newArr.unshift(arr[i]); // Add the number to the start of the array.
                // console.log(`Array is now ${newArr}`);
            }
        }
    }

    let sumArr = newArr.reduce((accumulator, currentValue) => accumulator + currentValue);
    // console.log(`Array is ${newArr}`);
    if (sumArr % 10 === 0) {
        return true;
    } else {
        return false;
    }

    return sumArr;
};

function findInvalidCards(nestedArr) {

    // let invalidCards = {};
    let invalidCards = [];

    for (index in nestedArr) {
        let thisArr = nestedArr[index];
        console.log('Currently considering ' + thisArr)

        let result = validateCred(thisArr);
        console.log('The result of the test is ' + result)

        if (result === false) {
            // invalidCards[index] = thisArr;
            invalidCards.push(thisArr);

        }
    }
    console.log(invalidCards);
    return invalidCards;
}

function idInvalidCardCompanies(thisNestedArray) {
    let alertCompanies = [];

    let companies = {
        '3': 'Amex',
        '4': 'Visa',
        '5': 'Mastercard',
        '6': 'Discover'
    };

    for (const index in thisNestedArray) {
        // console.log('Considering ' + thisNestedArray[index]);
        let firstNum = thisNestedArray[index][0];
        // console.log('First number is ' + firstNum);
        let thisCompany = (firstNum in companies) ? companies[firstNum] : console.log('Company not found');

        if (!alertCompanies.includes(thisCompany)) {
            alertCompanies.push(thisCompany)
        }

    }

    return alertCompanies;
}

function convertToArray(str) {
    let cardArr = [];

    for (let i = 0; i < str.length; i++) {
        cardArr.push(parseInt(str[i]));
    }

    return cardArr;
}

const testRemainder = arr => {    
    // console.log(`******** CHECKING THE ARRAY ********`)
    // console.log(`Entering array is ${arr}`)
    // console.log(`Starting array is ${arr}`)
    
    // Reverse the array
    const reversed = arr.reverse();
    // console.log(`Reversed array is ${reversed}`)
    
    // Get a new array
    let newArr = [];
    // console.log(`The new array is currently empty`)

    // Add the first number of the reversed array to my new array
    newArr.push(reversed[0]);
    // console.log(`Added first number, so newArr is currently ${newArr}`)

    // And then from the second number onwards
    for (let i = 1; i < arr.length; i++) {
    // console.log(`At second or later number`);

        // If the index is uneven (i.e. index 1/position 2, index 3/position 4, ...)
        if (i % 2 != 0) {
            // console.log(`At uneven index numbers`)

            // Multiply the number by two and if it's less than 9...
            if (reversed[i] * 2 > 9) {
                // console.log(`${reversed[i]} x 2 is more than 9, so subtracting 9 and then adding to array`)
                // Add the number x 2 - 9 to the new array
                newArr.push(reversed[i] * 2 - 9);
                // console.log(`Array now ${newArr}`);
            // Otherwise only add the number x 2
            } else { 
                newArr.push(reversed[i] * 2);
                // console.log(`Adding ${reversed[i]} x 2, array is now ${newArr}`);
            }
        
            // And if the index is even (index 2/position 3, index 4/position 5)
        } else {

            // Add the number directly to the new array
            newArr.push(reversed[i]);
            // console.log(`Adding number directly, array is now ${newArr}`);
        }
    }

    let newArrSum = newArr.reduce((accumulator, currentValue) => accumulator + currentValue);
    // console.log(`The sum of each number is ${newArrSum}`);
    // console.log(`Remainder is ${newArrSum % 10} - returning this`);
    
    arr.reverse();
    // console.log(`Leaving array is ${arr}`)
    // console.log(`******** LEAVING CHECK - returning ${newArrSum % 10} ********`)
    return newArrSum % 10;
}

function makeValidNumber(nestedArr){

    // Go through each array in the nested array
    for (const index in nestedArr) {
        // console.log(`Checking the ${index} array in the nestedArr`);

        const currentArr = nestedArr[index];

        // console.log(`Array I'm checking is ${currentArr}`);

        // Get the remainder
        let theRemainder = testRemainder(currentArr);
        
        // console.log(`Starting remainder is currently ${theRemainder}`)
        // console.log(`The array is currently ${currentArr}`);
        let i = 0;
        // console.log(`Starting position is ${i}`);
        // While the remainder isn't 0
        while (theRemainder % 10 != 0) {
            
            // Start at index 0
            
            // console.log(`Checking position ${i} of ${currentArr}, which has number ${currentArr[i]}`);
            
            // And if the number is less than 9
            if (currentArr[i] < 9) {

                // Add 1
                currentArr[i] += 1;
                // console.log(`Added 1, and now array index ${i} number is ${currentArr[i]}`);
                // console.log(`Array is currently ${currentArr}`)
                i += 1;
                // console.log(`Position we're up to now is ${i}`)
            } else {
                i += 1;
            }

            // And test the array again
            // console.log('Checking array...')
            theRemainder = testRemainder(currentArr);
            // console.log(`Remainder is now ` + theRemainder);

        }

        // Replace old numbers with new numbers
        // console.log(`Index is ${index}, and nested array is ${nestedArr[index]}`);
        // console.log(`Inserting ${currentArr} at ${index}`);
        nestedArr[index] = currentArr;

        // console.log('New values are: ' + currentArr)

    }

    return nestedArr
}


/////////// If you want to test one card:
// const numberToTest = '5939694929290969';
// const convertedNumber = convertToArray(numberToTest);
// console.log('The converted number is ' + validateCred(convertedNumber));

// const nestedArray = [];
// nestedArray[0] = convertedNumber;
// console.log('The nested array is ' + nestedArray);

// const invalidCards = findInvalidCards(nestedArray);
// console.log('The invalid cards belong to ' + idInvalidCardCompanies(invalidCards));

// console.log(makeValidNumber(invalidCards));

/////////// Checking my function because SOMETHING WEIRD IS HAPPENING
// console.log(testRemainder([5,9,3,9,6,9,4,9,2,9,2,9,0,9,6,9]))


/////////// If you want to test a nested array
console.log(batch);
validateCred(batch);
const invalidCards = findInvalidCards(batch);
console.log(`${JSON.stringify(findInvalidCards(invalidCards))} is invalid`);
console.log('The invalid cards belong to ' + idInvalidCardCompanies(invalidCards));

console.log(`${JSON.stringify(makeValidNumber(invalidCards))}`);