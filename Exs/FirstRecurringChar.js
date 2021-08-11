// Google Question
// Given an array = [2,3,5,6,2,1,0]
// It should return 2

// Given an array = [2,3,4,5,1]
// It should return undefined

function firstReccuringChar(arr){
    obj = {}
    for (let i = 0; i<arr.length; i++){
        if (arr[i] in obj) {
            return arr[i];
        }
        obj[arr[i]] = 1;
    }
    return undefined;
}

arr = [2,3,5,6,0,1,0];
console.log(firstReccuringChar(arr));

