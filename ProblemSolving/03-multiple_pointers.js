/* 
        ************************************************************************************************
        Creating pointers or values that correspond to an index or position 
        and move towards the beginning, end or middle based on a certain condition
        Very efficient for solving problems with minimal space complexity as well
        ************************************************************************************************

        Exercice:
        Write a function called sumZero which accepts a sorted array of integers. 
        The function should find the first pair where the sum is 0. 
        Return an array that includes both values that sum to zero or undefined if a pair does not exist

*/

function sumZero(arr) {
    var firstPointer = 0
    var lastPointer = arr.length - 1
    for (let i = 0; i<arr.length; i++){
        if (firstPointer === lastPointer)
            return undefined
        if (arr[firstPointer] + arr[lastPointer] === 0)
            return [arr[firstPointer],arr[lastPointer]]
        else if (arr[firstPointer] + arr[lastPointer] > 0)
            lastPointer = lastPointer - 1
        else if (arr[firstPointer] + arr[lastPointer] < 0)
            firstPointer = firstPointer + 1
    }   
}

let tab= [-10,-4,-2,0,1,2,5]
console.log(sumZero(tab))

