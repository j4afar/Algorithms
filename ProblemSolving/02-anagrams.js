/* 
        ************************************************************************************************
        This pattern use object or set to collect frequencies of values
        This can often used to avoid O(N^2) with arrays / strings
        ************************************************************************************************

        Exercice:
        Given two string check whether it's anagram or not

*/

function validAnagram(str1, str2) {
    firstStr = {}
    secondStr = {}
    
    if (str1.length != str2.length)
        return false
    
    for (let letter of str1) {
        if (firstStr.hasOwnProperty(letter))
            firstStr[letter] += 1
        else 
            firstStr[letter] = 1
    }   
    for (let letter of str2) {
        if (secondStr.hasOwnProperty(letter))
            secondStr[letter] += 1
        else 
            secondStr[letter] = 1      
    }
    for (letter of str1){
        if (firstStr[letter] != secondStr[letter])
            return false
    }
    console.log(firstStr)
    console.log(secondStr)
    return true
}

console.log(validAnagram('jaafar', 'aafajr'))
