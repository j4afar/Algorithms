// `Given arr1 [1,3,4,10] arr2 [0,3,10,12,20]

function mergeSortedArrays(arr1, arr2){
    
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0 ) {
        return arr1;
    }

    newArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length){
        if (arr1[i] > arr2[j]) {
            newArray.push(arr2[j]);
            j++;
        }else if (arr1[i] < arr2[j]) {
            newArray.push(arr1[i]);
            i++;
        } else {
            newArray.push(arr1[i]);
            newArray.push(arr2[j]);
            j++;
            i++;
        }
    } 

    for (let k = i; k<arr1.length; k++){
        newArray.push(arr1[k]);
    }

    for (let k = j; k<arr2.length; k++){
        newArray.push(arr2[k]);
    }
    
    return newArray;
}
arr1 = [1,10,12,30,40];
arr2 = [0,5];

result = mergeSortedArrays(arr1, arr2);
console.log(result);