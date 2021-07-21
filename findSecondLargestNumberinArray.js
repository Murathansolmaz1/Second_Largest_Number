'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let max = nums[0];
    let i = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    let nums2 = []

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != max) {
            nums2.push(nums[j]);
        }
    }
    let SecondMax = nums2[0];

    for (i = 0; i < nums2.length; i++) {
        if (nums2[i] > SecondMax) {
            SecondMax = nums2[i];
        }
    }
    return SecondMax;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);

    console.log(getSecondLargest(nums));
}