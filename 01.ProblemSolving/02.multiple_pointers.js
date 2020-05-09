// Write a function called sumZero which accepts a sorted array of integers.
// The func should find the first pair where the sum is 0. Return an Array that includes both values that sum to zero o undefined if a pair does not exists


// ******************************* Naïve Solution O(N^2) *******************************

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] == - 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}

let result = sumZero([-4, -3, -1, 0, 1, 3, 4])
console.log(result)

// ******************************* Optimized Solution O(N) *******************************

function sumZero(arr) {
    let i = 0
    let j = arr.length - 1
    while (j > 0 && i < arr.length) {
        if (arr[i] + arr[j] === 0) {
            return [arr[i], arr[j]]
        } else if (arr[i] + arr[j] > 0) {
            j--
        } else {
            i++
        }
    }
}

let result = sumZero([0, 1, 3, 4])
console.log(result)