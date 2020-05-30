// Write a func called maxSubArraySum which accepts an array of integers and a number called n.
// The func should calc the maximum sum of n consecutive elements in the array.

// ******************************* Naïve Solution O(N^2) *******************************
// function maxSubArraySum(arr, num) {
//     max = -Infinity
//     for (let i = 0; i < arr.length; i++) {
//         let temp = 0, count = 0
//         for (let j = i; count < num; j++) {
//             temp += arr[j]
//             if (temp > max) {
//                 max = temp
//             }
//             count++
//         }
//     }
//     return max 
// }
// arr = [1, 3, 5, 1, 3, 5, 2]
// result = maxSubArraySum(arr, 3)
// console.log(result)

// ******************************* Optimized solution O(N) *******************************
function maxSubArraySum(arr, num) {
    let max = -Infinity
    let temp = 0

    for (let i = 0; i < num; i++) {
        temp += arr[i]
    }

    max = temp

    for (let i = 1; i <= arr.length - num; i++) {
        operation = (temp - arr[i - 1]) + arr[(i + num) - 1]
        temp = operation
        max = Math.max(temp, max)
    }

    return max
}
let arr = [1, 3, 5, 5, 5, 1, 12, 3, 12, 100]
r = maxSubArraySum(arr, 3)
console.log(r)