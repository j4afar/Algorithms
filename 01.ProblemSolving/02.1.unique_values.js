// Implement a function called countUniqueValues, which acceptes a sorted array, and cout the unique values in the Array.
// There can be negative numbers in the arram but it always sorted.

function countUniqueValues(arr) {
    let unique = 0
    if (arr.length == 0) {
        return unique
    }
    let j = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[j]) {
            j++
        } else {
            unique += 1
            j++
        }
    }
    return unique
}
r = countUniqueValues([-1, -1, -1, 0, 2, 4])
console.log(r)
