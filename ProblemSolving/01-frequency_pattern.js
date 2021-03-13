/* 
        ************************************************************************************************
        This pattern use object or set to collect frequencies of values
        This can often used to avoid O(N^2) with arrays / strings
        ************************************************************************************************

        Exercice:
        Write a function called same() accept two arrays return
        Return true if each value in first array has its corresponding 
        Squared in the second array. The frequency must be the same

*/

//  ---------------- Native Solution  ---------------- //

function same(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false
    }
    for (i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(Math.pow(arr1[i], 2))
        if (correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1);
    }
    return true
}

//  ---------------- Optimized Solution  ---------------- //
function sameOptimized(arr1, arr2) {

    if (arr1.length != arr2.length) 
        return false
    
    let arr1Object = {}
    let arr2Object = {}
    
    for ( let i = 0; i < arr1.length ; i++){
        if (arr1Object.hasOwnProperty(arr1[i] * arr1[i])) 
            arr1Object[arr1[i] * arr1[i]] += 1
        else 
            arr1Object[arr1[i] * arr1[i]] = 1
        
    }
    for ( let i = 0; i < arr2.length ; i++){
        if (arr2Object.hasOwnProperty(arr2[i])) 
            arr2Object[arr2[i]] += 1
        else 
            arr2Object[arr2[i]] = 1
    }

    for (let i = 0; i < arr1.length; i++){
        if (arr1Object[arr1[i]] != arr2Object[arr1[i]]) 
            return false
    }
    return true
}

arr1 = [5,1,2,3,4,5,5]
arr2 = [1,16,25,9,4,25,25]

console.log(sameOptimized(arr1, arr2))