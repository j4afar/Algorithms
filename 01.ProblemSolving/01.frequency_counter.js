// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.


// ******************************* Naïve Solution O(N^2) *******************************

function same(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        } else {
            arr2.splice(correctIndex, 1)
        }
    }
    return true
}

// // ******************************* Optimized Solution O(3N) *******************************

function same(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false
    }
    arr1Frequency = {}
    arr2Frequency = {}

    //fill the first array with its freq
    for (let i = 0; i < arr1.length; i++) {
        if (!arr1Frequency[arr1[i]]) {
            arr1Frequency[arr1[i]] = 1
        } else {
            arr1Frequency[arr1[i]] += 1
        }
    }

    //fill the second array with its freq
    for (let i = 0; i < arr2.length; i++) {
        if (!arr2Frequency[arr2[i]]) {
            arr2Frequency[arr2[i]] = 1
        } else {
            arr2Frequency[arr2[i]] += 1
        }
    }

    // Check if each element in the first object exists with the same frequency in the second
    for (element in arr1Frequency) {
        if (arr1Frequency[element] != arr2Frequency[element ** 2]) {
            return false
        }
    }
    return true

}

arr1 = [1, 2, 3, 2]
arr2 = [9, 4, 1, 4]
console.log(same(arr1, arr2))